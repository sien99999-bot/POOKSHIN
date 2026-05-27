import re

def process_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Restore #app margin
    content = content.replace("margin: -44px auto 0;", "margin: 0 auto;")

    def replacer(match):
        val = int(match.group(1))
        # Do not shift elements that are at the bottom (buttons, etc.)
        if val >= 600:
            return match.group(0)
        new_val = val - 44
        return f"top:{new_val}px"
    
    # Matches top: 123px or top:123px
    content = re.sub(r'top:\s*(-?\d+)px', replacer, content)

    # Handle intro-text-box top:calc(50% - 190px);
    content = content.replace("top:calc(50% - 190px);", "top:calc(50% - 234px);")

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

process_file("onboarding.html")
print("Done")
