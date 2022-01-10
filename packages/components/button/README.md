# 按钮

## 类型

1. Primary：主按钮
2. Secondary：次按钮
3. Default：默认按钮
4. Text：文本按钮
5. Link：链接按钮

## 状态

1. Success：成功
2. Warning：警告
3. Danger：错误

## 样式 - var

```Scss
// 基础
$padding-lr: 16px;
$padding-tb: 4px;
$font-size: 14px
$font-weight: inherit;
$line-height: 1;
$border: 1px solid #cbd5e1;
$border-radius: 4px;
$background-color: #fff;
```

### 主按钮

按钮状态：只变化背景色

```scss
.s-button-primary {
  color: var(--s-color-white);
  border-color: transparent;
  background-color: var(--s-button-primary-light-5);

  &:hover,
  &:focus {
    background-color: var(--s-button-primary-light-4);
  }

  &:active {
    background-color: var(--s-button-primary-light-6);
  }

  &:disabled {
    background-color: var(--s-button-primary-light-2);
  }

  // $state: 'success', 'warning', 'danger'
  &.is-#{$state} {
    background-color: var(--s-button-#{$state}-light-5);

    &:hover,
    &:focus {
      background-color: var(--s-button-#{$state}-light-4);
    }

    &:active {
      background-color: var(--s-button-#{$state}-light-6);
    }

    &:disabled {
      background-color: var(--s-button-#{$state}-light-2);
    }
  }
}
```

### 次按钮

按钮状态：只变化字体色

```scss
.s-button-primary {
  color: var(--s-button-primary-light-5);
  border-color: transparent;
  background-color: var(--s-button-primary-light-0);

  &:hover,
  &:focus {
    color: var(--s-button-primary-light-4);
  }

  &:active {
    color: var(--s-button-primary-light-6);
  }

  &:disabled {
    color: var(--s-button-primary-light-2);
  }

  // $state: 'success', 'warning', 'danger'
  &.is-#{$state} {
    color: var(--s-button-#{$state}-light-5);
    background-color: var(--s-button-#{$state}-light-0);

    &:hover,
    &:focus {
      color: var(--s-button-#{$state}-light-4);
    }

    &:active {
      color: var(--s-button-#{$state}-light-6);
    }

    &:disabled {
      color: var(--s-button-#{$state}-light-2);
    }
  }
}
```

### 默认按钮

按钮状态：只变化边框色

```scss
.s-button-default {
  color: var(--s-button-default-light-5);
  border-color: var(--s-button-default-light-4);
  background-color: var(--s-color-white);

  &:hover,
  &:focus {
    color: var(--s-button-primary-light-5);
    border-color: var(--s-button-primary-light-5);
  }

  &:active {
    color: var(--s-button-primary-light-6);
    border-color: var(--s-button-primary-light-6);
  }

  &:disabled {
    color: var(--s-button-default-light-2);
    border-color: var(--s-button-default-light-2);
  }

  // $state: 'success', 'warning', 'danger'
  &.is-#{$state} {
    border-color: var(--s-button-#{$state}-light-5);
    color: var(--s-button-#{$state}-light-5);

    &:hover,
    &:focus {
      color: var(--s-button-#{$state}-light-4);
      border-color: var(--s-button-#{$state}-light-4);
    }

    &:active {
      color: var(--s-button-#{$state}-light-6);
      border-color: var(--s-button-#{$state}-light-6);
    }

    &:disabled {
      color: var(--s-button-#{$state}-light-2);
      border-color: var(--s-button-#{$state}-light-2);
    }
  }
}
```

### 文本按钮

按钮状态：只变化背景色

```scss
.s-button-text {
  color: var(--s-button-default-light-5);
  border-color: transparent;
  background-color: var(--s-color-white);

  &:hover,
  &:focus {
    background-color: var(--s-button-default-light-0);
  }

  &:active {
    color: var(--s-button-default-light-6);
    background-color: var(--s-button-default-light-0);
  }

  &:disabled {
    color: var(--s-button-default-light-2);
    background-color: var(--s-color-white);
  }

  // $state: 'success', 'warning', 'danger'
  &.is-#{$state} {
    color: var(--s-button-#{$state}-light-5);

    &:hover,
    &:focus {
      background-color: var(--s-button-#{$state}-light-0);
    }

    &:active {
      color: var(--s-button-#{$state}-light-6);
    }

    &:disabled {
      color: var(--s-button-#{$state}-light-2);
      background-color: var(--s-color-white);
    }
  }
}
```

### 链接按钮

按钮状态：只变化文字色

```scss
.s-button-link {
  border-color: transparent;
  color: var(--s-button-primary-light-5);
  background-color: transparent;

  &:hover,
  &:focus {
    color: var(--s-button-primary-light-4);
  }

  &:active {
    color: var(--s-button-primary-light-6);
  }

  &:disabled {
    color: var(--s-button-primary-light-2);
  }
}
```
