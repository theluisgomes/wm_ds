import glob
import re

html_files = glob.glob('*.html')
html_files.remove('index.html')

unified_docs = """
      <a href="index.html"><span class="num">--</span>Hub Central</a>
      <div class="group-label" style="margin-top:16px">Documentos</div>
      <a href="identidade-visual.html"><span class="num">01</span>Identidade Visual</a>
      <a href="canais-digitais.html"><span class="num">02</span>Canais Digitais</a>
      <a href="estrategia-conteudo.html"><span class="num">03</span>Estratégia Editorial</a>
      <a href="go-to-market.html"><span class="num">04</span>Go-to-Market</a>
      <a href="servicos.html"><span class="num">05</span>Serviços &amp; Preços</a>
      <a href="modelos-proposta.html"><span class="num">06</span>Modelos de Proposta</a>
      <a href="wisemetrics-design-system-v2.html"><span class="num">07</span>Design System</a>
      <div class="group-label" style="margin-top:16px">Seções</div>
"""

for filepath in html_files:
    with open(filepath, 'r') as f:
        content = f.read()
    
    # We want to keep everything from the first local anchor.
    # Local anchors look like <a href="#..."> or they are under a group label like <div class="group-label">Seções</div>
    # Let's extract all <a href="#..."> and their preceding group labels if any, or just find the first <a href="#...">
    
    nav_match = re.search(r'(<nav class=\"wm-nav\"[^>]*>)(.*?)(</nav>)', content, re.DOTALL)
    if not nav_match:
        continue
        
    nav_open = nav_match.group(1)
    nav_inner = nav_match.group(2)
    nav_close = nav_match.group(3)
    
    # Find all lines in nav_inner. Keep only those that are local anchors or group labels that are NOT the global ones.
    lines = nav_inner.split('\n')
    local_lines = []
    
    in_local = False
    for line in lines:
        if 'href="#' in line:
            in_local = True
        
        # If it's a global document link, skip it
        if 'href="wisemetrics-branding.html"' in line or 'href="servicos.html"' in line or 'href="go-to-market.html"' in line or 'href="canais-digitais.html"' in line or 'href="estrategia-conteudo.html"' in line or 'href="identidade-visual.html"' in line or 'href="modelos-proposta.html"' in line or 'href="wisemetrics-design-system-v2.html"' in line or 'href="index.html"' in line:
            continue
            
        if 'group-label' in line and 'Documentos' in line:
            continue
            
        # For wisemetrics-branding and design-system, they have their own group labels like Fundamentos, Identidade, etc.
        # We want to keep them. But we only append them if they are not the Documentos label.
        
        # Actually, let's just collect everything that is not a global document link!
        if line.strip():
            local_lines.append(line)
            
    # Assemble the new nav_inner
    new_nav_inner = unified_docs + '\n'.join(local_lines) + '\n    '
    
    # Replace in content
    new_content = content[:nav_match.start()] + nav_open + new_nav_inner + nav_close + content[nav_match.end():]
    
    with open(filepath, 'w') as f:
        f.write(new_content)
    print(f'Updated {filepath}')

