module.exports = {
  "extends": "stylelint-config-sass-guidelines",
  "rules": {
    "string-quotes": "double",
    "order/properties-alphabetical-order": null,
    "max-nesting-depth": [
      3,
      {
        "ignore": [
          "blockless-at-rules"
        ]
      }
    ],
    "selector-no-qualifying-type": [
      true,
      {
        "ignore": [
          "attribute",
          "class"
        ]
      }
    ],
    "selector-class-pattern": [
      "^[a-z0-9\\-\\_]+$",
      {
        "message": "Selector should be written in lowercase with hyphens or underscores (selector-class-pattern)"
      }
    ]
  }
}