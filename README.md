# 🎨 My Mini UI Library ✨

이 프로젝트는 **React**와 **TypeScript**를 기반으로 한 UI 컴포넌트 라이브러리입니다. **Emotion**을 사용하여 스타일링을 구현하며, 다양한 UI 컴포넌트를 제공하여 React 애플리케이션에서 손쉽게 UI 컴포넌트를 사용할 수 있습니다.

## 🛠 사용 기술

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black&height=40&width=120&border-radius=12) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white&height=40&width=120&border-radius=12) ![Emotion](https://img.shields.io/badge/Emotion-DB7093?style=for-the-badge&logo=emotion&logoColor=white&height=40&width=120&border-radius=12) ![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white&height=40&width=120&border-radius=12)

## 주요 기능

이 라이브러리는 다양한 기본 UI 컴포넌트를 제공합니다.

- **`Button`**: 다양한 크기와 스타일을 가진 버튼 컴포넌트.
- **`Card`**: 정보 카드를 위한 컴포넌트.
- **`Image`**: 이미지 로딩 상태와 에러를 처리하는 컴포넌트.
- **`TextField`**: 텍스트 입력을 위한 컴포넌트.
- **`Dropdown`**: 옵션 리스트에서 하나를 선택할 수 있는 드롭다운 컴포넌트.
- **`Menu`**: 다양한 항목을 표시하는 기본 네비게이션 메뉴 컴포넌트.
- **`Slider`**: 범위 내에서 값을 슬라이딩하여 선택하는 슬라이더 컴포넌트.
- **`ImageButton`**: 이미지를 기반으로 클릭할 수 있는 버튼 컴포넌트.
- **`Carousel`**: 자동 슬라이드와 수동 슬라이드를 지원하는 캐러셀 컴포넌트.
- **`Modal`**: 오버레이 팝업 UI를 제공하는 모달 컴포넌트.
- **`Tooltip`**: 사용자 인터페이스 요소에 마우스를 올리면 추가 정보를 표시하는 컴포넌트.
- **`Interactive Carousel (TODO)`**: 카드가 튀어나오는 효과와 역동적인 애니메이션을 제공하는 인터랙티브 캐러셀 컴포넌트.

---

## 설치 방법

현재 이 라이브러리는 GitHub에서 소스를 직접 다운로드하여 사용할 수 있습니다. 추후 npm에 배포할 예정입니다. 🙇‍♀️

## 📖 컴포넌트

이 라이브러리는 기본적이고 유용한 컴포넌트를 제공합니다. 각 컴포넌트는 사용하기 쉽고, 필요에 따라 커스터마이징 가능합니다.



### 1️⃣ Button 컴포넌트

`Button` 컴포넌트는 다양한 스타일의 버튼을 제공하며, 클릭 시 이벤트를 처리할 수 있는 버튼입니다. 다양한 속성을 통해 버튼의 크기, 색상, 테두리 스타일, 비활성화 상태 등을 커스터마이즈할 수 있습니다.

#### Props

| 이름        | 타입                                  | 기본값      | 설명                                                   |
| ----------- | ------------------------------------- | ----------- | ------------------------------------------------------ |
| `variant`   | `"primary" \| "secondary" \| "light"` | `"primary"` | 버튼의 색상 변형을 설정합니다.                         |
| `outline`   | `boolean`                             | `false`     | 버튼에 테두리만 표시하고 배경을 투명하게 만듭니다.     |
| `size`      | `"small" \| "medium" \| "large"`      | `"medium"`  | 버튼의 크기를 설정합니다. (`small`, `medium`, `large`) |
| `rounded`   | `boolean`                             | `false`     | 버튼의 모서리를 둥글게 설정합니다.                     |
| `disabled`  | `boolean`                             | `false`     | 버튼을 비활성화합니다.                                 |
| `className` | `string`                              | `undefined` | 추가적인 스타일을 지정할 수 있습니다.                  |

#### 사용 예시

```tsx
<Button
  variant="primary"
  size="large"
  rounded={true}
  onClick={handleClick}
  className="custom-button"
>
  클릭하세요
</Button>
```

### 2️⃣ Card 컴포넌트

`Card` 컴포넌트는 카드 형식의 콘텐츠를 표시하며, 제목, 설명, 이미지 등을 포함할 수 있습니다. 카드의 `width` 값에 따라 텍스트 크기와 레이아웃이 자동으로 조정됩니다.

#### Props

| 이름          | 타입              | 설명                                                          |
| ------------- | ----------------- | ------------------------------------------------------------- |
| `title`       | `string`          | 카드의 제목을 설정합니다.                                     |
| `description` | `string`          | 카드의 설명을 설정합니다.                                     |
| `image`       | `React.ReactNode` | 카드에 표시할 이미지를 설정합니다.                            |
| `width`       | `number`          | 카드의 너비를 설정합니다.                                     |
| `height`      | `number`          | 카드의 높이를 설정합니다.                                     |
| `className`   | `string`          | 카드의 스타일을 커스터마이징할 수 있는 클래스명을 설정합니다. |

#### 사용 예시

```tsx
<Card
  title="카드 제목"
  description="카드의 간단한 설명입니다."
  image={<img src="image.jpg" alt="Card Image" />}
  width={300}
  height={400}
  className="custom-card"
/>
```

### 3️⃣ Image 컴포넌트

이미지 로딩 중, 에러 발생 시 fallback UI를 제공하며, 기본적으로 로딩 애니메이션과 에러 메시지를 표시하는 이미지 컴포넌트입니다.

#### **Props**

| 속성            | 타입              | 기본값                  | 설명                                                      |
| --------------- | ----------------- | ----------------------- | --------------------------------------------------------- |
| `src`           | `string`          | -                       | 이미지의 URL을 지정합니다.                                |
| `alt`           | `string`          | -                       | 이미지의 대체 텍스트를 지정합니다.                        |
| `width`         | `string`          | `100%`                  | 이미지의 너비를 설정합니다. 기본값은 100%.                |
| `height`        | `string`          | `auto`                  | 이미지의 높이를 설정합니다. 기본값은 자동 조정됩니다.     |
| `fallback`      | `React.ReactNode` | 로딩 중 스피너 컴포넌트 | 이미지가 로딩 중일 때 표시할 UI 컴포넌트를 지정합니다.    |
| `errorFallback` | `React.ReactNode` | 에러 발생 시 아이콘     | 이미지 로드 에러 발생 시 표시할 UI 컴포넌트를 지정합니다. |

#### 사용 예시

```tsx
<Image
  src="https://example.com/image.jpg"
  alt="Sample Image"
  width="300px"
  height="200px"
  fallback={<CustomSpinner />} // 로딩 중 Spinner를 표시
  errorFallback={<CustomErrorIcon />} // 에러 발생 시 Error 아이콘을 표시
/>
```

### 4️⃣ TextField 컴포넌트

`TextField` 컴포넌트는 사용자가 텍스트를 입력할 수 있는 입력 필드를 제공합니다. 오류 메시지와 도움말 텍스트를 표시할 수 있는 기능을 제공하며, 비활성화 상태를 지원합니다.

#### Props

| 이름           | 타입                      | 설명                                                                      |
| -------------- | ------------------------- | ------------------------------------------------------------------------- |
| `value`        | `string`                  | 텍스트 필드의 현재 값을 설정합니다.                                       |
| `onChange`     | `(value: string) => void` | 텍스트 필드의 값이 변경될 때 호출되는 함수입니다.                         |
| `placeholder`  | `string`                  | 텍스트 필드에 표시될 플레이스홀더 텍스트입니다. 기본값은 빈 문자열입니다. |
| `errorMessage` | `string`                  | 텍스트 필드에 오류 메시지를 표시합니다.                                   |
| `helpText`     | `string`                  | 텍스트 필드에 도움말 텍스트를 표시합니다.                                 |
| `disabled`     | `boolean`                 | 텍스트 필드를 비활성화합니다.                                             |
| `className`    | `string`                  | 텍스트 필드의 스타일을 커스터마이즈할 수 있는 클래스명을 설정합니다.      |

#### 사용 예시

```tsx
<TextField
  value={value}
  onChange={handleChange}
  placeholder="이곳에 입력하세요"
  errorMessage={hasError ? "유효하지 않은 입력입니다" : undefined}
  helpText="영문만 입력해주세요."
/>
```

### 5️⃣ Dropdown 컴포넌트

`Dropdown` 컴포넌트는 옵션 리스트에서 하나를 선택할 수 있는 드롭다운 UI를 제공합니다. 다양한 옵션, 플레이스홀더, 비활성화 상태, 스타일 변형(variant) 등을 지원합니다.

#### Props

| 이름         | 타입                              | 기본값      | 설명                                                      |
| ------------ | --------------------------------- | ----------- | --------------------------------------------------------- |
| `options`    | `{ value: string, label: string }[]` | -           | 드롭다운에 표시할 옵션 배열입니다.                         |
| `value`      | `string`                          | `""`        | 현재 선택된 값입니다.                                     |
| `onChange`   | `(value: string) => void`         | -           | 값이 변경될 때 호출되는 콜백 함수입니다.                  |
| `placeholder`| `string`                          | `""`        | 선택 전 표시되는 플레이스홀더 텍스트입니다.                |
| `variant`    | `"primary" \| "secondary" \| "light"`           | `"light"`   | 드롭다운의 스타일 변형을 지정합니다.                      |
| `disabled`   | `boolean`                         | `false`      | 드롭다운을 비활성화합니다.                                |
| `className`  | `string`                          | -           | 추가적인 스타일을 적용할 수 있는 클래스명입니다.           |

#### 사용 예시

```tsx
<Dropdown
  options={[
    { value: "option1", label: "옵션 1" },
    { value: "option2", label: "옵션 2" },
    { value: "option3", label: "옵션 3" }
  ]}
  value={selected}
  onChange={setSelected}
  placeholder="옵션을 선택하세요"
  variant="primary"
/>
```

### 6️⃣ Menu 컴포넌트

`Menu` 컴포넌트는 네비게이션 메뉴나 리스트 아이템을 제공하는 UI 컴포넌트입니다. `Menu.Item`을 활용하여 각 메뉴 항목을 정의하고, 스타일을 커스터마이징할 수 있습니다.

#### Props

| 이름         | 타입      | 기본값  | 설명                                                   |
| ------------ | --------- | ------- | ------------------------------------------------------ |
| `horizontal` | `boolean` | `false` | 메뉴가 수평으로 배치될지 세로로 배치될지 결정합니다.   |
| `className`  | `string`  | -       | 추가적인 스타일을 적용하기 위한 클래스명을 설정합니다. |

#### Menu.Item Props

| 이름        | 타입         | 기본값  | 설명                                                               |
| ----------- | ------------ | ------- | ------------------------------------------------------------------ |
| `selected`  | `boolean`    | `false` | 메뉴 항목이 선택되었는지 여부를 결정합니다.                        |
| `disabled`  | `boolean`    | `false` | 메뉴 항목이 비활성화되었는지 여부를 결정합니다.                    |
| `className` | `string`     | -       | 메뉴 항목에 추가적인 스타일을 적용하기 위한 클래스명을 설정합니다. |
| `onClick`   | `() => void` | -       | 메뉴 항목이 클릭될 때 호출되는 콜백 함수입니다.                    |

#### 사용 예시

```tsx
<Menu horizontal={true}>
  <Menu.Item selected>Home</Menu.Item>
  <Menu.Item>About</Menu.Item>
  <Menu.Item disabled>Contact</Menu.Item>
</Menu>
```

#### 커스터마이징

##### Menu 커스터마이징

`Menu` 컴포넌트는 기본적으로 `className`을 통해 커스터마이징할 수 있습니다. 이때, CSS 변수를 사용하여 다양한 스타일을 변경할 수 있습니다. 예를 들어, 배경 색상, 간격, 그림자 등을 조정할 수 있습니다.

##### 기본 CSS 변수

- `--menu-bg-color`: 메뉴의 배경 색상
- `--menu-box-shadow`: 메뉴의 그림자
- `--menu-padding`: 메뉴의 패딩
- `--menu-gap`: 항목 간의 간격
- `--menu-border-radius`: 메뉴의 테두리 반경

##### CSS 방식

```css
.custom-menu {
  --menu-bg-color: #f7f7f7;
  --menu-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  --menu-padding: 10px;
}
```

##### CSS In JS 방식

```tsx
const CustomMenu = styled(Menu)`
  width: 400px;
  background-color: rgba(255, 87, 143, 0.1);
`;
```

##### MenuItem 커스터마이징

`MenuItem` 컴포넌트는 selected 상태를 활용하여 활성화된 항목을 스타일링할 수 있습니다. className을 통해 기본 스타일을 수정하거나, Styled Components를 사용하여 커스터마이징할 수 있습니다.

##### 기본 MenuItem 스타일

- `.menu-item`: 기본 항목 스타일
- `.menu-item-selected`: 선택된 항목 스타일
- `.menu-item-disabled`: 비활성화된 항목 스타일

##### CSS 방식

```css
.custom-menu .menu-item {
  color: #979797;
  font-weight: bold;
  padding: 8px 16px;
  margin: 4px 0;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.custom-menu .menu-item:not(:disabled):hover {
  background-color: #e0e0e0;
  color: rgb(255, 87, 143);
}

.custom-menu .menu-item-selected {
  background-color: rgb(255, 87, 143);
  color: #fff;
}
```

##### CSS In JS 방식

```tsx
const CustomMenuItem = styled(Menu.Item)`
  &:hover:not(:disabled) {
    background-color: rgba(255, 87, 143, 0.3);
    color: white;
  }

  &.menu-item-selected {
    background-color: rgba(255, 87, 143, 0.6);
  }
`;
```

### 7️⃣ ImageButton 컴포넌트

`ImageButton` 컴포넌트는 이미지나 아이콘을 버튼처럼 클릭할 수 있는 요소로 변환합니다. 버튼을 클릭할 때 사용자 정의 `onClick` 핸들러를 호출하며, 버튼의 크기와 스타일을 자유롭게 설정할 수 있습니다.

#### Props

| 이름        | 타입           | 기본값   | 설명                                                          |
| ----------- | -------------- | -------- | ------------------------------------------------------------- |
| `image`     | `ReactNode`    | -        | 버튼에 표시될 이미지나 아이콘 컴포넌트입니다.                |
| `alt`       | `string`       | -        | 버튼의 접근성을 위한 대체 텍스트입니다.                      |
| `onClick`   | `() => void`   | -        | 버튼이 클릭될 때 호출되는 콜백 함수입니다.                    |
| `width`     | `string`       | `"30px"` | 버튼의 가로 크기를 설정합니다.                                |
| `height`    | `string`       | `"30px"` | 버튼의 세로 크기를 설정합니다.                                |
| `className` | `string`       | -        | 버튼의 스타일을 커스터마이즈할 수 있는 클래스명을 설정합니다. |

#### 사용 예시

```tsx
// Image 컴포넌트 사용
<ImageButton
  image={<Image src="/assets/youtube.svg" alt="YouTube Icon" width="40px" height="40px" />}
  alt="YouTube Icon"
  onClick={() => console.log("Button clicked")}
  width="40px"
  height="40px"
/>

// SVG 아이콘 컴포넌트 사용
<ImageButton
  image={<YouTubeIcon width="40px" height="40px" color="#FF0000" />}
  alt="YouTube Icon"
  onClick={() => console.log("Button clicked")}
  width="40px"
  height="40px"
/>
```

### 8️⃣ Slider 컴포넌트

`Slider` 컴포넌트는 사용자가 값을 조정할 수 있는 슬라이더 UI를 제공합니다. 최소값, 최대값, 스텝(step) 단위를 설정할 수 있으며, 특정 값에 대한 인디케이터를 표시할 수 있습니다. 또한, 사용자 정의 `className`을 통해 스타일을 커스터마이징할 수 있습니다.

#### Props

| 이름             | 타입                            | 기본값 | 설명                                                   |
| ---------------- | ------------------------------- | ------ | ------------------------------------------------------ |
| `initialValue`   | `number`                        | -      | 슬라이더의 초기 값입니다.                              |
| `onChange`       | `(value: number) => void`       | -      | 슬라이더 값이 변경될 때 호출되는 콜백 함수입니다.      |
| `min`            | `number`                        | `1`    | 슬라이더의 최소값입니다.                               |
| `max`            | `number`                        | `10`   | 슬라이더의 최대값입니다.                               |
| `step`           | `number`                        | `1`    | 슬라이더 값이 증가하거나 감소하는 단위입니다.          |
| `stepIndicators` | `Record<number, IndicatorInfo>` | -      | 특정 값에 대한 인디케이터 정보를 설정합니다.           |
| `className`      | `string`                        | -      | 추가적인 스타일을 적용하기 위한 클래스명을 설정합니다. |

#### IndicatorInfo 타입

슬라이더의 특정 값에 대한 인디케이터를 표시하기 위해 사용하는 타입입니다.

```tsx
interface IndicatorInfo {
  name?: string; // 인디케이터 이름
  render: React.ReactNode; // 렌더링될 React 요소
}
```

#### 사용 예시

```tsx
<Slider
  initialValue={5}
  onChange={handleChange}
  min={1}
  max={10}
  step={5}
  stepIndicators={{
    1: { name: "Start", render: <div>⭐</div> },
    5: { name: "Middle", render: <div>🔥</div> },
    10: { name: "End", render: <div>🏁</div> },
  }}
/>
```

#### 커스터마이징

- 사용자 정의 클래스(`className`)를 통해 스타일을 변경할 수 있습니다.
- 기본적으로 제공되는 클래스 이름을 활용하여 세부적인 스타일을 조정할 수 있습니다.

##### 기본 클래스 이름

- `.slider-filled-track`: 슬라이더의 채워진 트랙 영역.
- `.slider-handle`: 슬라이더 핸들.

##### CSS In JS 방식

```tsx
const CustomSlider = styled(Slider)`
  .slider-filled-track {
    background-color: rgb(255, 87, 143);
  }
  .slider-handle {
    background-color: rgb(255, 87, 143);
  }
`;
```

##### CSS 방식

```css
.custom-slider .slider-filled-track {
  background-color: rgb(255, 87, 143);
}

.custom-slider .slider-handle {
  background-color: rgb(255, 87, 143);
}
```

### 9️⃣ Carousel 컴포넌트

`Carousel` 컴포넌트는 이미지를 슬라이드 방식으로 보여주는 UI를 제공합니다. 좌우 화살표 버튼을 클릭하여 슬라이드를 이동할 수 있으며, 드래그하여 슬라이드를 넘기는 기능도 지원합니다. 또한, 루프(loop) 기능을 활성화하여 슬라이드가 끝나면 처음으로 돌아가거나, 마지막 슬라이드에서 처음으로 넘어갈 수 있습니다.

#### Props

| 이름          | 타입          | 기본값 | 설명                                                              |
| ------------- | ------------- | ------ | ----------------------------------------------------------------- |
| `slides`      | `SlideInfo[]` | -      | 슬라이드에 표시될 이미지 정보 배열입니다.                         |
| `slideWidth`  | `number`      | -      | 각 슬라이드의 너비를 설정합니다.                                  |
| `slideHeight` | `number`      | -      | 각 슬라이드의 높이를 설정합니다.                                  |
| `loop`        | `boolean`     | `true` | 슬라이드가 끝나면 처음으로 돌아가는 기능을 활성화할지 여부입니다. |

#### SlideInfo 인터페이스

슬라이드에 표시할 이미지의 정보를 담고 있는 인터페이스입니다.

```tsx
interface SlideInfo {
  imageSrc: string; // 이미지 URL
  imageAlt?: string; // 이미지 설명 (옵션)
  onClick?: () => void; // 이미지 클릭 시 실행될 콜백 함수 (옵션)
}
```

#### 사용 예시

```tsx
<Carousel
  slides={[
    {
      imageSrc: "image1.jpg",
      imageAlt: "First Slide",
      onClick: () => alert("First slide clicked!"),
    },
    { imageSrc: "image2.jpg", imageAlt: "Second Slide" },
    { imageSrc: "image3.jpg", imageAlt: "Third Slide" },
  ]}
  slideWidth={600}
  slideHeight={400}
/>
```

### 1️⃣0️⃣ Modal 컴포넌트

`Modal` 컴포넌트는 오버레이 위에 표시되는 팝업 UI로, 사용자에게 중요한 메시지, 폼, 경고 등을 표시할 때 사용합니다. 제목, 본문, 푸터, 닫기 버튼, 커스텀 너비 등을 지원합니다.

#### Props

| 이름        | 타입                | 기본값    | 설명                                                      |
| ----------- | ------------------- | --------- | --------------------------------------------------------- |
| `isOpen`    | `boolean`           | -         | 모달의 열림/닫힘 상태를 제어합니다.                       |
| `onClose`   | `() => void`        | -         | 모달을 닫을 때 호출되는 콜백 함수입니다.                  |
| `title`     | `string`            | -         | 모달 상단에 표시할 제목입니다.                             |
| `children`  | `React.ReactNode`   | -         | 모달 본문에 표시할 콘텐츠입니다.                           |
| `footer`    | `React.ReactNode`   | -         | 모달 하단에 표시할 푸터(버튼 등) 영역입니다.               |
| `className` | `string`            | -         | 추가적인 스타일을 적용할 수 있는 클래스명입니다.           |
| `width`     | `string`            | `"500px"` | 모달의 너비를 지정합니다.                                 |

#### 사용 예시

```tsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="모달 제목"
  width="400px"
  footer={
    <>
      <Button variant="light" onClick={handleClose}>취소</Button>
      <Button variant="primary">확인</Button>
    </>
  }
>
  <p>여기에 모달 내용을 입력하세요.</p>
</Modal>
```

---
