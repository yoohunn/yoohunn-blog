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

## 철학
> 생각의 깊이를 더하는 블로그 

자신의 블로그에는 자신의 생각과 경험이 들어가야 의미있는 글이 작성된다고 생각합니다. 어떻게 하면 자신의 생각을 더 잘 이야기할 수 있을까요? 저는 ‘좋은 질문을 고민해보는 것’이 그 답이라고 생각했습니다.
<br /> 좋은 생각을 이끌어내는 좋은 질문을 생각해보면서, 좋은 질문을 통해 **자신의 생각을 잘 풀 수 있게 도와주는 블로그**를 만드는 것이 이 프로젝트를 시작하게 된 배경입니다.


<br />

## 문제
- 작성의 불편함 

   블로그 플랫폼마다 마크업이 조금씩 달라집니다. 그에 맞춰 제 글의 마크업과 하이라이트, 글씨 굵기를 수정하는 것이 번거롭게 느껴졌습니다. 특히 업로드 해야할 글이 쌓일 수록 부담이 더 커졌습니다.
- 업로드 후 달라지는 UI

    노션으로 작성한 노트를 블로그에 올리면 제목이 생각보다 커지거나 강조표시, 색, 간격이 달라져 가독성을 위해 한번 더 수정해야하는 불편함이 있었습니다.
- 작성 후 무관심

    한번 업로드한 글은 잘 보지 않게 되었습니다. 완성이라고 생각되어 완성된 글은 다시 보지 않았고 그 기준에 충족해야 글을 업로드한다는 부담이 있었습니다. 일단 업로드하고 질문을 통해 계속해서 내가 쓴 글을 점검하고 싶었습니다.

<br />

## 특징
1. 간편한 업로드

   노션으로 작성하고 노션의 모습 그대로 블로그에 업로드할 수 있습니다. 강조 표시를 위한 추가적인 수정이나 마크업을 수정할 필요없이 노션에서 작성한 모습만 신경쓰면 됩니다.

2. 질문을 통한 발전

   좋은 질문을 고민해 볼  수 있도록 태그를 생성할 때 질문을 함께 저장할 수 있도록 했습니다. 작성한 질문은 페이지에서 쉽게 볼 수 있게 배치했으며, 글을 업로드한 페이지에서 글과 질문을 함께 보면서 고민할 수 있도록 오른쪽 하단에 항상 보일 수 있게 했습니다.

3. 블로그 트래킹

   블로그에서 중요한 방문자 수, 페이지 뷰, 성능을 확인할 수 있습니다.

4. 글 분류

   태그는 같은 성격의 글을 묶는 모음입니다. 시리즈는 하나의 주제로 연결된 다양한 성격의 글의 모음입니다. 두 분류를 사용해 체계적으로 글을 정리할 수 있습니다.


<br />

## 기술 스택

- Next.js (13.4)
- Sanity
- Typescript
- Tailwindcss
- HeadlessUI

<br />

## 사용된 기술

### ISR 페이지네이션

[링크](https://blog.yoohunn.vercel.app/posts),  [코드](https://github.com/yoohunn/yoohunn-blog/blob/main/src/app/posts/%5Bpage%5D/page.tsx)

빠른 페이지 접근을 위해 ISR로 Pagination을 구현했습니다.
[**SSG Pagination Strategy - Vercel Example**](https://pagination-strategy.vercel.app/)을 읽고 
효율적인 페이지 빌드를 위해 가장 많이 볼 1, 2 페이지만 미리 생성해두는 전략을 사용해 불필요한 빌드 시간을 줄였습니다.

<br />

### Cursor-based Pagination in Sanity.io

[코드](https://github.com/yoohunn/yoohunn-blog/blob/main/src/lib/sanity.queries.ts)

Sanity 문서에서 [A better approach: Filtering](https://www.sanity.io/docs/paginating-with-groq#99e2366d34f5)을 읽고, 효율적인 쿼리를 위해
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


<br />

## 유저 플로우
1. **태그를 생성하며 이 주제에 어떤 질문이 좋을지 고민해본다.**
   <img width="754" alt="1" src="https://github.com/yoohunn/yoohunn-blog/assets/94881503/c457296a-b89c-4cee-839e-b7599bb2b2d1">

<br />

2. **노션에 글을 쓰고 블로그에 업로드한다.**
   <img width="1383" alt="2" src="https://github.com/yoohunn/yoohunn-blog/assets/94881503/4a7519e3-f4f1-4c98-9036-f026cd7210f0">

<br />

3. **질문과 내 글을 비교하며 글을 발전시킬 방향을 잡는다.**
   <img width="1615" alt="3" src="https://github.com/yoohunn/yoohunn-blog/assets/94881503/74dddbf3-461f-4fc2-98c4-313dd6817d27">

<br />

## 기여

추후 개발 블로그를 원하는 사람들이 편하게 블로그를 셋업할 수 있도록 템플릿화할 예정입니다.
어떠한 피드백도 좋습니다! 의견 있으시면 ✨[여기](https://stage.yoohunn.vercel.app/)✨로 부탁드려요🙇‍♀️