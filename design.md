# 명시은 앱 디자인 가이드
> 안티그라비티 앱 개발을 위한 디자인 스펙 문서  
> Figma 파일: `yhNrwL1izodwcozZOEZWyB`  
> 기준 화면: 홈(추천화면) `1016-643` / 상세페이지 `1016-1034`

---

## 목차
1. [디바이스 & 캔버스](#1-디바이스--캔버스)
2. [컬러 시스템](#2-컬러-시스템)
3. [타이포그래피](#3-타이포그래피)
4. [아이콘 시스템](#4-아이콘-시스템)
5. [공통 컴포넌트](#5-공통-컴포넌트)
6. [홈 화면 (추천화면)](#6-홈-화면-추천화면)
7. [상세 페이지](#7-상세-페이지)
8. [인터랙션 & 네비게이션](#8-인터랙션--네비게이션)
9. [개발 참고사항](#9-개발-참고사항)
10. [화면 목록 & 전체 플로우](#10-화면-목록--전체-플로우)
11. [스플래시 & 온보딩](#11-스플래시--온보딩)
12. [로그인 화면](#12-로그인-화면)
13. [지도 화면](#13-지도-화면)
14. [리뷰 화면](#14-리뷰-화면)
15. [포키 완료 & 리뷰 완료](#15-포키-완료--리뷰-완료)
16. [마이페이지](#16-마이페이지)
17. [설정 화면](#17-설정-화면)
18. [내 취향 데이터 화면](#18-내-취향-데이터-화면)
19. [알림 팝업 & 확인 버튼](#19-알림-팝업--확인-버튼)
20. [Tab Bar 활성 상태별 정리](#20-tab-bar-활성-상태별-정리)

---

## 1. 디바이스 & 캔버스

| 항목 | 값 |
|------|----|
| 기준 디바이스 | iPhone 14 Pro / 15 (430px 기준) |
| 캔버스 너비 | 430px |
| 홈 화면 높이 | ~934px (단일 뷰) |
| 상세 페이지 높이 | 3268px (세로 스크롤) |
| Status Bar 높이 | 55px |
| Bottom Navbar 높이 | 19px (Home Indicator 포함) |
| Tab Bar 높이 | 81px (bottom: 19px 위) |
| 기본 수평 패딩 | 16px |

---

## 2. 컬러 시스템

### 2.1 브랜드 컬러

| 토큰명 | HEX | 용도 |
|--------|-----|------|
| `primary` | `#FF9F46` | 앱 메인 컬러, 히어로 배경, POKI 버튼, 타이틀 강조 |
| `accent-coral` | `#FB7459` | 퍼센트 수치, 바 그래프 활성, 성분 텍스트, 알람 아이콘, 별점 |
| `accent-yellow` | `#FFDA46` | 78% 원형 그래프, 도보 뱃지 보더/텍스트, 헤드라인 언더라인 |
| `accent-green` | `#BBD884` | 상세페이지 히어로 배경 띠 |

### 2.2 중립 컬러

| 토큰명 | HEX | 용도 |
|--------|-----|------|
| `black` | `#000000` | 기본 텍스트 |
| `gray-dark` | `#3A3A3A` | Home Indicator pill |
| `gray-icon` | `#8B8B8B` | 보조 보더, 아이콘 |
| `gray-sub` | `#9B9B9B` | 보조 텍스트, 태그 텍스트, 시간/위치 정보 |
| `gray-label` | `#C3C3C3` | 원형 그래프 레이블, 비활성 탭 아이콘 |
| `gray-fill` | `#F2F2F2` | 태그 배경, 바 그래프 비활성, NEXT 버튼 |
| `status-bar-bg` | `#F5F7F8` | Status Bar 배경 |
| `status-bar-time` | `#717067` | Status Bar 시각 텍스트 |
| `white` | `#FFFFFF` | 카드 배경, 일반 배경, Tab Bar |

### 2.3 배경 컬러

| 토큰명 | HEX | 용도 |
|--------|-----|------|
| `bg-warm` | `#F8F4EC` | 홈 화면 하단 카드 영역 배경, 온보딩, 설정 카드 |
| `bg-yellow-soft` | `#FFF7DF` | 추천 조합 카드, 갓 구운 시간 배너 배경 |
| `bg-placeholder` | `#D9D9D9` | 이미지 로딩 플레이스홀더 |

### 2.4 추가 컬러 (Figma 확인)

| 토큰명 | HEX | 용도 |
|--------|-----|------|
| `star-yellow` | `#FFCB30` | 별점 활성 색상 |
| `kakao-yellow` | `#FEE500` | 카카오 로그인 버튼 배경 |
| `tag-orange` | `#FFA74A` | 온보딩/마이페이지 포키한 빵 태그 |
| `onboarding-tag-yellow` | `#FFFAE5` | 온보딩05 선택 태그 배경 |
| `onboarding-tag-red` | `#FFEDEB` | 온보딩04 선택 태그 배경 |
| `segment-active` | `#FA534C` | 리뷰/식감 세그먼트 바 활성 (홈: #FB7459와 유사) |

---

## 3. 타이포그래피

### 3.1 폰트 패밀리

| 폰트 | 굵기 | 사용 화면 | 용도 |
|------|------|-----------|------|
| `Pretendard` | ExtraBold | 상세 | Baker's Note 섹션 타이틀 |
| `Interop` | ExtraBold | 상세 | 히어로 타이틀 (Croissant) |
| `Interop` | Bold | 공통 | 섹션 헤더, 가게명, 버튼, 퍼센트 수치 강조 |
| `Interop` | SemiBold | 공통 | 헤드라인(홈), 태그 텍스트, 카드 소제목 |
| `Interop` | Medium | 공통 | 본문, 설명 텍스트, 위치/시간 정보 |
| `Interop` | Regular | 공통 | 보조 텍스트, 마스코트 멘트, 스와이프 힌트 |
| `Interop` | Light | 상세 | 스와이프 힌트 (흰색 오버레이 위) |
| `Inter` / `Noto Sans KR` | SemiBold / Bold | 상세 | 영업시간/위치 소제목 (fallback 포함) |
| `SF Pro` | Semibold (weight 590) | 공통 | Status Bar 시각 표시 (iOS 시스템) |
| `Min Icon VF` | Round Bold | 공통 | 앱 전용 아이콘 폰트 |
| `Interop` | ExtraBlack / Bold | 마이페이지 | "MY WA-ANG" 타이틀, 닉네임 |

### 3.2 타입 스케일

| 역할 | 크기 | 폰트 | 자간 | 행간 |
|------|------|------|------|------|
| 히어로 타이틀 | 60px | Interop ExtraBold | — | — |
| 섹션 타이틀 (Baker's Note) | 32px | Interop ExtraBold | -0.64px | 1.71 |
| 메뉴명 강조 | 32px | Interop Bold | -0.64px | 1.5 |
| 퍼센트 강조 (대) | 48px | Interop Bold | -0.96px | 1.8 |
| 퍼센트 강조 (중) | 36px | Interop Bold | -0.72px | 1.8 |
| 시간 강조 | 32px | Interop Bold | -0.64px | 1.8 |
| 헤드라인 | 24px | Interop SemiBold | -0.48px | 1.5 |
| 가게명 | 28px | Interop Bold | -0.56px | 1.5 |
| 섹션 소제목 | 20px | Interop Bold | -0.4px | 1.8 |
| 버튼 텍스트 | 18px | Interop Bold | -0.36px | 1.5 |
| 본문 대 | 19px | Interop Medium | -0.38px | 1.5 |
| 본문 | 16px | Interop Medium | -0.32px | 1.5 |
| 카드 소제목 | 16px | Interop Bold | -0.32px | 1.8 |
| 위치 텍스트 | 16px | Interop Bold | -0.32px | 1.8 |
| 가격 | 20px | Interop Bold | -0.4px | 1.5 |
| 보조 텍스트 | 15px | Interop Regular | -0.3px | 1.5 |
| 태그 | 14px | Interop SemiBold | -0.28px | 1.5 |
| 보조 작은 | 13px | Interop Regular | -0.26px | 1.5 |
| Tab Bar 레이블 | 14px | Interop Bold | -0.28px | 1.5 |
| Status Bar 시각 | 17px | SF Pro Semibold | — | 22px |

---

## 4. 아이콘 시스템

모든 아이콘은 `Min Icon VF: Round Bold` 폰트로 렌더링됩니다.  
`font-feature-settings: 'ss09' 1` 적용 필요.

| 아이콘명 | 유니코드 | 크기 | 컬러 | 화면 |
|---------|---------|------|------|------|
| notifications (알림) | `\uEF40` | 24px | white | 홈 헤더 |
| home2 (홈) | `\uE110` | 28.8px | black | Tab Bar 활성 |
| location (위치) | `\uEFA0` | 28.8px | `#C3C3C3` | Tab Bar |
| person (마이) | `\uEF20` | 28.8px | `#C3C3C3` | Tab Bar |
| setting (설정) | `\uE0B0` | 28.8px | `#C3C3C3` | Tab Bar |
| alarm (알람) | `\uEF60` | 17~31px | `#FB7459` | 홈 카드, 상세 배너 |
| star (별점) | `\uE0A0` | 17.28px | `#FB7459` | 홈 카드 |

### 화살표 아이콘 (`Firefly / stroke / arrow-4-right`)
- 크기: 10~13px
- 구현: SVG 이미지 기반, `-scale-x-100` + `rotate-90`으로 방향 전환
- 색상: `#9B9B9B`

### 위치 핀 아이콘 (`boxicons:location`)
- 크기: 24px / 색상: white / 위치: 홈 헤더

---

## 5. 공통 컴포넌트

### 5.1 Status Bar
```
높이: 55px
배경: #F5F7F8
구성: 시각(좌) + 배터리/와이파이/신호(우)
폰트: SF Pro Semibold, 17px, #717067, line-height: 22px
```

### 5.2 Home Indicator (Navbar)
```
높이: 19px
Pill 크기: 135 × 5px
border-radius: 2.5px
배경: #3A3A3A
위치: bottom: 8px, 수평 중앙
```

### 5.3 Tab Bar
```
배경: white
높이: 81px
border-radius: 40px
box-shadow: 0px 0px 12px 1px rgba(0,0,0,0.1)
margin: 0 16px

탭 구성 (4개 균등 배치):
  - HOME  : \uE110, 28.8px, black  + 레이블 "HOME" 14px Bold black
  - 위치  : \uEFA0, 28.8px, #C3C3C3
  - 마이  : \uEF20, 28.8px, #C3C3C3
  - 설정  : \uE0B0, 28.8px, #C3C3C3
```

### 5.4 해시태그 칩
```
배경: #F2F2F2
padding: 2px 8px
border-radius: 8px
폰트: 14px Interop SemiBold, #9B9B9B
복수 배치 gap: 12px
```

### 5.5 도보 거리 뱃지
```
border: 1px solid #FFDA46
padding: 1px 8px
border-radius: 8px
폰트: 13px Interop Regular, #FFDA46
예: "도보 4분"
```

### 5.6 링크 버튼 (텍스트 + 화살표)
```
[상세보기]  14px Interop Regular, #9B9B9B + 화살표 13px
[리뷰보기]  border: 1px solid #9B9B9B, padding: 1px 8px,
           border-radius: 8px, 13px Regular, #9B9B9B + 화살표
```

### 5.7 액션 버튼 (Primary / Secondary)
```
공통: border-radius: 10px, 높이: 54px, padding: 20px 60px

[POKI — Primary]
  배경: #FF9F46
  폰트: 18px Interop Bold, white, 자간: -0.36px

[NEXT — Secondary]
  배경: #F2F2F2
  폰트: 18px Interop Bold, #9B9B9B, 자간: -0.36px
```

---

## 6. 홈 화면 (추천화면)

**Node:** `1016-643` | **높이:** ~934px (단일 뷰, 스크롤 없음)

### 6.1 레이아웃 구조 (Pixel-Perfect Benchmarks)
```
[0px   ~ 55px ] Status Bar (Background: #F5F7F8)
[55px  ~ 105px] 헤더 (Background: #FF9F46)
[105px ~ 210px] 헤드라인 (Background: #F8F4EC)
[210px ~ 465px] 이미지 영역 (Hills & Hero Card)
[465px ~ 512px] 비대칭 전환구간 (Asymmetric Swoop: Left Radius 160px / Right Slope 6deg)
[512px ~ 609px] 메뉴 정보 (이름 / 배지 / 태그)   ← Content Card (White) 시작
[609px ~ 739px] 상세 설명 / 가격 / 평점
[739px ~ 800px] NEXT / POKI 액션 버튼
[822px ~ 903px] Floating Tab Bar (Pill Shape)
[903px ~ 934px] Bottom Safe Area (System Indicator)
```

### 6.2 헤더 (55px ~ 105px)
- **위치 칩**: left: 16px, top: 64px (padding: 6px 12px, border-radius: 9px)
- **알림 벨**: right: 16px, top: 68px (24px white SVG)

### 6.3 헤드라인 (105px ~ 210px)
- **텍스트 시작**: y=125px, left: 17px
- **언더라인**: y=147px, height: 9px, color: #FFDA46
- **마스코트**: y=133px, x=134px (Group 1016:828)

### 6.4 이미지 & 장식 (210px ~ 512px)
- **Hero Card**: x=65px, y=210px, size=301x326px, radius: 60px 20px 20px 20px
- **배경 장식**: background-image.png (Hills + Wheat), height: 226px, bottom aligned.
- **Asymmetric Swoop**: 
  - Left: content-card-overlay::before (Radius 120-160px, top: -47px)
  - Right: content-card-overlay::after (Linear gradient slope 174deg)

### 6.5 메뉴 정보 (512px ~ 609px)
- **기본 여백**: Left/Right 35px (Metadata 기준)
- **메뉴명**: "크루아상", 32px Interop Bold, y=512px
- **배지 그룹**: y=529px (도보 4분 + 30분 Clock Icon)
- **상세보기**: y=526px, right: 35px, 14px SemiBold #C3C3C3

### 6.6 가격 & 평점 (609px ~ 739px)
- **설명**: y=609px, 16px SemiBold, 22px Line-height
- **가격**: y=650px, 24px ExtraBold (metadata 기준 강조)
- **평점/리뷰**: y=650px, right: 35px 정렬

### 6.7 액션 버튼 (739px ~ 822px)
- **좌표**: y=739px, Left/Right 35px
- **버튼 높이**: 54px, gap: 16px

### 6.8 Tab Bar (822px ~ 903px)
- **좌표**: y=822px, size: 398x81px (Floating)
- **Safe Area**: y=903px~934px (White fill background for visual anchor)

---

## 7. 상세 페이지

**Node:** `1016-1034` | **높이:** 3268px (풀 스크롤)

### 7.1 전체 스크롤 맵
```
[0px    ~ 55px  ] Status Bar
[55px   ~ 600px ] 히어로 섹션 (사진 카드 + 타이틀 + 스와이프 힌트)
[600px  ~ 714px ] 배경 전환 구간
[714px  ~ 1044px] Baker's Note 섹션
[1044px ~ 1293px] 원형 통계 그래프 (가게 78% / 빵 82%)
[1293px ~ 1529px] 갓 구운 시간 배너
[1529px ~ 1913px] 가게 기본 정보
[1913px ~ 2120px] 영업시간 / 위치 카드 + 마스코트 원형
[2120px ~ 2470px] 추천 조합 카드
[2470px ~ 2736px] 식감 데이터 세그먼트
[2736px ~ 2960px] 마스코트 한마디 코멘트
[2960px ~ 3249px] 성분 구성
[3249px ~ 3268px] Home Indicator
```

### 7.2 히어로 섹션 (55px ~ 600px)
- 배경: white
- **녹색 배경 띠**: `#BBD884`, 430×256px, top: 458px
- **히어로 타이틀**: `Croissant` — 60px Interop ExtraBold, `#FF9F46`, uppercase, left: ~51px, top: 101px
- **메인 이미지**: 501×430px, rounded 20px, CSS mask 처리, 수평 중앙
- **보조 이미지 카드 2장** (좌/우 오버랩):
  - 우측: 302×260px, rounded 15px
  - 좌측: 276×237px, rounded 15px
- **장식**: Union 구름 좌(111×69px) / 우(98×64px), 밀 이삭 캐릭터
- **스와이프 힌트** (bottom): 13px Interop Light, white + 화살표 ×2

### 7.3 Baker's Note 섹션 (714px ~ 1044px)
- 배경: white
- **타이틀**: `Baker's Note` — 32px Pretendard ExtraBold, black, 수평 중앙
- **본문**: 19px Interop Medium, black, 수평 중앙, 자간 -0.38px, 행간 1.5 (5줄)

### 7.4 원형 통계 그래프 (1044px ~ 1293px)
- 흰 카드 오버레이: left 100px, h 149px, rounded-left 20px

| | 가게 그래프 | 빵 그래프 |
|-|------------|----------|
| 외원 | 164×164px | 208×208px |
| 내원 | 119×119px | 151×151px |
| 수치 | `78%` — 36px Bold `#FFDA46` | `82%` — 48px Bold `#FB7459` |
| 레이블 | "가게" — 16px SemiBold `#C3C3C3` | "빵" — 20px SemiBold `#C3C3C3` |

### 7.5 갓 구운 시간 배너 (1293px ~ 1529px)
- 배경: `#FFF7DF`, width: 381px, rounded-right 20px
- **알람 아이콘**: `\uEF60`, 31.2px, black
- **제목**: "갓 구운 시간" — 20px Interop Bold, 자간 -0.4px
- **강조**: "30분 전" — 32px Interop Bold, `#FB7459`, 자간 -0.64px
- **설명 (2줄)**: 16px Interop Medium, black

### 7.6 가게 기본 정보 (1529px ~ 1913px)
- 배경: white
- **가게명**: "푹신 베이커리" — 28px Interop Bold, 자간 -0.56px
- **거리 뱃지** (공통 컴포넌트 5.5)
- **해시태그**: `#요즘핫플` `#정성가득` `#크루아상맛집` `#겉바속촉`
- **설명**: 16px Interop Medium, black, 4줄
- **원형 프로필 이미지**: 152×152px, 우측 배치
- **"같은 가게 다른 메뉴 추천보기"** 링크 버튼 (공통 5.6)

### 7.7 영업시간 / 위치 카드 (1913px ~ 2120px)
두 카드 수평 배치, 높이 127px, rounded 20px, 배경 white

| 카드 | 소제목 | 내용 |
|------|--------|------|
| 영업시간 | 16px Inter SemiBold, black | 평일 08:00~22:00 / 주말 10:00~20:00 |
| 위치 | 16px Inter SemiBold, black | 서울특별시 성동구 연무장길 27-3, 1층 |

내용: 16px Interop Medium, `#9B9B9B`, 자간 -0.32px

### 7.8 추천 조합 섹션 (2120px ~ 2470px)
- **타이틀**: "추천 조합" — 20px Interop Bold
- **카드**: `#FFF7DF`, rounded 20px, 398×232px, left: 16px

| 이모지 | 타이틀 | 설명 |
|--------|--------|------|
| ☕ | 아메리카노와 함께 | 버터의 풍미와 쌉쌀한 커피가 균형을 이뤄요 |
| 🍓 | 딸기잼 곁들이기 | 달콤새콤한 잼이 담백한 크루아상을 완성해요 |
| 🥚 | 수란 + 에그 크루아상 | 브런치로 든든하게 하루를 시작하는 조합이에요 |

- 이모지: 32px / 타이틀: 16px Interop Medium, black / 설명: 13px Interop Regular, `#9B9B9B`

### 7.9 식감 데이터 세그먼트 (2470px ~ 2736px)
- **타이틀**: "식감 데이터" — 20px Interop Bold
- **구조**: 왼쪽 레이블 | 5개 세그먼트 바 | 오른쪽 레이블

바 스펙: 36×7px, rounded 8px, 간격 42px, 시작 left: 86px  
색상: 활성 `#FB7459` / 비활성 `#F2F2F2`

| 왼쪽 레이블 | 활성 위치 (1~5) | 오른쪽 레이블 |
|-------------|----------------|---------------|
| 바삭 | 4번째 | 쫄깃 |
| 촉촉 | 2번째 | 꾸덕 |
| 버터 | 4번째 | 담백 |
| 당도 | 3번째 | — |

레이블: 16px Interop Bold, black, 자간 -0.32px

### 7.10 마스코트 코멘트 (2736px ~ 2960px)
- **좌측 이미지**: 213×180px (캐릭터 PNG)
- **우측 카드**: white, h: 182px, rounded-left 20px, left: 206px
- **타이틀**: "와앙이의 한마디 !" — 20px Interop Bold, 중앙
- **본문**: 15px Interop Regular, 중앙 (3줄)

### 7.11 성분 구성 (2960px ~ 3249px)
- **타이틀**: "성분 구성" — 20px Interop Bold
- **원형 배지** 3개: 96×96px, 균등 배치 (left: 45 / 172 / 299px)
- **레이블**: 20px Interop Medium, `#FB7459`, opacity 80%
- **항목**: 밀가루 / 버터 / 달걀

---

## 8. 인터랙션 & 네비게이션

### 8.1 홈 화면
| 요소 | 동작 |
|------|------|
| POKI 버튼 | 현재 메뉴 포키(저장/좋아요) 처리 |
| NEXT 버튼 | 다음 추천 메뉴로 전환 |
| 상세보기 | → 상세 페이지 이동 |
| 리뷰보기 | → 리뷰 목록 이동 |
| 위치 헤더 | → 위치 변경 설정 |
| Tab Bar | → 화면 전환 (홈 / 지도 / 마이 / 설정) |

### 8.2 상세 페이지
| 요소 | 동작 |
|------|------|
| 히어로 이미지 | 좌우 스와이프 → 추가 사진 슬라이더 |
| 같은 가게 다른 메뉴 | → 가게 메뉴 리스트 이동 |
| 도보 뱃지 | → 지도/경로 화면 이동 |
| 성분 배지 | → 성분 상세 팝업 |

### 8.3 Tab Bar 상태
- **활성**: 아이콘 black + 레이블 표시
- **비활성**: 아이콘 `#C3C3C3`, 레이블 없음

---

## 9. 개발 참고사항

### 플랫폼 & Safe Area
- **iOS Safe Area**: Top 55px / Bottom 34px 반드시 반영
- **기준 해상도**: 430pt (3x → 1290px), 375pt 대응 시 비율 조정 필요

### 폰트
| 폰트 | 라이선스 | 비고 |
|------|---------|------|
| `Interop` | 별도 확인 필요 | 한국어 전용 |
| `Pretendard` | OFL (오픈소스) | 한국어 전용 |
| `Min Icon VF` | 앱 전용 | 빌드에 포함 필요 |
| `SF Pro` | Apple 시스템 | 별도 설치 불필요 |

### 이미지 & 그래픽
- **히어로 마스킹**: CSS `mask-image` 또는 네이티브 `clipShape`
- **이미지 비율**: 히어로 `object-bottom`, 카드 `object-cover`
- **원형 도넛 그래프**: SVG `stroke-dasharray` 애니메이션 권장
- **장식 에셋**: Union 구름, 밀 이삭, 마스코트 → PNG 별도 에셋 처리

### 레이아웃 규칙
```
border-radius 규칙:
  카드 (대)   : 20px
  버튼        : 10px
  뱃지 / 태그 : 8~9px
  Tab Bar     : 40px
  Home Pill   : 2.5px

shadow:
  Tab Bar만 적용: 0px 0px 12px 1px rgba(0,0,0,0.1)

스크롤:
  상세 페이지 3268px → 섹션별 LazyLoad 권장
  이미지 영역 skeleton placeholder 처리 권장
```

---

## 10. 화면 목록 & 전체 플로우

| Node ID | 화면명 | 설명 |
|---------|--------|------|
| `1016-849` | 스플래시 | POOKSHIN 로고, 앱 시작 화면 |
| `1016-844` | 온보딩01 | "오븐이 열리고 있어요" 감성 인트로 |
| `1016-867` | 온보딩02 | 와앙이 캐릭터 소개 + 시작하기 버튼 |
| `1016-886` | 온보딩03 | 빵 종류 선택 (2×2 카드 그리드) |
| `1016-922` | 온보딩04 | 식감 태그 선택 (#바삭한 등) |
| `1016-962` | 온보딩05 | 세부 취향 태그 선택 (#겉바속촉 등) |
| `1016-1000` | 로그인 | 카카오 / 구글 / 애플 소셜 로그인 |
| `1016-643` | 홈 (추천화면) | 메인 추천 카드 + Tab Bar |
| `1016-1034` | 상세 페이지 | 빵 & 가게 상세 전체 스크롤 |
| `1016-1279` | 리뷰보기 | 별점 분포 + 리뷰 목록 |
| `1016-1711` | 리뷰하기 | 별점 입력 + 식감 선택 + 한줄 리뷰 |
| `1053-120` | 리뷰 등록 완료 | 성공 확인 팝업 카드 |
| `1016-1262` | 포키 완료 | 포키 완료 + 길찾기 버튼 |
| `1016-1564` | 지도 | 지도 + 베이커리 목록 리스트 |
| `1016-1472` | 내 취향 데이터 | DNA 요약, 밸런스 차트, 트렌드 |
| `1016-1644` | 마이페이지 | 프로필, 최근 포키, 찜/리뷰 통계 |
| `1016-1787` | 설정 | 프로필 편집 + 각종 설정 항목 |
| `1053-118` | 알림 팝업 | "갓 나온지 30분" 알림 + 확인 버튼 |
| `1016-1929` | MAP 레이블 | Tab Bar의 MAP 텍스트 레이블 컴포넌트 |
| `1016-1934` | 확인 버튼 | Primary 버튼 (확인 텍스트) |

### 앱 플로우
```
스플래시 → 온보딩01 → 온보딩02 → 온보딩03 → 온보딩04 → 온보딩05
                                                                ↓
                                                           로그인
                                                                ↓
                                                         홈 (추천화면)
                                                        /    |    \
                                               상세보기  지도    마이/설정
                                                   |
                                           리뷰보기 → 리뷰하기 → 리뷰 등록 완료
                                           포키 완료 → 길찾기
```

---

## 11. 스플래시 & 온보딩

### 11.1 스플래시 (`1016-849`)
```
배경: #F8F4EC (bg-warm)
중앙: POOKSHIN 로고 SVG — 344×55px, #FF9F46
위치: left: 44px, top: 411px
Home Indicator: 하단
```

### 11.2 온보딩01 (`1016-844`) — 감성 인트로
```
배경: #F8F4EC
텍스트: "당신을 위한 오븐이 열리고 있어요 ..." — 52px Interop SemiBold, #FF9F46
        우측 정렬 (right: 16px), top: calc(50%-190px)
        letter-spacing: 2.08px, line-height: 1.83
빵 이미지 3장: opacity 40%, 회전 배치 (상단 -18.52deg, 좌하단, 우하단 -14.8deg)
```

### 11.3 온보딩02 (`1016-867`) — 와앙이 소개
```
배경: #F8F4EC
텍스트: 40px Interop SemiBold/Bold, 우측 정렬 (right: 14px)
  - "안녕 -!" → #FF9F46
  - "와앙이" → white (배경 #FF9F46 하이라이트 박스)
  - "빵 취향" → white (배경 #FF9F46 하이라이트 박스)
하이라이트 박스: bg-[#FF9F46], 각 해당 텍스트 뒤에 배치
와앙이 캐릭터: 287×320px, left: 24px, top: 433px
CTA 버튼: "시작하기" — Primary, width: 354px, left: 41px, top: 801px
```

### 11.4 온보딩03 (`1016-886`) — 빵 종류 선택
```
배경: #F8F4EC
Progress: 도트 3개 (1번 활성: #FF9F46, 나머지: #D9D9D9), top: 66px
타이틀: "와앙! 지금 당장 한입 크게 베어 물고 싶은 빵은 뭐야?" — 24px Bold, 중앙
서브텍스트: "선호하는 빵을 선택해 주세요." — 16px Medium, #8B8B8B

빵 카드 그리드: 2×2, 카드 크기 131.4×131.4px, bg-white, radius: 9px
  - 선택됨: border: 3px solid #FB7459
  - 선택 안됨: border 없음
  - 선택 시 카드 하단 텍스트: 16px Bold, #FB7459 (예: "Croissant")

버튼 영역: 이전(white, Secondary) + 다음(primary) — gap 존재, top: 801px
```

### 11.5 온보딩04 (`1016-922`) — 식감 태그 선택
```
배경: #F8F4EC
Progress: 도트 2번 활성
타이틀: "와앙! 지금 가장 끌리는 식감을 골라봐!" — 24px Bold
서브: "선호하는 식감을 선택해 주세요." — 16px Medium, #8B8B8B

태그 칩 (선택/미선택 2가지 상태):
  [선택됨]
    배경: #FFEDEB
    border: 2px solid #FB7459
    텍스트: 17px Bold, #FB7459
    padding: 5px 10px, radius: 10px
  [미선택]
    배경: #F2F2F2
    border: 2px solid #9B9B9B
    텍스트: 17px Bold, #9B9B9B

태그 목록: #바삭한, #쫄깃한, #촉촉한, #버터리한, #담백한, #고소한, #달콤한
배치: 불규칙 자유 배치 (다양한 left 값, 2줄)
```

### 11.6 온보딩05 (`1016-962`) — 세부 취향 태그
```
타이틀: "디테일 차이! 너가 아는 한 끗 차이 취향을 알려줘." — 24px Bold
태그 상태 2종:
  [선택됨 - 노랑]
    배경: #FFFAE5
    border: 2px solid #FFDA46
    텍스트: 17px Bold, #FFDA46
  [미선택]
    배경: #F2F2F2 / border: #9B9B9B

태그 목록: #겉바속촉, #버터폭발, #고소풍미, #은은단맛, #디저트형, #쫄깃결
```

---

## 12. 로그인 화면 (`1016-1000`)

```
배경: #F8F4EC
타이틀 텍스트: top: 224px
  - "이제 고민 끝." — 40px SemiBold, #FF9F46
  - "와앙이가 정해줄게 -!" — 40px Bold, #FF9F46
  - "정해줄게" 부분: 배경 박스 #FF9F46, 텍스트 white

소셜 로그인 버튼 3개 (width: 344px, height: 60px, radius: 10px):

  [카카오 로그인]
    배경: #FEE500 (카카오 브랜드 옐로우)
    아이콘: 카카오 말풍선 아이콘 22px, left: 147px
    텍스트: 18px Medium, black

  [구글 로그인]
    배경: white
    아이콘: 구글 G 로고 23px, left: 147px
    텍스트: 18px Medium, black

  [애플 로그인]
    배경: black, border: 1px solid black
    아이콘: 애플 로고 white, left: 148px
    텍스트: 18px Medium, white

버튼 top 좌표: 카카오 603px / 구글 683px / 애플 763px
```

---

## 13. 지도 화면 (`1016-1564`)

**Tab Bar 활성: 위치(MAP) 아이콘 black + "MAP" 레이블**

### 13.1 레이아웃
```
[0px   ~ 71px ] Status Bar (#F5F7F8)
[71px  ~ 431px] 지도 영역 (배경: 실제 지도 이미지)
[431px ~ 862px] 베이커리 목록 카드 (배경: #F8F4EC, rounded-tl/tr 40px)
[826px ~ 907px] Floating Tab Bar
```

### 13.2 상단 바 (71px)
```
좌측: 뒤로가기 화살표 아이콘 (← 24px)
중앙: 위치 칩 (bg-black, 성수동 2가, 위치핀 white)
우측: 알림 아이콘 black 24px
```

### 13.3 지도 영역
- 실제 지도 이미지 (외부 지도 API 연동 예정)
- 현재 위치 마커: 빨간 원 + 흰 원 (30px + 10px 중심 도트)
- 페이지 인디케이터: 도트 3개 (활성 #FF9F46), top: 445px

### 13.4 베이커리 리스트 카드
```
각 카드: white, height: 104px, radius: 10px, left: 110px, width: 287px
프로필 이미지: 원형 84×84px, left: 41px (카드 좌측 돌출)
카드 내부 구성:
  - 가게명: 16px Bold, black
  - 위치 아이콘: \uEFA0 19.2px, #CACACA
  - 주소: 13px Regular, #CACACA
  - 별점: ★ 13.82px, #FB7459 + 점수 13px Regular, #9B9B9B
  - 태그: 10px, #F2F2F2 배경
  - [길찾기] 버튼: bg-[#FFA74A], padding: 2px 17px, radius: 8px, 13px SemiBold white
  - 북마크: \uF020 16.8px (찜: #FFCB30, 미찜: #9B9B9B)

카드 위치:
  1번 카드: top: 469px (푹신베이커리, 별점 4.5, 북마크 활성)
  2번 카드: top: 587px (르뺑 성수, 별점 4.1, 북마크 활성)
  3번 카드: top: 705px (베이크하우스, 별점 4.2, 북마크 비활성)
```

---

## 14. 리뷰 화면

### 14.1 리뷰보기 (`1016-1279`)

**전체 높이: 약 1420px (스크롤)**

```
[55px  ~ 105px] 헤더: ← 리뷰보기 (16px Bold)
[145px ~ 290px] 별점 요약 카드 (white, rounded 20px)
  - 좌: 4.3 (24px Bold, #FB7459) / 5 (16px SemiBold, #9B9B9B)
  - 우: 별점 분포 막대 (5→1점, #FB7459 active / #F2F2F2 bg)
  - 하단: 별 5개 18.72px 표시

[314px ~ 344px] 정렬 탭: "최신순" (Regular) | "인기순" (Bold) + 구분 도트
[344px ~ ...  ] 리뷰 카드 목록 (white bg, rounded 20px)

각 리뷰 카드:
  - 유저명: 16px SemiBold (예: 와앙, 빵순, 토깽)
  - 아이디: ***** 마스킹, 16px SemiBold
  - 날짜: 13px Medium, #9B9B9B (예: 2주전)
  - 별점: ★ 23.4px 5개 (활성 #FFCB30 / 비활성 #F2F2F2)
  - 리뷰 사진: 94×94px, radius 10px (있을 경우)
  - 본문: 13px Medium, black (3줄 이내)
  - 식감 세그먼트 바: 5개, 크기 27×5.25px (active #FA534C)
  구분선: 1px solid (Vector 170 Stroke)

[하단] 리뷰 더보기 > (16px Medium, #9B9B9B + arrow_key_right 아이콘)
```

### 14.2 리뷰하기 (`1016-1711`)

```
배경: #F8F4EC
[55px  ~ 105px] 헤더: ✕ 닫기(우) + "리뷰 하기" 타이틀 (16px Bold)
[123px ~ 175px] 최근 포키한 빵 섹션 (Bold 16px + 태그 칩들 오렌지색)
[192px ~ 530px] 리뷰 입력 카드 (white, rounded 10px)
  - 상단: #크루아상 태그(오렌지) + "어땠나요?" 텍스트
  - 별점 선택: ★ 31.2px 5개 (선택: #FFCB30 / 미선택: #F2F2F2)
  - 식감 세그먼트 바 선택 (4가지 항목, 각 5개 바)
    바 크기: 36×7px (홈과 동일)
    active색: #FA534C

[553px ~ 788px] 한줄 리뷰 섹션 (white, rounded 10px)
  - "한줄 리뷰" (Bold) + "(선택)" (Regular, #9B9B9B)
  - 카메라 버튼: \uE090, 59×52px 박스 (bg-[#F2F2F2], border #9B9B9B)
  - 텍스트 입력: bg-[#F2F2F2], border #9B9B9B, radius 10px, height 78px

[811px] CTA 버튼: "리뷰 등록하기" — Primary, width: 354px, 중앙
```

---

## 15. 포키 완료 & 리뷰 완료

### 15.1 포키 완료 (`1016-1262`)
```
배경: #F8F4EC
중앙 상단: 체크 원형 뱃지 (#FF9F46, 61.5px) — top: 310px
타이틀: "포키 완료 !" — 32px Bold, black, top: 407px
CTA: "길 찾기" — Primary, width: 354px, top: 759px
```

### 15.2 리뷰 등록 완료 (`1053-120`) — 팝업 카드
```
카드: #F8F4EC, width: 398px, height: 379px, radius: 20px
체크 원형: #FF9F46, 61.5px
타이틀: "리뷰 등록 완료 !" — 32px Bold, 중앙 정렬
캐릭터 이미지(배경): Group9020 PNG 오버레이
```

---

## 16. 마이페이지 (`1016-1644`)

**Tab Bar 활성: person 아이콘 black + "MY PAGE" 레이블**

```
[55px  ~ 95px ] 헤더: ← + "마이페이지" + 알림벨
[112px ~ 340px] 히어로 배너 (white rounded-tr-50px)
  - "MY WA-ANG" 타이틀: Wanted Sans ExtraBlack, 20px
  - 와앙이 캐릭터 이미지: 172×217px
  - 닉네임: Wanted Sans Bold, 20px white (우측)
  - 한마디: 16px SemiBold, 노란 언더라인
  - "내 취향 데이터 보기 >" 링크: 16px Medium, #9B9B9B, right 정렬

[411px ~ 484px] 최근 포키한 빵 카드 (white, rounded 10px)
  - "최근 포키한 빵" Bold + 오렌지 태그 칩들
  - "리뷰하기 >" 링크

[539px ~ 664px] 활동 요약 카드 (white, rounded 20px)
  찜한 빵 | 찜한 가게 | 내 리뷰 — 3분할 (구분선 세로)
  각 아이콘: favorite / bookmark / stamp_more (#FB7459, 24px)
  텍스트: 13px Medium

[706px ~ 1009px] 내 정보 섹션 (white, rounded 10px)
  "내 정보" 레이블 (14px Regular, #8B8B8B)
  항목: 닉네임 / 생년월일 / 이메일주소 / 위치설정
    레이블: 16px Regular, black
    값: 16px SemiBold, black
```

---

## 17. 설정 화면 (`1016-1787`)

**Tab Bar 활성: setting 아이콘 black + "SETTING" 레이블**

```
배경: white
[55px  ~ 105px] 헤더: ← + "설정" + 알림벨

[123px ~ 273px] 프로필 카드 (bg-[#F8F4EC], rounded 10px)
  - 프로필 이미지: 105px 원형 (배경 #FFA74A + person_circle 아이콘 white 48px)
  - 닉네임: 20px SemiBold
  - 이메일: 16px Medium, #9B9B9B
  - "수정하기" 링크: edit 아이콘 + 텍스트 (우측 상단)

설정 메뉴 목록 (16px Medium):
  ── 구분선 ──
  식감 취향 수정
  위치 설정
  알림 설정
  ── 구분선 ──  (시스템 설정 섹션 레이블: #9B9B9B)
  다크모드  ←→  토글 스위치 (활성: bg-[#FB7459], 비활성: bg-회색)
  ── 구분선 ──
  개인정보 처리방침
  서비스 이용약관
  문의하기
  ── 구분선 ──
  회원탈퇴 (#9B9B9B, 좌) | 로그아웃 (#9B9B9B, 우)

다크모드 토글 스펙:
  배경: #FB7459 (활성), radius: 15px, w: 43px, h: 24px
  노브: white, 20px 원, right 정렬

구분선: 1px, Vector 170 Stroke 이미지, width: 351px, 중앙
```

---

## 18. 내 취향 데이터 화면 (`1016-1472`)

**전체 높이: 약 2340px (풀 스크롤)**

```
[0px    ~ 55px  ] Status Bar
[55px   ~ 105px ] 헤더: ✕ + "내 취향 데이터" (16px Bold 중앙)
[112px  ~ 340px ] 히어로 배너 (마이페이지와 동일 구조)
[392px  ~ 640px ] DNA 요약 섹션 (white, rounded 20px)
[640px  ~ 737px ] "당신은..." + 취향 요약 텍스트
[737px  ~ 1105px] 취향 밸런스 (레이더 차트)
[1105px ~ 1200px] "겉바속촉을 좋아하는 너..." 황색 배너 (reversed rounded-tr/br 20px)
[1218px ~ 1480px] 내 취향 트렌드 섹션
[1481px ~ 1667px] 꺾은선 그래프 영역 (4주 트렌드)
[1667px ~ 1810px] "지난 4주간 바삭 취향이 12% 상승" 배너 (#FFF7DF, rounded-tr/br 20px)
[1811px ~ 2042px] 와앙이의 코멘트 (흰 카드 좌측, 캐릭터 우측)
[2120px ~ 2350px] 추천 빵 (3장 카드, #FFF7DF 배경)
```

### 18.1 DNA 요약 섹션
```
타이틀: "DNA 요약" — 20px Bold
태그 클라우드: 다양한 크기, #FA534C 색상
  - 대형 키워드: 24px SemiBold (예: 바삭파, 푹신베이커리, 크루아상매니아)
  - 소형 키워드: 16px Regular (예: 담백파, 겉바속촉, 조용한분위기)

최근 포키 태그: #FFA74A bg, 13px Regular, white
```

### 18.2 취향 밸런스 레이더 차트
```
타이틀: "취향 밸런스" — 20px Bold
5각형 레이더 (3겹: Polygon1 / Polygon2 / Polygon3)
축 레이블: 바삭(상) / 버터(우상) / 촉촉(우하) / 담백(좌하) / 꾸덕(좌상) / 쫄깃(하)
축 선: Vector 이미지 (6방향)
레이블: 20px Medium, black
```

### 18.3 내 취향 트렌드
```
타이틀: "내 취향 트렌드" — 20px Bold
원형 도넛 그래프: #FFDA46 배경 하이라이트 (외 150px / 내 )
  수치: "82%" — 48px Bold, #FB7459
  레이블: "#바삭" — 24px SemiBold, 노란 언더라인

꺾은선 그래프: SVG Intersect 이미지
x축 레이블: 4주전 / 3주전 / 2주전 / 1주전 — 14px Regular, #9B9B9B

상승 배너: "#FFF7DF", rounded-tr/br 20px
  캐릭터 아이콘(오리) + "지난 4주간 바삭 취향이" + "12% 상승" (#FFA74A) + "했어요!"
```

### 18.4 와앙이의 코멘트
```
좌: 흰 카드 (258px, rounded-tr/br 20px)
  "와앙이의 코멘트" — 20px Bold
  본문: 15px Regular + SemiBold #FFA74A 강조
우: 와앙이 캐릭터 이미지 148×172px
```

### 18.5 추천 빵
```
"추천 빵" 타이틀 — 20px Bold
가로 스크롤 카드 (3장): #FFF7DF bg, width 414px 좌측 정렬
  각 빵 이미지: 148×102px, radius 10px
  빵 이름: 15px Regular (갈릭 휘낭시에 / 에피 바게트 / 소금빵)
```

---

## 19. 알림 팝업 & 확인 버튼

### 19.1 알림 팝업 (`1053-118`) — 갓 나온 빵 알림
```
카드: #F8F4EC, width: 398px, height: 379px, radius: 20px
알람 아이콘: \uEF60, 31.2px, #FF9F46 (카드 상단 중앙)
타이틀 (2줄, 24px Bold, 중앙):
  "갓 나온지 30분 된 빵이에요!"
  "달려가서 '포키' 하세요!"
확인 버튼: Primary — width 354px, 중앙 정렬
```

### 19.2 확인 버튼 컴포넌트 (`1016-1934`)
```
배경: #FF9F46
padding: 20px 60px
radius: 10px
텍스트: "확인" — 18px Bold, white, tracking -0.36px
```

---

## 20. Tab Bar 활성 상태별 정리

| 탭 | 활성 화면 | 아이콘 | 아이콘 색 | 레이블 |
|----|-----------|--------|-----------|--------|
| HOME | 홈 (추천화면) | \uE110 home2 | black | "HOME" |
| MAP | 지도 | \uEFA0 location | black | "MAP" |
| MY PAGE | 마이페이지 | \uEF20 person | black | "MY PAGE" |
| SETTING | 설정 | \uE0B0 setting | black | "SETTING" |

- **비활성**: 아이콘 #C3C3C3, 레이블 없음
- **레이블 폰트**: 14px Interop Bold, black, tracking -0.28px
- **레이블 위치**: 아이콘 바로 아래

### 추가 아이콘 목록 (Figma에서 확인)

| 아이콘명 | 유니코드 | 크기 | 컬러 | 화면 |
|---------|---------|------|------|------|
| camera (카메라) | `\uE090` | 31.2px | `#9B9B9B` | 리뷰하기 |
| bookmark (북마크) | `\uF020` | 16.8~24px | `#FFCB30` / `#9B9B9B` | 지도, 마이 |
| favorite (하트) | `\uE09C` | 24px | `#FB7459` | 마이페이지 |
| stamp_more | `\uF007` | 24px | `#FB7459` | 마이페이지 |
| arrow_key_right | `\uE8C3` | 19.2px | `#9B9B9B` | 리스트 링크 |
| edit (편집) | `\uE0B4` | 15.36px | `#9B9B9B` | 설정 수정 |
| person_circle | `\uEF28` | 48px | white | 설정 프로필 |
| my_location | `\uE140` | 19.2px | `#9B9B9B` | 지도 현위치 |
| location (소형) | `\uEFA0` | 19.2px | `#CACACA` | 지도 리스트 |
