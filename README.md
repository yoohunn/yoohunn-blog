<p align="center">
    <img width="128" height="128" alt="로고" src="https://github.com/yoohunn/yoohunn-blog/assets/94881503/a8c1c61a-bec0-4633-94d3-31a38f55e5ee">
</p>

<h1 align="center">YooBlog</h1>

<p align="center">
    <a href='https://blog.yoohunn.vercel.app/'><b>Website</b></a>
     | <a href='https://blog.yoohunn.vercel.app/series/blog'><b>Posts</b></a> 
     | <a href='https://github.com/yoohunn/yoohunn-blog-sanity'><b>Sanity Github</b></a>
</p>

<br />

## Introduce



> yooblog는 next.js와 sanity를 함께 사용해 만든 풀스택 웹 앱입니다.
> 
> 아웃풋을 낼 수 있는 깊이 있는 공부를 하기 위해 만들어졌으며
>
> 글이 자주 쓰고 싶어지도록 동기부여 요소들을 더해 제작했습니다.

<br />

## Tech Stack

- Next.js (13.4)
- Sanity
- Typescript
- Tailwindcss
- HeadlessUI

<br />

## Main Feature

### 1. 편리하고 빠른 업로드 방식

블로그 작성이 일이되지 않도록 평소 공부한 것을 최대한 빠르게 블로그에도 업로드하기 위해 고안한 것들입니다.

**notion-client**

   블로그를 위해 작성한 노트의 마크업을 수정하는 것이 블로그의 접근성을 떨어트린다고 생각하여
   평소 자주 사용하는 노션을 에디터처럼 사용하기위해 notion-client를 사용했습니다.


**sanity studio**

   데이터를 추가, 수정, 삭제하기 위해 도입한 Sanity에서 제공하는 Sanity Studio를 사용해
   어드민 개발 공수 없이 편리하게 글을 업로드할 수 있도록 했습니다.

<br />

### 2. 시리즈

한번에 완벽한 글이 아닌 조금씩 매일 꾸준히 글을 쌓아가기 위해 넣은 기능입니다.

스크롤이 길어지는 모바일에서도 이전, 다음 포스트를 이동하기 쉽도록
스크롤 이벤트에 반응하는 하단 네비게이션을 추가했습니다.

<br />

### 3. 신작(예정)

5일 안에 작성한 글이 있다면 보이는 화면을 추가할 예정입니다. 꾸준한 글쓰기를 위한 동기부여 요소입니다.

<br />

## Feature

### ISR 페이지네이션

[링크](https://blog.yoohunn.vercel.app/posts),  [코드](https://github.com/yoohunn/yoohunn-blog/blob/main/src/app/posts/%5Bpage%5D/page.tsx)

빠른 페이지 접근을 위해 ISR로 Pagination을 구현했습니다.
[**SSG Pagination Strategy - Vercel Example**](https://pagination-strategy.vercel.app/)을 읽고 
효율적인 페이지 빌드를 위해 가장 많이 볼 1, 2 페이지만 미리 생성해두는 전략을 사용해 불필요한 빌드 시간을 줄였습니다.

<br />

### Sanity Pagination

[코드](https://github.com/yoohunn/yoohunn-blog/blob/main/src/lib/sanity.queries.ts)

Sanity 문서에서 [A better approach: Filtering](https://www.sanity.io/docs/paginating-with-groq#99e2366d34f5)을 읽고,
모든 아이템을 불러온 후 배열을 자르는 것이 아닌 앞의 요소들은 스킵하고 지정한 요소부터 아이템을 불러오는 방식으로 구현했습니다.
현재 포스트의 이전, 이후 포스트를 쿼리할 때 사용했습니다.

<br />

### Image Blur Placeholder

[코드](https://github.com/yoohunn/yoohunn-blog/blob/main/src/lib/sanity.fields.ts#L15C25-L15C25)

이미지가 보이기까지의 시간 동안 빈페이지가 어색하게 보이기 때문에 적용한 블러 플레이스 홀더입니다.
plaiceholder와 [Sanity image metadata](https://www.sanity.io/docs/image-metadata) 둘 중 고민을 하다가 
쿼리할 때 base64데이터를 바로 받을 수 있는 Sanity metadata가 더 적합하다고 생각해 이 방식으로 구현했습니다.


<details>
  <summary> 더 상세한 선택 과정을 작성했습니다.</summary>
  <div style="margin-left: 30px;">
    <br />
    <b>문제상황</b>
    <p>
    Nextjs의 blurDataURL예시에 있는 `plaiceholder`를 사용하려면, Sanity에 포스트를 요청한 후 plaiceholder에 요청을 다시 보내 base64를 받아와 합쳐줘야했습니다. 블러를 다양한 곳에서 사용할텐데 포스트를 요청할 때 마다 위의 과정을 반복해야한다는 것이 복잡하게 느껴졌습니다.
    <br/> 더 개선할 수 있을 것이라 생각해 다른 방식으로 블러이미지를 구현할 수 있을지 리서치를 했습니다.
    </p>
    <b>과정</b>
    <p>
    처음에는 Sanity Studio에서 “생성할 때” 데이터를 가공해서 저장하는 방법이 있지 않을까 하고 그 방법을 찼아봤습니다.
    <br/> 두번째는 Sanity의 필드 타입이 image인데 타입이 따로 지정된 거라면 관련 기능이나 데이터가 더 많지 않을까하는 생각도 들어서 이미지에 어떤 것들을 제공하는지 찾아봤습니다.
    </p>
    <b>해결</b>
    <p>
    <a href="https://www.sanity.io/docs/image-metadata">Santiy image</a>를 보니
    <a href="https://www.sanity.io/docs/image-metadata#1bc0229e31a2">placeholder</a> 파트에 제가 원하는 블러 관련한 두가지 옵션인 blurhash와 lqip이 있었습니다. 
    base64로 인코딩되어 바로 사용가능한 <code>lqip</code>을 사용해 블러 이미지를 구현했습니다.
    </p>
    <br />
    <p>
    블러이미지의 크기가 큰 화면에서 작게 보이는 현상이 있었습니다. 블러 크기는 이미지의 가로세로 길이에 따라 결정에 되는데 fill 옵션이 있는 반응형 이미지에서 해당 문제가 발생했습니다. 이미지에도 가로세로 속성을 주어 해결했습니다.
    </p>
  </div>
</details>

<br />

### Conatainer Query

[코드](https://github.com/yoohunn/yoohunn-blog/blob/main/src/components/common/Post.tsx)

화면의 크기가 아닌 특정 컴포넌트의 크기에 따라 스타일이 변해야하는 상황에 적용했습니다.
tailwindcss에서 사용하기 위해 [@tailwindcss/container-queries](https://github.com/tailwindlabs/tailwindcss-container-queries#tailwindcsscontainer-queries) 플러그인을 사용해 구현했습니다.