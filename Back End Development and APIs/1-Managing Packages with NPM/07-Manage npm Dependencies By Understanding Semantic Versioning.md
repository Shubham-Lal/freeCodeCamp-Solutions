# Manage npm Dependencies By Understanding Semantic Versioning

Versions of the npm packages in the dependencies section of your package.json file follow what’s called Semantic Versioning (SemVer), an industry standard for software versioning aiming to make it easier to manage dependencies. Libraries, frameworks or other tools published on npm should use SemVer in order to clearly communicate what kind of changes projects can expect if they update.

Knowing SemVer can be useful when you develop software that uses external dependencies (which you almost always do). One day, your understanding of these numbers will save you from accidentally introducing breaking changes to your project without understanding why things that worked yesterday suddenly don’t work today. This is how Semantic Versioning works according to the official website:

`"package": "MAJOR.MINOR.PATCH"`

The MAJOR version should increment when you make incompatible API changes. The MINOR version should increment when you add functionality in a backwards-compatible manner. The PATCH version should increment when you make backwards-compatible bug fixes. This means that PATCHes are bug fixes and MINORs add new features but neither of them break what worked before. Finally, MAJORs add changes that won’t work with earlier versions.

---

In the dependencies section of your package.json file, change the version of @freecodecamp/example to match MAJOR version 1, MINOR version 2 and PATCH version 13

---

### Solution Link: [Click Here](https://boilerplate-npm.certified2003.repl.co)
