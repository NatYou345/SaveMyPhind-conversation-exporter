# Changelog
# v1.9.9
### Features:
- Search bar above threads list to filter threads
- Open a form when uninstalled to ask for feedback
- Add type (Phind Search, Phind Pair, ChatGPT) between date and title in filename + in header link

### Bugs fixed:
- "Rate on Chrome Web Store" for Firefox users
  => Specify both links in infos.json and change for each browser
- Page title bug
- Fetch extension infos corrctly

### Security and maintenance:
- Externalize popup text into an external file
- Divide contentScript code into modules

# v1.8.4
### Features:
- "Export This Thread" button into the Phind interface to export the current thread
- New "Export All Threads" button into the Phind interface to export all threads!
- Update modal to inform users about the new features

### Bugs fixed:
- Fix filename export error

### Security and maintenance:
- Module structure improvements

# v1.5.3
### Features:
- Pair programmer: 
  - Export Sources correctly
  - Export All Search results correctly
  - Put correct index before links both in sources and all search results list

### Bugs fixed:
- Extension icon updated for already opened tabs in windows
- AI name bug solved (error charAt not a function when no AI name)
- Fix link formatting with < and > characters
- Fix text formatting with < and > characters

### Security and maintenance:
- Module structure improvements

# v1.2.8
### Features:
- Icon is adapted to each site (Phind, disabled, etc.)

### Security and maintenance:
- Module structure improvements

### Bugs fixed:
- File title error in "Pair programmer" due to removed textbox
- Make extension icon with transparent background

# v1.0.1
### Features:
- Make Save my Phind available on Firefox

### Security and maintenance:
- Divide code into modules
- Remove unused libraries
- Use `npm` to manage dependencies
- License list generation
- Build automation

# v0.21.1
### Feature:
- Export Phind Pair Programming threads!!!

# v0.20.3
### Features:
- Reduce file title length and move the next as the subtitle
- Title stops at the first line break (and ending whitespaces are removed)
- Export complete user questions unfolding and refolding them
- Copy to clipboard when clicking on the extension icon (in addition to file download 😉)

### Security and maintenance:
- Comments + better code structuration

### Bugs fixed:
- Reduced filename length (too long titles can cause problems with OS or Git)
- Import line breaks in user questions and search bar (Phind uses spaces as line breaks)
- Some structure improvements in markdown export

# v0.16.2
### Features:
- Model name instead of "AI Answer" (e.g. "GPT-3.5 Answer", "Phind Answer")
- Source numbers next to the source links (numbered list corresponding to citations)
- Export question above sources
- Code type (language) specified in codeblocks

### Bugs fixed:
- Special characters in title were not correctly formatted (e.g. "\n" should be "\\n")

# v0.13.2
### Features:
- Export citations

### Bugs fixed:
- Fix not exporting AI response when citations are present
- Fix broken links with square brackets

# v0.12.2
### Bugs fixed:
- AI response and sources are back
- Now code blocks are correctly formatted

# v0.11.2
### Features:
- Now exports source links
- Link to the Phind original search on the file top

### Security:
- Sanitize HTML code

### Bugs fixed:
- Inconsistent spaces between questions and answers

# v0.9.0
### Bugs fixed:
- Fix bug "AI Answer" with user question
- File title is from search bar

# v0.8.0
### Features:
- Export conversation to markdown