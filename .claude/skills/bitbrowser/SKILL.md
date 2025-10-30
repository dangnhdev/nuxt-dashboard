---
name: bitbrowser
description: Bitbrowser API documentation for browser automation and fingerprint management
---

# Bitbrowser Skill

Professional assistance with BitBrowser anti-detect browser development, automation, and API integration.

## When to Use This Skill

This skill should be triggered when:
- **Creating or managing browser profiles** (adding, updating, batch importing)
- **Working with BitBrowser API** endpoints (local or cloud API)
- **Setting up proxy configurations** (HTTP, SOCKS5, SSH, or extraction APIs)
- **Implementing browser fingerprint customization** (canvas, WebGL, user agent, etc.)
- **Automating multi-account management** workflows
- **Troubleshooting browser profile issues** (proxy failures, blank displays, crashes)
- **Integrating BitBrowser with RPA/automation tools**
- **Managing user permissions and team collaboration**
- **Setting up cloud phone profiles** for mobile environments

## Key Concepts

### Anti-Detect Browser
BitBrowser creates completely independent browser environments for each profile, with unique fingerprints to prevent account association. Each profile has:
- Isolated cookies, cache, and local storage
- Unique device fingerprints (Canvas, WebGL, Audio, etc.)
- Independent proxy IP configuration
- Separate user agent and platform information

### Browser Profiles
A browser profile represents a complete isolated browsing environment with:
- Platform (website) login credentials
- Proxy IP configuration
- Custom fingerprint settings
- Group assignment for organization

### Proxy Configuration
BitBrowser supports multiple proxy methods:
- **Direct Mode**: Use local network
- **HTTP/HTTPS/SOCKS5**: Standard proxy protocols
- **SSH**: Secure proxy tunneling
- **API Extraction**: Dynamic IP extraction from proxy providers (IPIDEA, 922 S5, etc.)

### Fingerprint Management
Browser fingerprints are device/browser characteristics that websites track:
- **Canvas fingerprint**: HTML5 canvas rendering signature
- **WebGL**: Graphics rendering properties
- **Audio context**: Audio processing signature
- **User Agent**: Browser/OS identification string
- **Screen resolution**: Display dimensions
- **Timezone/Language**: Geolocation indicators

## Quick Reference

### Creating Browser Profiles

#### 1. Create Windows Profile (API)
```json
{
    "name": "windows browser",
    "browserFingerPrint": {
        "coreVersion": "122",
        "ostype": "PC",
        "os": "Win32",
        "osVersion": "11,10"
    },
    "proxyMethod": 2,
    "proxyType": "noproxy"
}
```

#### 2. Create Mac Profile (API)
```json
{
    "name": "mac browser",
    "browserFingerPrint": {
        "coreVersion": "118",
        "ostype": "PC",
        "os": "MacIntel",
        "hardwareConcurrency": "10"
    },
    "proxyMethod": 2,
    "proxyType": "noproxy"
}
```

#### 3. Create iPhone Profile (API)
```json
{
    "name": "iphone browser",
    "browserFingerPrint": {
        "coreVersion": "118",
        "ostype": "IOS",
        "os": "iPhone",
        "openWidth": 500,
        "openHeight": 900,
        "resolutionType": "1",
        "resolution": "360x780",
        "devicePixelRatio": 3
    },
    "proxyMethod": 2,
    "proxyType": "noproxy"
}
```

#### 4. Create Android Profile (API)
```json
{
    "name": "android browser",
    "browserFingerPrint": {
        "coreVersion": "118",
        "ostype": "Android",
        "os": "Linux armv81",
        "openWidth": 500,
        "openHeight": 900,
        "resolutionType": "1",
        "resolution": "360x780",
        "devicePixelRatio": 2
    },
    "proxyMethod": 2,
    "proxyType": "noproxy"
}
```

### Proxy Configuration

