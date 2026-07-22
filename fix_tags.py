import re

with open('/Users/amansharma/Documents/EconutrientGit/techpage/src/main.tsx', 'r') as f:
    content = f.read()

# Fix 1: hero section - close hero-copy div and hero div
old1 = '              <div className="hero-actions">\n                <a className="btn btn-primary" href="#chapter-one">Explore Bihar</a>\n                <a className="btn btn-secondary" href="#mission">Our Story</a>\n              </div>\n            <div className="hero-card"><img'
new1 = '              <div className="hero-actions">\n                <a className="btn btn-primary" href="#chapter-one">Explore Bihar</a>\n                <a className="btn btn-secondary" href="#mission">Our Story</a>\n              </div>\n            </div>\n            <div className="hero-card"><img'

if old1 in content:
    content = content.replace(old1, new1, 1)
    print("Fix 1: Applied - hero-copy div close")
else:
    print("Fix 1: NOT FOUND")

# Fix 2: mission section - close map-grid inner div and map-grid div
# Look for: <div className="legend-item">...Other States...\n                <div className="map-art"
old2 = '                  <div className="legend-item"><span className="dot muted" /><span>Other States &mdash; Coming Soon</span></div>\n                <div className="map-art"'
new2 = '                  <div className="legend-item"><span className="dot muted" /><span>Other States &mdash; Coming Soon</span></div>\n                </div>\n                <div className="map-art"'

if old2 in content:
    content = content.replace(old2, new2, 1)
    print("Fix 2: Applied - mission div close")
else:
    print("Fix 2: NOT FOUND")

# Fix 3: mission section - close map-grid div after map-art
old3 = '                  </svg>\n                </div>\n            </div>\n        </section>'
new3 = '                  </svg>\n                </div>\n              </div>\n            </div>\n          </div>\n        </section>'

if old3 in content:
    content = content.replace(old3, new3, 1)
    print("Fix 3: Applied - mission card div close")
else:
    print("Fix 3: NOT FOUND")

# Fix 4: chapter-one - close chapter-card div
old4 = '              <div className="chapter-image"><img src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80" alt="Golden landscape and food culture from Bihar" /></div>\n          </div>\n        </section>'
new4 = '              <div className="chapter-image"><img src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80" alt="Golden landscape and food culture from Bihar" /></div>\n            </div>\n          </div>\n        </section>'

if old4 in content:
    content = content.replace(old4, new4, 1)
    print("Fix 4: Applied - chapter-card div close")
else:
    print("Fix 4: NOT FOUND")

# Fix 5: products - close section-inner div  
old5 = '            </div>\n        </section>\n        <section id="story"'
new5 = '            </div>\n          </div>\n        </section>\n        <section id="story"'

if old5 in content:
    content = content.replace(old5, new5, 1)
    print("Fix 5: Applied - products section-inner close")
else:
    print("Fix 5: NOT FOUND")

# Fix 6: story section - close story-content div and story-grid div and section-inner div
old6 = '                <div className="hero-actions" style={{ marginTop: \'1.2rem\' }}><a className="btn btn-primary" href="#products">Shop Sattu</a></div>\n            </div>\n        </section>\n        <section id="journey"'
new6 = '                <div className="hero-actions" style={{ marginTop: \'1.2rem\' }}><a className="btn btn-primary" href="#products">Shop Sattu</a></div>\n              </div>\n            </div>\n          </div>\n        </section>\n        <section id="journey"'

if old6 in content:
    content = content.replace(old6, new6, 1)
    print("Fix 6: Applied - story section close")
else:
    print("Fix 6: NOT FOUND")

# Fix 7: journey - close section-inner div
old7 = '            </div>\n        </section>\n        <section id="recipes"'
new7 = '            </div>\n          </div>\n        </section>\n        <section id="recipes"'

if old7 in content:
    content = content.replace(old7, new7, 1)
    print("Fix 7: Applied - journey section-inner close")
else:
    print("Fix 7: NOT FOUND")

# Fix 8: recipes - close section-inner div
old8 = '                <a className="btn btn-cream" href="#recipes">Explore Recipes</a></div>\n        </section>\n        <section id="contact"'
new8 = '                <a className="btn btn-cream" href="#recipes">Explore Recipes</a></div>\n          </div>\n        </section>\n        <section id="contact"'

if old8 in content:
    content = content.replace(old8, new8, 1)
    print("Fix 8: Applied - recipes section-inner close")
else:
    print("Fix 8: NOT FOUND")

# Fix 9: contact - close founder-copy div, founder-card div, section-inner div
old9 = '                <a className="btn btn-cream" href="#home">Read Our Story</a>\n              </div>\n          </div>\n        </section>\n      </main>'
new9 = '                <a className="btn btn-cream" href="#home">Read Our Story</a>\n              </div>\n            </div>\n          </div>\n        </section>\n      </main>'

if old9 in content:
    content = content.replace(old9, new9, 1)
    print("Fix 9: Applied - contact section close")
else:
    print("Fix 9: NOT FOUND")

# Fix 10: footer - close footer-card div
old10 = '          <div className="footer-note">Every Indian state has a story. This is only the beginning.</div>\n      </footer>\n    </div>'
new10 = '          <div className="footer-note">Every Indian state has a story. This is only the beginning.</div>\n        </div>\n      </footer>\n    </div>'

if old10 in content:
    content = content.replace(old10, new10, 1)
    print("Fix 10: Applied - footer-card div close")
else:
    print("Fix 10: NOT FOUND")

# Verify overall div balance
total_opens = content.count('<div') + content.count('<header') + content.count('<main') + content.count('<footer') + content.count('<section') + content.count('<nav')
total_closes = content.count('</div') + content.count('</header') + content.count('</main') + content.count('</footer') + content.count('</section') + content.count('</nav')
print(f"\nTotal opens: {total_opens}, Total closes: {total_closes}, Diff: {total_opens - total_closes}")

with open('/Users/amansharma/Documents/EconutrientGit/techpage/src/main.tsx', 'w') as f:
    f.write(content)
print("Done writing file")
