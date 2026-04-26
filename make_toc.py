import glob
import re

html_files = glob.glob('*.html')
html_files.remove('index.html')

for filepath in html_files:
    with open(filepath, 'r') as f:
        content = f.read()

    # Find the end of the Design System link
    ds_pattern = r'<a href=\"wisemetrics-design-system-v2.html\">[^<]*<span class=\"num\">07</span>Design System</a>'
    ds_match = re.search(ds_pattern, content)
    if not ds_match:
        print(f'Skipped {filepath} - no design system link found')
        continue
        
    ds_end = ds_match.end()
    
    # Find </nav>
    nav_end = content.find('</nav>', ds_end)
    if nav_end == -1:
        print(f'Skipped {filepath} - no </nav> found')
        continue
        
    local_block_raw = content[ds_end:nav_end]
    
    # Check if local block is essentially empty (just whitespace)
    if not local_block_raw.strip():
        print(f'Skipped {filepath} - no local sections')
        continue
        
    # Remove the generic 'Seções' label
    local_block = local_block_raw.replace('<div class="group-label" style="margin-top:16px">Seções</div>', '')
    
    # Clean up any leading/trailing whitespace
    local_block = local_block.strip()
    
    if not local_block:
        print(f'Skipped {filepath} - local sections was only the Seções label')
        # We still need to remove it from sidebar
        new_content = content[:ds_end] + '\n    ' + content[nav_end:]
        with open(filepath, 'w') as f:
            f.write(new_content)
        continue
        
    toc_html = f'\n    <div class="wm-toc-float">\n      <div class="wm-toc-container">\n        {local_block}\n      </div>\n    </div>'
    
    # Inject after <main class="wm-main">
    main_match = re.search(r'<main class=\"wm-main\"[^>]*>', content)
    if not main_match:
        print(f'Skipped {filepath} - no main tag found')
        continue
        
    main_end = main_match.end()
    
    # Remove local_block from nav
    new_content = content[:ds_end] + '\n    ' + content[nav_end:]
    
    # Add to main
    # We need to recalculate main_end because we modified new_content
    main_match_new = re.search(r'<main class=\"wm-main\"[^>]*>', new_content)
    main_end_new = main_match_new.end()
    
    new_content = new_content[:main_end_new] + toc_html + new_content[main_end_new:]
    
    with open(filepath, 'w') as f:
        f.write(new_content)
        
    print(f'Processed {filepath}')

