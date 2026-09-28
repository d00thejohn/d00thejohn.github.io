# 홈페이지 수정 안내

정적 HTML/CSS/JavaScript로 만든 개인 홈페이지입니다. 별도 서버나 프로그램 설치 없이 GitHub Pages에서 운영할 수 있습니다.

## 배포 설정

저장소의 **Settings → Pages**에서 다음 설정을 사용합니다.

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/(root)**

`main` 브랜치에 변경 내용을 저장하면 자동으로 다시 배포됩니다. 반영까지 수 분이 걸릴 수 있습니다.

## 수정할 파일

| 수정할 내용 | 파일 |
|---|---|
| 소개, 논문, 경력, 강의, 발표, 링크 | `index.html` |
| 색상, 글꼴, 간격, 화면 크기별 배치 | `style.css` |
| 메뉴 동작과 현재 섹션 표시 | `script.js` |
| 프로필 사진 | `assets/portrait.jpg` |
| Teaching 수업 사진 | `assets/teaching-class.jpg` |

GitHub에서 파일을 열고 연필 모양 편집 버튼을 누릅니다. 수정한 뒤 **Commit changes**를 누르면 저장됩니다. PDF 다운로드 기능은 현재 공개 사이트에 포함하지 않았습니다.

논문이나 강의를 추가할 때는 기존 HTML 항목을 복사해서 내용을 고칩니다. `id` 값은 중복되지 않게 하고, 페이지 맨 아래 업데이트 날짜도 함께 수정합니다.

## 무료 운영

GitHub Free는 공개 저장소의 GitHub Pages를 지원합니다. 기본 `github.io` 주소를 사용하면 별도 도메인 구매가 필요 없습니다.

공식 안내: https://docs.github.com/en/pages/quickstart

## 기존 홈페이지 안내

새 사이트 확인 후 기존 홈페이지 첫 화면에 새 주소를 연결하면 이전 방문자가 찾기 쉽습니다.
