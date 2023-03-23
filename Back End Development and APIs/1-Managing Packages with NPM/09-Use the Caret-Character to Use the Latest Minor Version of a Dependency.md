# Use the Caret-Character to Use the Latest Minor Version of a Dependency

Similar to how the tilde we learned about in the last challenge allows npm to install the latest PATCH for a dependency, the caret (^) allows npm to install future updates as well. The difference is that the caret will allow both MINOR updates and PATCHes.

Your current version of @freecodecamp/example should be ~1.2.13 which allows npm to install to the latest 1.2.x version. If you were to use the caret (^) as a version prefix instead, npm would be allowed to update to any 1.x.x version.

`"package": "^1.3.8"`

This would allow updates to any 1.x.x version of the package.

---

Use the caret (^) to prefix the version of @freecodecamp/example in your dependencies and allow npm to update it to any new MINOR release.

Note: The version numbers themselves should not be changed.

---

### Solution Link: [Click Here](https://boilerplate-npm.certified2003.repl.co)