#### 5. SOCKS5 Proxy Setup (API)
```json
{
    "proxyMethod": 2,
    "proxyType": "socks5",
    "host": "127.0.0.1",
    "port": "1080",
    "proxyUserName": "",
    "proxyPassword": ""
}
```

#### 6. Extract IP with API (IPIDEA Example)
```json
{
    "proxyMethod": 3,
    "proxyType": "ipidea",
    "extractUrl": "https://api.ipidea.net/..."
}
```

### Batch Operations

#### 7. Batch Import Template Structure
Excel/CSV format for batch importing profiles:
- **Column 1**: Browser Name
- **Column 2**: Group
- **Column 3**: Platform (URL)
- **Column 4**: Username
- **Column 5**: Password
- **Column 6**: Proxy Type (http/socks5/noproxy)
- **Column 7**: Proxy Host
- **Column 8**: Proxy Port
- **Additional columns**: Fingerprint settings

#### 8. Batch Update Workflow
1. Export profiles using "Export Selected" or "Export By Group"
2. Modify data in Excel (DO NOT change ID column)
3. Import updated file via "Batch Update"

### Common Workflows

#### 9. Setting Up New Profile (Manual)
1. Click "Add" button
2. Fill in:
   - Browser Name
   - Group (optional)
   - Platform URL & credentials
   - Proxy configuration
3. Click "Random Fingerprint" for automatic settings
4. Click "Check Proxy" to verify
5. Save profile

#### 10. Opening Multiple Profiles
```
1. Select profiles (checkbox)
2. Click "Batch Open Selected"
3. Or: Use "More operations" → "Open Selected"
```

## Reference Files

This skill includes comprehensive documentation in `references/`:

### Core Documentation
- **llms-full.md** - Complete BitBrowser documentation covering:
  - Quick start guide (installation, sign up, subscribe)
  - Browser profile management (add, import, batch operations)
  - Features and functions (groups, search, export, update)
  - User permissions and roles
  - Proxy configuration guides for major providers
  - Account security (2FA, password recovery)
  - Fingerprint settings reference

- **llms-txt.md** - API reference and integration examples:
  - Interface request parameters with examples
  - Proxy provider setup guides (922 S5, IPIDEA, IPHTML, IP2World, etc.)
  - Common issues and troubleshooting
  - Account management

- **llms.md** - Complete page index and navigation structure

- **postman-api.json** - Postman API collection with complete endpoint examples:
  - Browser operations (create, update, open, close, delete)
  - Browser listing (full details, concise view, pagination)
  - Group management (create, edit, delete, list)
  - Proxy operations (update, check, batch modify)
  - Window management (arrangement, restart, pids)
  - System health checks and user info
  - Complete request/response examples with authentication

### Navigation by Topic

**Getting Started:**
- Sign up, download, install → llms-full.md (lines 105-144)
- Subscribe and plans → llms-full.md (lines 146-160)
- OS requirements → llms-full.md (lines 108-120)

**Browser Profiles:**
- Add new profile → llms-full.md (lines 165-194)
- Batch import → llms-full.md (lines 196-217)
- Batch add → llms-full.md (lines 219-232)
- Export profiles → llms-full.md (lines 286-292)
- Batch update → llms-full.md (lines 294-306)

**Proxy Setup:**
- HTTP/HTTPS/SOCKS5 → Reference specific proxy guides
- API extraction → llms-txt.md (lines 327-359)
- 922 S5 setup → llms-txt.md (lines 436-466)
- IPIDEA setup → llms-txt.md (lines 531-576)
- IPHTML setup → llms-txt.md (lines 477-506)
- IP2World setup → llms-txt.md (lines 578-619)

**API Integration:**
- Request examples → llms-txt.md (lines 327-433)
- Platform-specific profiles → llms-txt.md (lines 344-433)
- Complete API endpoints → postman-api.json

