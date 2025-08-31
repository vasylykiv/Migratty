# CHANGELOG

## [0.1.0] - 2025-08-31

I added the ability to initialize a basic _Migratty_ . By default, it is named `"migrations"`, but you can change this by creating a config file called `"migratty-config.json"` and change "_outDir_". Added a script that automatically searches for a "user-defined" _config file_, allowing you to place it in any directory.

### Added:

- **(in dev)** initialize the basic folders with command: `npm run migratty-init`.
- added support for configuring the library via a config file.

##

**migratty-config.json** (in dev)

```yaml
{
  init: {
    baseDir: "string", 
    outDir: "string", 
  }
}
```

<hr>
