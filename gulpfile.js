var gulp = require('gulp'),
  postcss = require('gulp-postcss');


gulp.task('css', function () {
  return gulp
    .src('./src/css/*.css')
    .pipe(postcss([
      require('autoprefixer')(),
      require('stylelint')({
        "rules": {
          // String
          "string-quotes": [2, "single"],// クォーテーションを統一すること / option: "single" | "double"

          // Color
          "color-hex-case": [2, "lower"],// 16進数のカラーコードを大文字か小文字で統一すること / option: "upper" | "lower"
          "color-hex-length": [2, "long"],// 16進数のカラーコードを省略するか否かを統一すること / option: "short" | "long"
          "color-no-invalid-hex": [2],// 無効なカラーコードを許可しないこと

          // Number
          "number-leading-zero": [2, "always"],// 1以下の少数の値で、小数点の前に0を入れるか入れないかを統一すること / option: "always" | "never"
          "number-max-precision": [2, 2],// 小数点以下の桁数を制御すること / option: int
          "number-no-trailing-zeros": [2],// 不要な0を許可しないこと
          "number-zero-length-no-unit": [2],// 値が0の場合に単位をつけないこと

          // Function
          "function-calc-no-unspaced-operator": [2],// 関数calcの中でスペースなしの式を許可しないこと
          "function-comma-space-after": [2, "always"],// 関数の中でカンマの直後にスペースを空けることを許可するか否かを統一すること / option: "always" | "never"
          "function-comma-space-before": [2, "never"],// 関数の中でカンマの直前にスペースを空けることを許可するか否かを統一すること / option: "always" | "never"
          "function-linear-gradient-no-nonstandard-direction": [2],// 仕様に沿ってない方角の値を許可しないこと
          "function-parentheses-space-inside": [2, "never"],// ()の内側にスペースを許可しないか否かを統一すること / option: "always" | "never"
          "function-space-after": [2, "always"],// 関数の直後にスペースを許可しないか否かを統一すること / option: "always" or "never"
          "function-url-quotes": [2, "none"],// urlをダブルクォーテーションで囲うか、シングルクォーテーションで囲うか、クォーテーションで囲わないかを統一すること / option: "single" | "double" | "none"

          // Value
          "value-no-vendor-prefix": [2],// ベンダープレフィックスを許可しないこと

          // Value list
          "value-list-comma-newline-after": [2, "never-multi-line"],// リストの値で、カンマの直後にスペースを許可しないか、改行を必須にすること / option: "always" | "always-multi-line" | "never-multi-line"
          "value-list-comma-newline-before": [2, "never-multi-line"],// リストの値で、カンマの直前にスペースを許可しないか、改行を必須にすること / option: "always" | "always-multi-line" | "never-multi-line"
          "value-list-comma-space-after": [2, "always"],// リストの値で、カンマの直後にスペースを許可するか否かを統一すること / "always" | "never" | "always-single-line" | "never-single-line"
          "value-list-comma-space-before": [2, "never"],// リストの値で、カンマの直前にスペースを許可するか否かを統一すること / "always" | "never" | "always-single-line" | "never-single-line"

          // Property
          "property-blacklist": [2, ["text-rendering"]],// 許可しないプロパティをリストで指定すること / option: array
          "property-no-vendor-prefix": [2],// 不要なベンダープレフィックスのプロパティを許可しないこと
          "property-whitelist": [2, ["display"]],// 許可するプロパティをリストで指定すること / option: array

          // Custom property
          "custom-property-no-outside-root": [2],// :rootセレクタ以外でのカスタムプロパティを許可しないこと
          "custom-property-pattern": [2, /foo-.+/],// カスタムプロパティのパターンを指定すること / option: regex | string

          // Declaration
          "declaration-bang-space-after": [2, "never"],// エクスクラメーションマークの直後にスペースを入れることを許可するか否かを統一すること / option: "always" | "never"
          "declaration-bang-space-before": [2, "always"],// エクスクラメーションマークの直前にスペースを入れることを許可するか否かを統一すること / option: "always" | "never"
          "declaration-colon-newline-after": [2, "always-multi-line"],// コロンの直後に改行を必須にするかスペースを許可しないか統一すること / option: "always" | "always-multi-line"
          "declaration-colon-space-after": [2, "always"],// コロンの直後にスペースを入れることを許可するか否かを統一すること / option: "always" | "never" | "always-single-line"
          "declaration-colon-space-before": [2, "never"],// コロンの直前にスペースを入れることを許可するか否かを統一すること / option: "always" | "never"
          "declaration-no-important": [2],// !important の使用を許可しないこと

          // Declaration block
          "declaration-block-semicolon-newline-after": [2, "always-multi-line"],// セミコロンの直後にスペースを許可しないか改行を必須にするかを統一すること / option: "always" | "always-multi-line" | "never-multi-line"
          "declaration-block-semicolon-newline-before": [2, "never-multi-line"],// セミコロンの直前にスペースを許可しないか改行を必須にするかを統一すること / option: "always" | "always-multi-line" | "never-multi-line"
          "declaration-block-semicolon-space-after": [2, "always"],// セミコロンの直後にスペースを入れることを許可するか否かを統一すること / option: "always" | "never" | "always-single-line" | "never-single-line"
          "declaration-block-semicolon-space-before": [2, "never"],// セミコロンの直前にスペースを入れることを許可するか否かを統一すること / option: "always" | "never" | "always-single-line" | "never-single-line"

          // Nesting Block
          "nesting-block-opening-brace-newline-before": [2, "always-multi-line"],// ネストしたブロックの開き括弧の直前に改行を必須にするかスペースを許可しないかと統一すること / option: "always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line"
          "nesting-block-opening-brace-space-before": [2, "never"],// ネストしたブロックの開き括弧の直前にスペースを許可するか否かを統一すること / option: "always" | "never" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line"

          // Block
          "block-closing-brace-newline-after": [2, "always"],// ブロックの閉じ括弧の直後に改行を必須にするかスペースを許可しないかを統一すること / option: "always" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line"
          "block-closing-brace-newline-before": [2, "always"],// ブロックの閉じ括弧の直前に改行を必須にするかスペースを許可しないかを統一すること / option: "always" | "always-multi-line" | "never-multi-line"
          "block-closing-brace-space-after": [2, "always"],// ブロックの閉じ括弧の直後にスペースを許可するか否かを統一すること / option: "always" | "never" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line"
          "block-closing-brace-space-before": [2, "never"],// ブロックの閉じ括弧の直前にスペースを許可するか否かを統一すること / option: "always" | "never" | "always-single-line" | "never-single-line" | "always-multi-line" | "never-multi-line"
          "block-no-empty": [2],// 空のブロックを許可しないこと
          "block-opening-brace-newline-after": [2, "always"],// ブロックの開き括弧の直後に改行を必須にすること / option: "always" | "always-multi-line" | "never-multi-line"
          "block-opening-brace-newline-before": [2, "always-multi-line"],// ブロックの開き括弧の直前に改行を必須にするかスペースを許可しないかを統一すること / option: "always" | "always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line"
          "block-opening-brace-space-after": [2, "never-single-line"],// ブロックの開き括弧の直後に改行を必須にするかスペースを許可しないかを統一すること / option: "always"|"never"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line"
          "block-opening-brace-space-before": [2, "always"],// ブロックの開き括弧の直前にスペースを許可するか否かを統一すること / option: "always"|"never"|"always-single-line"|"never-single-line"|"always-multi-line"|"never-multi-line"
          // Selector
          "selector-combinator-space-after": [2, "always"],// セレクタの組み合わせの直後にスペースを許可するか否かを統一すること / option: "always" | "never"
          "selector-combinator-space-before": [2, "always"],// セレクタの組み合わせの直前にスペースを許可するか否かを統一すること / option: "always" | "never"
          "selector-no-attribute": [2],// 属性セレクタを許可しないこと
          "selector-no-combinator": [2],// セレクタの組み合わせを許可しないこと
          "selector-no-id": [2],// idセレクタを許可しないこと
          "selector-no-type": [2],// 要素型セレクタを許可しないこと
          "selector-no-universal": [2],// ユニバーサルセレクタを許可しないこと
          "selector-no-vendor-prefix": [2],// ベンダープレフィックスつきのセレクタを許可しないこと
          "selector-pseudo-element-colon-notation": [2, "double"],// 疑似要素のコロン表記を1つか2つか統一すること / option: "single" | "double"
          "selector-root-no-composition": [2],// :root を他のセレクタと合わせて記述することを許可しないこと

          // Selector list
          "selector-list-comma-newline-after": [2, "always-multi-line"],// セレクタのリストで、カンマの直後に改行を必須にするかスペースを許可しないかを統一すること / option: "always"|"always-multi-line"|"never-multi-line"
          "selector-list-comma-newline-before": [2, "never-multi-line"],// セレクタのリストで、カンマの直前に改行を必須にするかスペースを許可しないかを統一すること / option: "always"|"always-multi-line"|"never-multi-line"
          "selector-list-comma-space-after": [2, "always-single-line"],// セレクタのリストで、カンマの直後にスペースを許可するか否かを統一すること / option: "always"|"never"|"always-single-line"|"never-single-line"
          "selector-list-comma-space-before": [2, "never"],// セレクタのリストで、カンマの直前にスペースを許可するか否かを統一すること / option: "always"|"never"|"always-single-line"|"never-single-line"

          // Rule
          "rule-nested-empty-line-before": [2, "always"],// ネストしたルールの直前に空白行を必須にするか許可しないかを統一すること / option: "always"|"never"|"always-multi-line"|"never-multi-line"
          "rule-no-duplicate-properties": [2],// ルールの中でプロパティの重複を許可しないこと
          "rule-no-shorthand-property-overrides": [2],// ショートハンドプロパティで上書きすることを許可しないこと
          "rule-no-single-line": [2],// 単一行でルールを記述することを許可しないこと
          "rule-non-nested-empty-line-before": [2, "always"],// ネストしてないルールの直前に空白行を必須にするか許可しないかを統一すること / option: "always"|"never"|"always-multi-line"|"never-multi-line"
          "rule-properties-order": [2, "alphabetical"],// ルールの中でプロパティの順序を指定すること / option: "alphabetical" | array
          "rule-trailing-semicolon": [2, "always"],// 省略可能なセミコロンを必須にするか許可しないかを統一すること / option: "always" | "never"

          // Root
          "root-no-standard-properties": [2],// 標準のプロパティを :root の中で許可しないこと

          // Media feature
          "media-feature-colon-space-after": [2, "always"],// メディアフィーチャーの中で、コロンの直後にスペースを必須にするか許可しないかを統一すること / option: "always" | "never"
          "media-feature-colon-space-before": [2, "never"],// メディアフィーチャーの中で、コロンの直前にスペースを必須にするか許可しないかを統一すること / option: "always" | "never"
          "media-feature-name-no-vendor-prefix": [2],// メディアフィーチャーの名前にベンダープレフィックスを許可しないこと
          "media-feature-range-operator-space-after": [2, "always"],// メディアフィーチャーの中で、範囲演算子の直後にスペースを必須にするか許可しないかを統一すること / option: "always" | "never"
          "media-feature-range-operator-space-before": [2, "always"],// メディアフィーチャーの中で、範囲演算子の直前にスペースを必須にするか許可しないかを統一すること / option: "always" | "never"

          // Custom media
          "custom-media-pattern": [2, /foo-.+/],// カスタムメディアクエリの命名パターンを指定すること / option: regex | string

          // Media query
          "media-query-parentheses-space-inside": [2, "never"],// メディアクエリの括弧の内側にスペースを必須にするか許可しないかを統一すること / option: "always" | "never"
          // Media query list
          "media-query-list-comma-newline-after": [2, "never-multi-line"]// メディアクエリのリストで、カンマの直後に改行を必須にするかスペースを許可しないか統一すること / option: "always"|"always-multi-line"|"never-multi-line"
        }
      }),
      require('postcss-reporter')({
        clearMessages: true
      })//,
      //require('cssnano')()
    ]))
    .pipe(gulp.dest('./dist/css'));
});