**API Endpoints (postman-api.json):**
- `/browser/update` - Create/update browser profile
- `/browser/update/partial` - Update partial browser attributes
- `/browser/list` - Get browser list with pagination
- `/browser/list/concise` - Get simplified browser list
- `/browser/open` - Open browser window
- `/browser/close` - Close browser window
- `/browser/delete` - Delete browser profile
- `/browser/detail` - Get browser details
- `/browser/pids` - Get process IDs of browsers
- `/browser/pids/alive` - Check if browser processes are alive
- `/group/add` - Create group
- `/group/edit` - Update group
- `/group/delete` - Delete group
- `/group/list` - List groups
- `/checkagent` - Proxy detection/validation
- `/windowbounds` - Custom window arrangement
- `/userInfo` - Get user information
- `/health` - API health check

**Troubleshooting:**
- Account recovery → llms-txt.md (lines 509-519)
- Common issues → llms.md (lines 690-699)

## Working with This Skill

### For Beginners
1. **Start with manual profile creation**: Use the UI to understand profile structure
2. **Review Quick Reference #9**: Follow the step-by-step setup workflow
3. **Read proxy setup guides**: Choose your proxy provider and follow specific setup (llms-txt.md)
4. **Practice with small batches**: Create 2-3 test profiles before scaling up

### For Intermediate Users
1. **Use batch import**: Create Excel template and import multiple profiles
2. **API integration**: Study Quick Reference examples #1-6 for API requests
3. **Proxy automation**: Set up API extraction for dynamic IP rotation
4. **Group management**: Organize profiles by client/project/platform

### For Advanced Users
1. **API automation**: Build scripts using `/browser/update` endpoints
2. **RPA integration**: Connect BitBrowser with automation frameworks
3. **Custom fingerprints**: Fine-tune fingerprint parameters for specific platforms
4. **Multi-user workflows**: Set up team permissions and shared groups

### Common Tasks Quick Links

**Create First Profile:**
→ llms-full.md (lines 165-194)

**Batch Import 100+ Profiles:**
→ llms-full.md (lines 196-217)

**Fix Proxy Issues:**
→ Check proxy test, verify whitelist, check provider guides in llms-txt.md

**Export All Profiles:**
→ llms-full.md (lines 286-292)

**Set Up Team Permissions:**
→ llms-full.md (search "Users" and "Permissions")

## Important Notes

### Rate Limits
- Free plan: 10 browser profiles permanently
- Paid plans: Profile limits based on subscription tier
- API rate limits: Check specific endpoint documentation

### Best Practices
1. **One profile = One account**: Avoid logging multiple accounts into same profile
2. **Unique proxy per profile**: Prevents IP association
3. **Regular fingerprint updates**: Keep fingerprints realistic and current
4. **Group organization**: Use groups for better management at scale
5. **Backup profiles**: Regular exports for data safety

### Security Considerations
- Never share raw config with credentials
- Use 2FA for BitBrowser account
- Rotate proxy IPs regularly
- Monitor for proxy failures/blocks
- Keep BitBrowser client updated

### Common Pitfalls
- ❌ Using same proxy for multiple profiles → High association risk
- ❌ Not checking proxy before opening → Wasted time
- ❌ Deleting profiles without export → Data loss
- ❌ Ignoring fingerprint randomization → Detectable patterns
- ❌ Not setting platform URL → Manual login required

## Resources

### Official Links
- Website: https://www.bitbrowser.net
- Documentation: https://doc.bitbrowser.net
- Download: https://www.bitbrowser.net/download/

### Proxy Providers (Integrated)
- 922 S5: https://www.922proxy.com
- IPIDEA: https://www.ipidea.net
- IPHTML: https://www.iphtml.com
- IP2World: Setup guide in llms-txt.md

### Support Channels
- Official documentation for detailed guides
- Check proxy provider support for IP-related issues
- Export/import for data backup and migration

## Updating

This skill is based on official BitBrowser documentation. For latest features:
1. Check official docs at https://doc.bitbrowser.net
2. Review update logs in the BitBrowser client
3. Re-scrape documentation if significant changes occur

---

**Last Updated:** Generated from official documentation
**Version:** Based on stable release documentation
