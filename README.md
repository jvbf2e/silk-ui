# Eslint + Prettier + Husky + Commitlint+ Lint-staged 规范前端工程代码规范

## 1.代码规范

### Eslint：代码检查工具

```
npm i eslint -D
npx eslint --init
```

### Prettier：代码风格工具

```
npm i prettier eslint-config-prettier eslint-plugin-prettier -D
```

在.eslintrc 中，extend 中添加 "prettier" 解决 eslint 和 prettier 的冲突

## 2.git 规范

### 安装流程

1.  `npm i lint-staged husky -D`
2.  `npm set-script prepare "husky install" # 在package.json中添加脚本`
3.  `npm run prepare # 初始化husky,将 git hooks 钩子交由,husky执行`
4.  `npx husky add .husky/pre-commit "npx lint-staged"`
5.  根目录创建 .lintstagedrc.json 文件控制检查和操作方式
    ```
    {
      "_.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"],
      "_.md": ["prettier --write"]
    }
    ```
6.  `npm i commitlint @commitlint/config-conventional -D`
7.  `npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`
8.  `npm i commitizen cz-conventional-changelog -D`
9.  `npm set-script commit "git-cz" # package.json 中添加 commit 指令, 执行 'git-cz' 指令`
10. `npx commitizen init cz-conventional-changelog --save-dev --save-exact`
11. `npm i -D commitlint-config-cz cz-customizable`
12. 根目录创建 commitlint.config.js 文件
    ```
    module.exports = {
        // 采用 cz 自定义的提交规范, > .cz-config.js
        extends: ["cz"],
        rules: {
            // 自定义规则
        },
    };
    ```
13. 根目录创建 .cz-config.js 文件

    ```
    "use strict";

    module.exports = {
        types: [
            { value: "✨特性", name: "特性:    一个新的特性" },
            { value: "🐛修复", name: "修复:    修复一个Bug" },
            { value: "📝文档", name: "文档:    变更的只有文档" },
            { value: "💄格式", name: "格式:    空格，分号等格式修复" },
            { value: "♻️重构", name: "重构:    代码重构，注意和特性、修复区分开" },
            { value: "⚡️性能", name: "性能:    提示性能" },
            { value: "✅测试", name: "测试:    添加一个测试" },
            { value: "🔧工具", name: "工具:    开发工具变动(构建、脚手架工具等)" },
            { value: "⏪️回滚", name: "回滚:    代码回退" },
        ],
        scopes: [{ name: "" }],
        messages: {
            type: "选择一种你的提交类型：",
            scope: "选择一个scope (可选)：",
            customScope: "此更改的范围：",
            subject: "短说明：\n",
            body: '长说明，使用"|"换行(可选)：\n',
            breaking: "非兼容性说明(可选)：\n",
            footer: "关联关闭的issue，列如：#31，#34(可选)：\n",
            confirmCommit: "确定提交说明？(y/n)",
        },
    };
    ```

14. package.json 中,将原来 commit 配置,变更为自定义配置
    ```
    ...
    "config": {
        "commitizen": {
            "path": "node_modules/cz-customizable"
        }
    }
    ...
    ```

## 3. 其他

[![Gitji](https://cloud.githubusercontent.com/assets/7629661/20073135/4e3db2c2-a52b-11e6-85e1-661a8212045a.gif)](https://gitmoji.dev)
