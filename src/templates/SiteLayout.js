const SiteLayout = {

    baseURL: "/",
    siteName: "Online Heritage Search",
    logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjUiIGhlaWdodD0iNDMiIHZpZXdCb3g9IjAgMCAxMjUgNDMiPiAgPGcgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgPHBhdGggZD0iTTE2LjYyNTczMSAzMi43ODA0Mjk2QzE2LjQwMTA1MjYgMjguNDU5ODU3MSAxNS45MTg2NTUgMTkuMjE5NTU3MyAxNS41MjIxNjM3IDEzLjQ3NDMyNzcgMTUuMjcxMDUyNiA2LjY1NzI3NjUyIDEuMTQ5MzU2NzMgMCAxLjE0OTM1NjczIDBMMS45MDkyOTgyNSAxLjgxNzQzNjQ5IDIuMzg1MDg3NzIgOC4wMjg2NzU0OS45NjQzMjc0ODUgOC42MDEyMDEyNy41OTQyNjkwMDYgMzYuMzQ4NzI5OEMzLjQ1NjgyMzY5IDM0LjAyMTk2NjcgNy4wMDEzNTg2NyAzMi43MTE1NTcyIDEwLjY3ODM2MjYgMzIuNjIwNjU1IDEyLjY3NjU3NzIgMzIuNTEyNDE1MSAxNC42ODAwMjYxIDMyLjU1NDY5NTUgMTYuNjcxOTg4MyAzMi43NDcxNDMyTTI0LjgyNjQ5MTIgMTcuMzA4OTE5QzIwLjY5NjM3NDMgMTcuNjgxNzI2NCAxNy41NTc0ODU0IDE3LjY4MTcyNjQgMTYuNzg0MzI3NSAxNi41MDMzODg1TDE3LjY1NjYwODIgMzIuODg2OTQ2QzIwLjYzMjg4ODcgMzMuMjIzMzYyNiAyMy41NDQ2MzkgMzMuOTk0ODMyNyAyNi4zMDAxMTcgMzUuMTc3MDQ5MkwyNC44MjY0OTEyIDE3LjMwODkxOXoiLz4gICAgPHBhdGggZD0iTTQuMDA0MDkzNTcgMzUuNTA5OTEzQzEuNjQ0OTcwNzYgMzYuODU0NjgyOC4zNTYzNzQyNjkgMzguNjEyMjAzOC4xMDUyNjMxNTggMzkuOTQzNjU5MS0uMDczMTU3ODk0NyA0MC45MDg5NjQyIDEuMzM0Mzg1OTYgNDIuMDg3MzAyMiAyLjE0MDU4NDggNDIuNjczMTQyNSA0LjgzMDA2MjI4IDQxLjYxNTA0NDMgNy41NzQyNDUwNyA0MC43MDM4OTI0IDEwLjM2MTE2OTYgMzkuOTQzNjU5MSA2Ljk1Nzk1MzIyIDM2LjgwMTQyNDYgNC44NTY1NDk3MSAzNS44MTYxNDc3IDMuOTk3NDg1MzggMzUuNTE2NTcwM00yMC45NDA4NzcyIDM3Ljk5OTczNDRDMTkuMjUyMzU0NyAzNi4yODk0MzY5IDE3LjM1ODgzNDQgMzQuNzk3ODA3MiAxNS4zMDQwOTM2IDMzLjU1OTMzMSAxMS45OTUzMDI4IDMzLjE2MTcxMTcgOC42NDAxMzM0NiAzMy41NzUwODggNS41MjM5NzY2MSAzNC43NjQyOTggNy44MzQzNzE0MyAzNi4wNDk3Njk2IDkuOTQ4NzE3MDEgMzcuNjY0MTI0OSAxMS44MDE3NTQ0IDM5LjU1NzUzNzEgMTQuODAyNjY2IDM4Ljc5NTI5MjkgMTcuODU4NDc3MSAzOC4yNzIxOTA4IDIwLjk0MDg3NzIgMzcuOTkzMDc3MU0zMC41MDI5MjQgMzguMjUyNzEwOUMyNi42MTk1MTQyIDM2LjI2NzEyMDcgMjIuNDg3MDk2MyAzNC44MjA0NDM1IDE4LjIxODMwNDEgMzMuOTUyMTEwMyAxOS43NzUzNTM0IDM1LjE1MDQ1NjkgMjEuMjQ2MDYxOSAzNi40NTg1NjYxIDIyLjYxOTM1NjcgMzcuODY2NTg4OSAyNS4yNTM0MDU4IDM3LjcyMzcxMDIgMjcuODk1MDU1IDM3Ljg1MzA5MzEgMzAuNTAyOTI0IDM4LjI1MjcxMDlNMzMuMzcwODc3MiAxOC41ODcxMTYxQzMzLjM3MDg3NzIgMTYuMjIzNzgyOSAzNS40Nzg4ODg5IDE1LjU3ODAyNzEgMzcuMjY5NzA3NiAxNS41NzgwMjcxIDM4LjcxNTgyMDEgMTUuNTc1MDg4IDQwLjE0NDUzNTggMTUuODk1Njk2OCA0MS40NTI2OTAxIDE2LjUxNjcwMzFMNDEuOTAyMDQ2OCAxMy41NDA5MDA1QzQwLjM2MDM2OSAxMy4wMDYxOTcgMzguNzQxNTkyMSAxMi43MzE3NzI0IDM3LjExMTExMTEgMTIuNzI4NzEyNyAzMy4wODY3MjUxIDEyLjcyODcxMjcgMjkuOTU0NDQ0NCAxNC44NjU2OTg1IDI5Ljk1NDQ0NDQgMTguODgwMDM2MiAyOS45NTQ0NDQ0IDI1LjkwMzQ2MyAzOS41MzYzMTU4IDI0LjUxMjA5MjIgMzkuNTM2MzE1OCAyOS41MzE2Nzg3IDM5LjUzNjMxNTggMzIuMTk0NTg5MyAzNi45Nzg5NDc0IDMzLjIxOTgwOTkgMzUuMTYxNjk1OSAzMy4yMTk4MDk5IDMzLjMyNTA2IDMzLjA1NDU5OTUgMzEuNTIwODEwOCAzMi42Mjg3NjI0IDI5LjgwMjQ1NjEgMzEuOTU0OTI3M0wzMC4wNzMzOTE4IDM1LjEzNzEwNTVDMzEuNjEwNzQyOCAzNS42MzczMTM3IDMzLjIwMDkxMTUgMzUuOTU0NTgyIDM0LjgxMTQ2MiAzNi4wODI0Mzg4IDM5LjI4NTIwNDcgMzYuMDgyNDM4OCA0Mi45NTkzNTY3IDM0LjE3MTgwMDQgNDIuOTU5MzU2NyAyOS4zNTE5MzIyIDQyLjk1OTM1NjcgMjEuOTA5MDk3IDMzLjM3NzQ4NTQgMjIuOTE0MzQ1OCAzMy4zNzc0ODU0IDE4LjU3MzgwMTVNNjUuMTg5Mjk4MiAyOS4wMzkwNDAyTDY1LjE4OTI5ODIgMzUuNzk2MTc1OSA2Mi4yNjE4NzEzIDM1Ljc5NjE3NTkgNjIuMjYxODcxMyAxNi43NDk3MDc3IDY3LjI2NDI2OSAxNi43NDk3MDc3QzcxLjMwMTg3MTMgMTYuNzQ5NzA3NyA3NS4xOTQwOTM2IDE4LjA4MTE2MyA3NS4xOTQwOTM2IDIyLjY2MTM2OTMgNzUuMTk0MDkzNiAyNC45NzgxMDE1IDczLjczMzY4NDIgMjcuODAwNzg2OCA3MC45NzgwNzAyIDI4LjUxMzExNTQgNjkuMDY0ODc0MiAyOC44NTUxNDgxIDY3LjEyNTc3MzcgMjkuMDI4ODkyMSA2NS4xODI2OTAxIDI5LjAzMjM4MjlMNjUuMTg5Mjk4MiAyOS4wMzkwNDAyek02NS4xODI2OTAxIDI2LjYyOTEwNjFMNjcuNjY3MzY4NCAyNi42MjkxMDYxQzcwLjQ0OTQxNTIgMjYuNjI5MTA2MSA3Mi4wODgyNDU2IDI0LjUzODcyMTMgNzIuMDg4MjQ1NiAyMi43MDc5NzAyIDcyLjA4ODI0NTYgMjAuOTkwMzkyOSA3MC42ODA3MDE4IDE5LjEzOTY3IDY3Ljk5MTE2OTYgMTkuMTM5NjdMNjUuMTg5Mjk4MiAxOS4xMzk2NyA2NS4xODkyOTgyIDI2LjYyOTEwNjEgNjUuMTgyNjkwMSAyNi42MjkxMDYxeiIvPiAgICA8cG9seWdvbiBwb2ludHM9IjkzLjk4OCAxNi43NSAxMDUuNDI3IDE2Ljc1IDEwNS40MjcgMTkuMTUzIDk2LjkxNSAxOS4xNTMgOTYuOTE1IDI1LjA5OCAxMDQuNjY3IDI1LjA5OCAxMDQuNjY3IDI3Ljg3NCA5Ni45MTUgMjcuODc0IDk2LjkxNSAzMy4zOTMgMTA1LjQyNyAzMy4zOTMgMTA1LjQyNyAzNS43OTYgOTMuOTg4IDM1Ljc5NiIvPiAgICA8cG9seWdvbiBwb2ludHM9IjExNC4zNjcgMjkuMzM5IDEwNy4wOTggMTYuNzUgMTEwLjUyOCAxNi43NSAxMTUuODg3IDI2LjgwMiAxMjEuMTAxIDE2Ljc1IDEyNC41MjQgMTYuNzUgMTE3LjI5NSAyOS4zMzkgMTE3LjI5NSAzNS43OTYgMTE0LjM2NyAzNS43OTYiLz4gICAgPHBhdGggZD0iTTc2LjE2NTQ5NzEgMzMuMzg2MjQxOEM3NS4wOTQ5NzA4IDMyLjcyMDUxNDEgNzMuNjY3NjAyMyAzMS42MDIwOTE3IDcxLjE2OTcwNzYgMjguMTIwMzM2TDY4LjA4MzY4NDIgMjguNTkzMDAyN0M2OC4wODM2ODQyIDI4LjU5MzAwMjcgNzIuMDg4MjQ1NiAzNS4wOTA1MDQ2IDc1LjYzNjg0MjEgMzYuNTgxNzM0NUw3Ni4xNjU0OTcxIDMzLjM4NjI0MTh6TTgxLjA5NTIwNDcgMjkuMDM5MDQwMkw4MS4wOTUyMDQ3IDM1Ljc5NjE3NTkgNzguMTY3Nzc3OCAzNS43OTYxNzU5IDc4LjE2Nzc3NzggMTYuNzQ5NzA3NyA4My4xNzAxNzU0IDE2Ljc0OTcwNzdDODcuMjA3Nzc3OCAxNi43NDk3MDc3IDkxLjEgMTguMDgxMTYzIDkxLjEgMjIuNjYxMzY5MyA5MS4xIDI0Ljk3ODEwMTUgODkuNjM5NTkwNiAyNy44MDA3ODY4IDg2Ljg4Mzk3NjYgMjguNTEzMTE1NCA4NC45NzA3OTM5IDI4Ljg1NTI0ODMgODMuMDMxNjg0NyAyOS4wMjg5OTMgODEuMDg4NTk2NSAyOS4wMzIzODI5TDgxLjA5NTIwNDcgMjkuMDM5MDQwMnpNODEuMDg4NTk2NSAyNi42MjkxMDYxTDgzLjU3MzI3NDkgMjYuNjI5MTA2MUM4Ni4zNTUzMjE2IDI2LjYyOTEwNjEgODcuOTk0MTUyIDI0LjUzODcyMTMgODcuOTk0MTUyIDIyLjcwNzk3MDIgODcuOTk0MTUyIDIwLjk5MDM5MjkgODYuNTkzMjE2NCAxOS4xMzk2NyA4My44OTcwNzYgMTkuMTM5NjdMODEuMDg4NTk2NSAxOS4xMzk2NyA4MS4wODg1OTY1IDI2LjYyOTEwNjF6Ii8+ICAgIDxwYXRoIGQ9Ik05Mi4wNzgwMTE3IDMzLjM4NjI0MThDOTEuMDA3NDg1NCAzMi43MjA1MTQxIDg5LjU4MDExNyAzMS42MDIwOTE3IDg3LjA4MjIyMjIgMjguMTIwMzM2TDgzLjk5NjE5ODggMjguNTkzMDAyN0M4My45OTYxOTg4IDI4LjU5MzAwMjcgODguMDAwNzYwMiAzNS4wOTA1MDQ2IDkxLjU0OTM1NjcgMzYuNTgxNzM0NUw5Mi4wNzgwMTE3IDMzLjM4NjI0MTh6TTU5LjA3MDExNyAyNy45NjA1NjE0QzU5LjA3MDExNyAzMy4yMDY0OTUzIDU2LjQyNjg0MjEgMzYuMDIyNTIzMyA1MS45MjY2NjY3IDM2LjAyMjUyMzMgNDcuNDI2NDkxMiAzNi4wMjI1MjMzIDQ0Ljc4MzIxNjQgMzMuMTg2NTIzNSA0NC43ODMyMTY0IDI3Ljk2MDU2MTRMNDQuNzgzMjE2NCAxNi45ODkzNjk3IDQ3LjQyNjQ5MTIgMTYuOTg5MzY5NyA0Ny40MjY0OTEyIDI3LjU4Nzc1MzlDNDcuNDI2NDkxMiAzMS4xNzYwMjYgNDguNTMwMDU4NSAzMy42MzkyMTgzIDUxLjkzMzI3NDkgMzMuNjM5MjE4MyA1NS4zMzY0OTEyIDMzLjYzOTIxODMgNTYuNDQwMDU4NSAzMS4xNzYwMjYgNTYuNDQwMDU4NSAyNy41ODc3NTM5TDU2LjQ0MDA1ODUgMTYuOTg5MzY5NyA1OS4wODMzMzMzIDE2Ljk4OTM2OTcgNTkuMDgzMzMzMyAyNy45NjA1NjE0IDU5LjA3MDExNyAyNy45NjA1NjE0ek00OC45MDY3MjUxIDEwLjQ4NTIxMDVDNDguNTI3Mzk3NiAxMC4wNzIzMDAyIDQ3Ljk5ODAyOTIgOS44MzIwNzQ1NSA0Ny40Mzk3MDc2IDkuODE5NDgyODcgNDYuMzQ0ODI3MyA5LjgxOTQ4MjkxIDQ1LjQ1NzI1MTUgMTAuNzEzNjUyMiA0NS40NTcyNTE1IDExLjgxNjY2NTggNDUuNDU3MjUxNSAxMi45MTk2Nzk1IDQ2LjM0NDgyNzMgMTMuODEzODQ4OCA0Ny40Mzk3MDc2IDEzLjgxMzg0ODggNDcuOTkyMzg1MiAxMy43OTMzMTQ0IDQ4LjUxNDc0NzMgMTMuNTU0MTEzMyA0OC44OTM1MDg4IDEzLjE0ODEyMTFMNDguODkzNTA4OCAxMy44MTM4NDg4QzQ4LjE0MTQzMjQgMTQuMzc1ODU2OSA0Ny4xMzk1OTMxIDE0LjQ2NDE3MjYgNDYuMzAyMDU4MSAxNC4wNDIyOTQyIDQ1LjQ2NDUyMzIgMTMuNjIwNDE1OSA0NC45MzM1NTExIDEyLjc2MDAwMTMgNDQuOTI4NTk2NSAxMS44MTY2NjU4IDQ0Ljk0NjczNDQgMTAuNDIyMDkzOCA0Ni4wODE4MTA3IDkuMzA1Mzg2NDYgNDcuNDY2MTQwNCA5LjMyMDE4NzEzIDQ3Ljk4MzA2MjcgOS4zMTIzNDUyNyA0OC40ODc3NjkxIDkuNDc4NzA2MzcgNDguOTAwMTE3IDkuNzkyODUzNzdMNDguOTAwMTE3IDEwLjQ1ODU4MTQgNDguOTA2NzI1MSAxMC40ODUyMTA1eiIvPiAgICA8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSI0Ljg0IiB4PSI1MS4wOTQiIHk9IjkuNDI3Ii8+ICAgIDxwb2x5Z29uIHBvaW50cz0iNTUuMTU4IDE0LjI2NyA1NC42MjMgMTQuMjY3IDU0LjYyMyA5LjkyNiA1My40NiA5LjkyNiA1My40NiA5LjQyNyA1Ni4zMjggOS40MjcgNTYuMzI4IDkuOTI2IDU1LjE1OCA5LjkyNiIvPiAgICA8cG9seWdvbiBwb2ludHM9IjU3LjcxNSA5LjQyNyA1OC4zMzcgOS40MjcgNTkuNTU5IDExLjU4NCA2MC43ODIgOS40MjcgNjEuNDAzIDkuNDI3IDU5LjgyMyAxMi4xODMgNTkuODIzIDE0LjI2NyA1OS4yODggMTQuMjY3IDU5LjI4OCAxMi4xODMiLz4gICAgPHBhdGggZD0iTTcwLjcyNjk1OTEsMTEuODQ5OTUyMiBDNzAuNzIzMzExNywxMy4yNDI1NTM3IDY5LjYwMDM5NzcsMTQuMzY4ODQ2OCA2OC4yMTgwNjIzLDE0LjM2NjM5ODggQzY2LjgzNTcyNjksMTQuMzYzOTUwOCA2NS43MTY3NTAzLDEzLjIzMzY4NzQgNjUuNzE3OTYyOSwxMS44NDEwODE3IEM2NS43MTkxNzU1LDEwLjQ0ODQ3NTkgNjYuODQwMTE4Niw5LjMyMDE5MTk4IDY4LjIyMjQ1NjEsOS4zMjAxODcxMyBDNjguODg1NDczNCw5LjMxNjY0MzYyIDY5LjUyMjU0MjQsOS41Nzk1MDIzNiA2OS45OTI2MTE2LDEwLjA1MDU2NDUgQzcwLjQ2MjY4MDksMTAuNTIxNjI2NyA3MC43MjY5Njg0LDExLjE2MjAyODUgNzAuNzI2OTU5MSwxMS44Mjk5ODA0IE02Ni4yNTMyMTY0LDExLjgyOTk4MDQgQzY2LjI1MzIxNjQsMTIuOTMyOTk0MSA2Ny4xNDA3OTIyLDEzLjgyNzE2MzMgNjguMjM1NjcyNSwxMy44MjcxNjMzIEM2OS4zMzA1NTI4LDEzLjgyNzE2MzMgNzAuMjE4MTI4NywxMi45MzI5OTQxIDcwLjIxODEyODcsMTEuODI5OTgwNCBDNzAuMjE4MTI4NywxMC43MjY5NjY3IDY5LjMzMDU1MjgsOS44MzI3OTc0MyA2OC4yMzU2NzI1LDkuODMyNzk3NDMgQzY3LjE0MDc5MjIsOS44MzI3OTc0MyA2Ni4yNTMyMTY0LDEwLjcyNjk2NjcgNjYuMjUzMjE2NCwxMS44Mjk5ODA0Ii8+ICAgIDxwb2x5Z29uIHBvaW50cz0iNzMuMjY1IDkuOTI2IDczLjI2NSAxMS4zNjQgNzQuODY0IDExLjM2NCA3NC44NjQgMTEuODYzIDczLjI2NSAxMS44NjMgNzMuMjY1IDE0LjI2NyA3Mi43MjkgMTQuMjY3IDcyLjcyOSA5LjQyNyA3NC45MTcgOS40MjcgNzQuOTE3IDkuOTI2Ii8+ICA8L2c+PC9zdmc+",
    logo2: "https://i.imgur.com/KikZE4d.png",
    links: [{
            url: "/",
            title: "Home"
        },
        {
            url: "/archives.html",
            title: "Archives"
        }, {
            url: "/artifact.html",
            title: "Artifact"
        },
        {
            url: "/faq.html",
            title: "FAQ"
        }
    ]

}

export default SiteLayout;