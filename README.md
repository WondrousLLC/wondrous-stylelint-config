# wondrous-stylelint-config

> Sass Guidelines shareable config for stylelint.

A stylelint config based on [sass-guidelin.es](https://sass-guidelin.es/) and
[stylelint-config-sass-guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines).

## Installation

```console
$ npm install --save @wondrousllc/stylelint-config
```

## Usage

Set your stylelint config to:

```json
{
  "extends": "@wondrousllc/stylelint-config"
}
```

### Extending the config

Simply add a `"rules"` key to your config and add your overrides there.

For example, to change the `indentation` to tabs and turn off the `number-leading-zero` rule:


```json
{
  "extends": "@wondrousllc/stylelint-config",
  "rules": {
    "indentation": "tab",
    "number-leading-zero": null
  }
}
```

## Creator

[WONDROUS LLC](https://www.wearewondrous.com/)

## [License](LICENSE)
