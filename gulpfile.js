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
          "custom-property-no-outside-root": [2]// :rootセレクタ以外でのカスタムプロパティを許可しないこと
        }
      }),
      require('postcss-reporter')({
        clearMessages: true
      })//,
      //require('cssnano')()
    ]))
    .pipe(gulp.dest('./dist/css'));
});
