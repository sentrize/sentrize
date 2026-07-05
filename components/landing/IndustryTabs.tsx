"use client";

import { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/animate-ui/primitives/radix/tabs";
import { cn } from "@/lib/utils";

/* IndustryTabs — JSX port of the legacy _landing.html "section5" tab
   switcher (kept verbatim in markup/classNames for 100% visual fidelity).
   The jQuery-driven .active class toggling is now backed by animate-ui's
   Radix Tabs primitive so the trigger/content pairing is keyboard-accessible
   and state-driven instead of relying on external script wiring. */
export default function IndustryTabs() {
  const [value, setValue] = useState("1");

  return (
    <div className="wrapperContainer clearfix section5 wrapperDark">
      <div className="container no-padd">
        <div className="row no-padd">
          <div className="tabFlexBox">
            <div className="tabTitle font_52 wrapperMint borderRadius32 wrapperLeftBottomGridBlack">
              Built for ambitious technology teams
            </div>
            <div className="tabContainer wrapperWhite1 borderRadius32">
              <Tabs value={value} onValueChange={setValue}>
                <TabsList className="tabBox">
                  <TabsTrigger
                    value="1"
                    className={cn("boxMenuItem itemAll item1", value === "1" && "active")}
                  >
                    <div className="colorWhite font_14">
                      SaaS &amp; Software
                    </div>
                  </TabsTrigger>

                  <TabsTrigger
                    value="2"
                    className={cn("boxMenuItem itemAll item2", value === "2" && "active")}
                  >
                    <div className="colorWhite font_14">
                      Startups
                    </div>
                  </TabsTrigger>

                  <TabsTrigger
                    value="3"
                    className={cn("boxMenuItem itemAll item3", value === "3" && "active")}
                  >
                    <div className="colorWhite font_14">
                      E-commerce
                    </div>
                  </TabsTrigger>

                  <TabsTrigger
                    value="4"
                    className={cn("boxMenuItem itemAll item4", value === "4" && "active")}
                  >
                    <div className="colorWhite font_14">
                      Enterprises
                    </div>
                  </TabsTrigger>

                  <TabsTrigger
                    value="5"
                    className={cn("boxMenuItem itemAll item5", value === "5" && "active")}
                  >
                    <div className="colorWhite font_14">
                      AI products
                    </div>
                  </TabsTrigger>
                </TabsList>
                <div className="tabContentBox">

                <TabsContent value="1">
                  <div className="contentItem itemAll item1 active">
              <div className="contentItemBox">
                <div className="contentIcon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGNsYXNzPSJibGluay1pY29uIiBkYXRhLWljb25uYW1lPSJTT0ZUV0FSRV9IRUFMVEgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PGcgY2xhc3M9ImJsaW5rLXNodXQiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTcxLjg3LDM5Ljg1Yy0uMDYsMC0uMTEsMC0uMTcsMC0xLjI5LS4wNi0yLjM3LS44MS0yLjk0LTEuNWwuNzctLjY0Yy40Mi41LDEuMjUsMS4xLDIuMjIsMS4xNC44OS4wNCwxLjczLS4zNiwyLjU0LTEuMThsLjcxLjcxYy0uOTguOTgtMi4wMywxLjQ3LTMuMTMsMS40N1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im04NS44NywzOS44NWMtLjA2LDAtLjExLDAtLjE3LDAtMS4yOS0uMDYtMi4zNy0uODEtMi45NC0xLjVsLjc3LS42NGMuNDIuNSwxLjI1LDEuMSwyLjIyLDEuMTQuODkuMDQsMS43My0uMzYsMi41NC0xLjE4bC43MS43MWMtLjk4Ljk4LTIuMDMsMS40Ny0zLjEzLDEuNDdaIi8+PC9nPjxnIGNsYXNzPSJibGluay1vcGVuIj48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjcxLjkiIGN5PSIzOC4wMiIgcj0iNCIvPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iODUuOSIgY3k9IjM4LjAyIiByPSI0Ii8+PC9nPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTk1LjksMjQuMDJsLTQwLC4wN2MtNC40MiwwLTgsMy41MS04LDcuOTN2MTUuMzJjLTEwLjk3LDMuMi0xOS4wMiwxMy4zNS0xOS4wMiwyNS4zNCwwLDYuOTIsMi42OCwxMy4yMiw3LjA1LDE3Ljk0bC0xMi4wNSwxMi4wNWMtLjM5LjM5LS4zOSwxLjAyLDAsMS40MS4yLjE5LjQ1LjI5LjcxLjI5cy41MS0uMS43MS0uMjlsMTIuMDUtMTIuMDVjNC43MSw0LjM3LDExLjAyLDcuMDUsMTcuOTQsNy4wNSwxMS42NCwwLDIxLjU0LTcuNTgsMjUuMDQtMTguMDZoMTUuNTdjNC40MiwwLDgtMy41OCw4LTh2LTQxYzAtNC40Mi0zLjU4LTgtOC04Wm0tNDAuNjIsNzMuMDZjLTEzLjQ4LDAtMjQuNC0xMC45Mi0yNC40LTI0LjQsMC0xMC45LDcuMTUtMjAuMTMsMTcuMDItMjMuMjZ2LjAyYy42Ni0uMjEsMS4zMi0uMzksMi0uNTVoMGMxLjczLS40LDMuNTMtLjYxLDUuMzgtLjYxLDEzLjQ4LDAsMjQuNCwxMC45MiwyNC40LDI0LjQsMCwyLjE5LS4yOSw0LjMyLS44NCw2LjM0aC0uMDJjLS4xOC42OC0uNCwxLjM1LS42NCwyaC4wM2MtMy40MSw5LjM3LTEyLjM5LDE2LjA2LTIyLjk0LDE2LjA2Wm00Ni42Mi0yNC4wNmMwLDMuMzEtMi42OSw2LTYsNmgtMTQuOTljLjUtMi4wMy43Ny00LjE1Ljc3LTYuMzQsMC0xNC41Ni0xMS44NC0yNi40LTI2LjQtMjYuNC0xLjg0LDAtMy42NC4xOS01LjM4LjU1di0xNC44MWMwLTMuMjcsMi42OS01LjkzLDYtNS45M2w0MC0uMDdjMy4zMSwwLDYsMi42OSw2LDZ2NDFaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNzIuOTMsNzEuOTRsLTguNDQtNS42LTEuMTEsMS42Nyw3LjE2LDQuNzUtNy4xNSw0LjU4LDEuMDgsMS42OCw4LjQ0LTUuNDFjLjI5LS4xOC40Ni0uNS40Ni0uODNzLS4xNy0uNjUtLjQ1LS44NFoiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjQ0LjQ2IiB5PSI3MS42OCIgd2lkdGg9IjIwLjMzIiBoZWlnaHQ9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMi42OCA5OC4wNykgcm90YXRlKC02OS4yOSkiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im00Ni4wNyw2Ni4zNWwtOC40NCw1LjZjLS4yOC4xOS0uNDUuNS0uNDUuODRzLjE4LjY1LjQ2LjgzbDguNDQsNS40MSwxLjA4LTEuNjgtNy4xNS00LjU4LDcuMTYtNC43NS0xLjExLTEuNjdaIi8+PC9zdmc+" alt="" className="img-responsive" />
                </div>
                <div className="contentText font_28 colorWhite">
                  <div className="contentTextTitle">
                    Ship and scale your SaaS product
                  </div>
                  <div className="contentTextDescription top-buffer30 font_16">
                    Build multi-tenant SaaS with subscription billing, role-based access, and an architecture that scales — using React, Node.js, Laravel, and AWS.
                  </div>
                </div>
              </div>
                  </div>
                </TabsContent>

                <TabsContent value="2">
                  <div className="contentItem itemAll item2 active">
              <div className="contentItemBox">
                <div className="contentIcon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGNsYXNzPSJibGluay1pY29uIiBkYXRhLWljb25uYW1lPSJGSUVMRF9TRVJWSUNFUyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48ZyBjbGFzcz0iYmxpbmstc2h1dCI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMjYuNzgsODcuODNjLS4wNiwwLS4xMSwwLS4xNywwLTEuMjktLjA2LTIuMzctLjgxLTIuOTQtMS41bC43Ny0uNjRjLjQyLjUsMS4yNSwxLjEsMi4yMiwxLjE0Ljg3LjA0LDEuNzMtLjM2LDIuNTQtMS4xOGwuNzEuNzFjLS45OC45OC0yLjAzLDEuNDctMy4xMywxLjQ3WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTQwLjc4LDg3LjgzYy0uMDYsMC0uMTEsMC0uMTcsMC0xLjI5LS4wNi0yLjM3LS44MS0yLjk0LTEuNWwuNzctLjY0Yy40Mi41LDEuMjUsMS4xLDIuMjIsMS4xNC44OC4wNCwxLjczLS4zNiwyLjU0LTEuMThsLjcxLjcxYy0uOTguOTgtMi4wMywxLjQ3LTMuMTMsMS40N1oiLz48L2c+PGcgY2xhc3M9ImJsaW5rLW9wZW4iPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMjYuODEiIGN5PSI4NiIgcj0iNCIvPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iNDAuODEiIGN5PSI4NiIgcj0iNCIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im00OC44Myw3NkgxNi44M2MtNC4wOCwwLTcuNDUsMy4wNi03LjkzLDcuMDJ2OC45OGgxLjkzdi04YzAtMy4zMSwyLjY5LTYsNi02aDMyYzMuMzEsMCw2LDIuNjksNiw2djhoMS45M3YtOC45OGMtLjQ5LTMuOTUtMy44NS03LjAyLTcuOTMtNy4wMloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0xMDIuODksMzZjLTkuOTUsMC0xOCw4LjIzLTE4LDE4LjM3LDAsMTMuMzEsMTMuNjQsMzIuOCwxNy4xNywzNy4yMi4yMi4yNy41Mi40LjgzLjRzLjYxLS4xMy44My0uNGMzLjUzLTQuNDIsMTcuMTctMjMuOTIsMTcuMTctMzcuMjIsMC0xMC4xNC04LjA1LTE4LjM3LTE4LTE4LjM3Wm0wLDUzLjRjLTQuMzMtNS43My0xNi0yMy4yOS0xNi0zNS4wMywwLTkuMDMsNy4xOC0xNi4zNywxNi0xNi4zN3MxNiw3LjM1LDE2LDE2LjM3YzAsMTEuNzQtMTEuNjcsMjkuMjktMTYsMzUuMDNaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJtMTAyLjg5LDQxLjQyYy02Ljk4LDAtMTIuNjUsNS42Ni0xMi42NSwxMi42NXM1LjY2LDEyLjY1LDEyLjY1LDEyLjY1LDEyLjY1LTUuNjYsMTIuNjUtMTIuNjUtNS42Ni0xMi42NS0xMi42NS0xMi42NVptOS4yOCw3LjQ1aC0yYy0uNDEtMS40NS0uOTktMi43Ni0xLjctMy44NSwxLjU0Ljk1LDIuODEsMi4yOCwzLjcsMy44NVptLTMuMjgsNS4xOWMwLDEuMDItLjA5LDItLjI1LDIuOTRoLTExLjVjLS4xNi0uOTQtLjI1LTEuOTItLjI1LTIuOTQsMC0xLjExLjEtMi4xOC4yOS0zLjE5aDExLjQyYy4xOSwxLjAxLjI5LDIuMDkuMjksMy4xOVptLTYtMTAuNjVjMi4yLDAsNC4xNiwyLjIzLDUuMjEsNS40NWgtMTAuNDFjMS4wNC0zLjIyLDMuMDEtNS40NSw1LjIxLTUuNDVabS01LjU4LDEuNmMtLjcxLDEuMS0xLjI5LDIuNC0xLjcsMy44NWgtMmMuODktMS41OCwyLjE2LTIuOSwzLjctMy44NVptLTUuMDYsOS4wNWMwLTEuMTEuMTctMi4xOC40OS0zLjE5aDIuNDJjLS4xNywxLjAyLS4yNywyLjA5LS4yNywzLjE5LDAsMS4wMS4wOCwyLC4yMywyLjk0aC0yLjQ1Yy0uMjctLjk0LS40Mi0xLjkyLS40Mi0yLjk0Wm0xLjEzLDQuNzVoMi4xYy40MiwxLjYzLDEuMDQsMy4wOSwxLjgzLDQuMy0xLjY4LTEuMDQtMy4wNC0yLjUzLTMuOTMtNC4zWm05LjUxLDUuOWMtMi4zLDAtNC4zNC0yLjQ0LTUuMzQtNS45aDEwLjY4Yy0xLDMuNDYtMy4wNCw1LjktNS4zNCw1LjlabTUuNTgtMS42Yy43OC0xLjIxLDEuNDEtMi42NywxLjgzLTQuM2gyLjFjLS44OSwxLjc3LTIuMjUsMy4yNi0zLjkzLDQuM1ptMi4xOS02LjFjLjE0LS45NS4yMy0xLjkzLjIzLTIuOTQsMC0xLjEtLjEtMi4xNy0uMjctMy4xOWgyLjQyYy4zMiwxLjAxLjQ5LDIuMDguNDksMy4xOSwwLDEuMDItLjE1LDIuMDEtLjQyLDIuOTRoLTIuNDVaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNjAuNDksNDguMDZjLTMuMzEsMC02LDIuNjktNiw2czIuNjksNiw2LDYsNi0yLjY5LDYtNi0yLjY5LTYtNi02Wm0wLDEwYy0yLjIxLDAtNC0xLjc5LTQtNHMxLjc5LTQsNC00LDQsMS43OSw0LDQtMS43OSw0LTQsNFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im03Ni42OCw1MC4wNmgtMi43OGMtLjI4LS45Mi0uNjQtMS44Mi0xLjEtMi42NWwxLjk0LTEuOTRjLjM1LS4zNC41NC0uOC41NS0xLjI5LDAtLjQ5LS4xOS0uOTUtLjUzLTEuMjlsLTMuMDktMy4wOWMtLjM0LS4zNC0uNzktLjUzLTEuMjgtLjUzLS40NCwwLS45NC4xOS0xLjI5LjUzbC0xLjk1LDEuOTZjLS44NC0uNDUtMS43My0uODItMi42Ni0xLjF2LTIuNzVjMC0uNDktLjE5LS45NS0uNTMtMS4zLS4zNC0uMzUtLjgtLjU0LTEuMjktLjU0aC00LjM3Yy0xLDAtMS44MS44MS0xLjgxLDEuODF2Mi43N2MtLjkyLjI4LTEuODIuNjQtMi42NSwxLjFsLTEuOTQtMS45NGMtLjM0LS4zNS0uOC0uNTQtMS4yOS0uNTVoMGMtLjQ4LDAtLjk0LjE5LTEuMjguNTNsLTMuMDksMy4wOWMtLjcxLjcxLS43MSwxLjg1LDAsMi41NmwxLjk2LDEuOTVjLS40NS44NC0uODIsMS43My0xLjEsMi42NmgtMi43NWMtLjQ2LDAtLjk1LjE5LTEuMy41My0uMzUuMzQtLjU0LjgtLjU0LDEuMjl2NC4zN2MwLDEsLjgxLDEuODEsMS44MSwxLjgxaDIuNzhjLjI4LjkyLjY0LDEuODIsMS4xLDIuNjVsLTEuOTQsMS45NGMtLjM1LjM0LS41NC44LS41NSwxLjI5LDAsLjQ5LjE5Ljk1LjUzLDEuMjlsMy4wOSwzLjA5Yy4zNC4zNC43OS41MywxLjI4LjUzLDAsMCwwLDAsMCwwLC40OCwwLC45NC0uMTksMS4yOC0uNTNsMS45NS0xLjk2Yy44NC40NSwxLjczLjgyLDIuNjYsMS4xdjIuNzVjMCwuNDkuMTkuOTUuNTMsMS4zLjM0LjM1LjguNTQsMS4yOS41NGg0LjM3YzEsMCwxLjgxLS44MSwxLjgxLTEuODF2LTIuNzhjLjkyLS4yOCwxLjgyLS42NCwyLjY2LTEuMWwxLjk1LDEuOTRjLjM0LjM1LjguNTQsMS4yOS41NWgwYy40OCwwLC45NC0uMTksMS4yOC0uNTNsMy4wOS0zLjA5Yy43MS0uNzEuNzEtMS44NiwwLTIuNTZsLTEuOTYtMS45NWMuNDUtLjg0LjgyLTEuNzMsMS4xLTIuNjZoMi43NWMuNDksMCwuOTUtLjE5LDEuMy0uNTMuMzUtLjM0LjU0LS44LjU0LTEuMjl2LTQuMzdjMC0xLS44MS0xLjgxLTEuODEtMS44MVptLTMwLjAzLDZoLTIuMTZzMC0zLjk5LDAtMy45OWgyLjE2Yy0uMDkuNjUtLjE2LDEuMzItLjE2LDJzLjA2LDEuMzQuMTYsMlptMTUuODQtMTh2Mi4xNmMtLjY1LS4wOS0xLjMyLS4xNi0yLS4xNnMtMS4zNC4wNi0yLC4xNnYtMi4xNnMzLjk5LDAsMy45OSwwWm0tMTQuNzMsNi4xbDIuODMtMi44MywxLjUzLDEuNTJjLTEuMDcuOC0yLjAyLDEuNzUtMi44MywyLjgzbC0xLjUzLTEuNTJabTIuODMsMjIuNjNsLTIuODMtMi44MywxLjUyLTEuNTNjLjgsMS4wNywxLjc1LDIuMDIsMi44MywyLjgzbC0xLjUyLDEuNTNabTcuOSwzLjI3di0yLjE2Yy42NS4wOSwxLjMyLjE2LDIsLjE2czEuMzQtLjA2LDItLjE2djIuMTZzLTMuOTksMC0zLjk5LDBabTItNGMtNi42MiwwLTEyLTUuMzgtMTItMTJzNS4zOC0xMiwxMi0xMiwxMiw1LjM4LDEyLDEyLTUuMzgsMTItMTIsMTJabTEyLjczLTIuMWwtMi44MywyLjgzLTEuNTMtMS41MmMxLjA3LS44LDIuMDItMS43NSwyLjgzLTIuODNsMS41MywxLjUyWm0tMS41My0xOC4yN2MtLjgtMS4wNy0xLjc1LTIuMDItMi44My0yLjgzbDEuNTItMS41MywyLjgzLDIuODMtMS41MiwxLjUzWm00LjgsMTAuMzdoLTIuMTZjLjA5LS42NS4xNi0xLjMyLjE2LTJzLS4wNi0xLjM0LS4xNi0yaDIuMTZzMCwzLjk5LDAsMy45OVoiLz48L3N2Zz4=" alt="" className="img-responsive" />
                </div>
                <div className="contentText font_28 colorWhite">
                  <div className="contentTextTitle">
                    Launch faster as a startup
                  </div>
                  <div className="contentTextDescription top-buffer30 font_16">
                    Get from idea to a tested MVP in weeks, with senior engineers who choose the simplest architecture that fits your stage and budget.
                  </div>
                </div>
              </div>
                  </div>
                </TabsContent>

                <TabsContent value="3">
                  <div className="contentItem itemAll item3 active">
              <div className="contentItemBox">
                <div className="contentIcon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGNsYXNzPSJibGluay1pY29uIiBkYXRhLWljb25uYW1lPSJPVEhFUl9QT0xDSUNJRVMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNjkuNSw2My45NGMtMy45LDAtNy4wNiwzLjE2LTcuMDYsNy4wNnMzLjE2LDcuMDYsNy4wNiw3LjA2LDcuMDYtMy4xNiw3LjA2LTcuMDYtMy4xNi03LjA2LTcuMDYtNy4wNlptMCwxMi4xMmMtMi43OSwwLTUuMDYtMi4yNy01LjA2LTUuMDZzMi4yNy01LjA2LDUuMDYtNS4wNiw1LjA2LDIuMjcsNS4wNiw1LjA2LTIuMjcsNS4wNi01LjA2LDUuMDZaIi8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSI5OC41IiB5PSI4NCIgd2lkdGg9IjgiIGhlaWdodD0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iOTguNSIgeT0iNzgiIHdpZHRoPSI4IiBoZWlnaHQ9IjIiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9Ijg0LjUiIHk9IjU0IiB3aWR0aD0iMjIiIGhlaWdodD0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iOTAuNSIgeT0iNjYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIyIi8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSI5OC41IiB5PSI2MCIgd2lkdGg9IjgiIGhlaWdodD0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iOTguNSIgeT0iNDgiIHdpZHRoPSI4IiBoZWlnaHQ9IjIiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9Ijc0LjUiIHk9IjQ4IiB3aWR0aD0iMjAiIGhlaWdodD0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iOTguNSIgeT0iNDIiIHdpZHRoPSI4IiBoZWlnaHQ9IjIiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9Ijc0LjUiIHk9IjQyIiB3aWR0aD0iMjAiIGhlaWdodD0iMiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTExMi41LDg0di00My41YzAtMi40OC0yLjAyLTQuNS00LjUtNC41aC00Mi45OWMtMi40OSwwLTQuNTEsMi4wMy00LjUxLDQuNTJ2My40OGg4djZoLTEuNThjLTEuMDgsMC0xLjk2Ljg4LTEuOTYsMS45NXYzLjIyYy0xLjIxLjM1LTIuMzcuODItMy40NiwxLjQzbC0yLjI2LTIuMjVjLS4zNy0uMzgtLjg3LS41OS0xLjM5LS41OS0uNTQtLjAyLTEuMDIuMi0xLjM5LjU3bC0zLjY0LDMuNjRjLS4zNy4zNy0uNTcuODYtLjU4LDEuMzgsMCwuNTIuMiwxLjAyLjU3LDEuMzlsMi4yOCwyLjI3Yy0uNiwxLjA4LTEuMDgsMi4yNS0xLjQzLDMuNDdoLTMuMTljLS41LjAxLTEuMDMuMi0xLjQuNTgtLjM3LjM3LS41OC44Ni0uNTgsMS4zOXY1LjE0YzAsMS4wOC44OCwxLjk2LDEuOTUsMS45NmgzLjIyYy4zNSwxLjIxLjgyLDIuMzcsMS40MywzLjQ2bC0yLjI1LDIuMjZjLS4zOC4zNy0uNTkuODctLjU5LDEuMzksMCwuNTMuMiwxLjAyLjU3LDEuMzlsMy42NCwzLjY0Yy4zNy4zNy44Ni41NywxLjM4LjU4aDBjLjUyLDAsMS4wMS0uMiwxLjM4LS41N2wyLjI3LTIuMjhjMS4wOS42LDIuMjUsMS4wOCwzLjQ3LDEuNDN2My4xOWMwLC41My4yLDEuMDMuNTgsMS40LjM3LjM3Ljg2LjU4LDEuMzkuNThoNS4xNWMuMTQsMCwuMjgtLjAyLjQxLS4wNS4xNy4wMi4zNC4wNS41MS4wNWg0Mi4wM3MwLDAsLjAxLDBoMHMuOTIsMCwuOTIsMGMyLjUsMCw0LjUzLTIuMDMsNC41My00LjUydi0zLjQ4cy03Ljk5LDAtNy45OSwwWm0tNjItMTAuNDJsLS4wMy01LjFoMi43N2MtLjEzLjgyLS4yMSwxLjY2LS4yMSwyLjUycy4wOSwxLjcxLjIyLDIuNTRsLTIuNzQuMDRabTEyLTMxLjU4di0xLjQ4YzAtMS4zOSwxLjEzLTIuNTIsMi41MS0yLjUyaC45N2MxLjM5LDAsMi41MiwxLjEzLDIuNTIsMi41MnYxLjQ4aC02Wm05LjUyLDkuOTh2Mi43N2MtLjgyLS4xMy0xLjY2LS4yMS0yLjUyLS4yMXMtMS43MS4wOS0yLjU0LjIybC0uMDQtMi43NSw1LjEtLjAyWm0tMTcuNzgsNy40MWwzLjU5LTMuNjIsMS45NiwxLjk1Yy0xLjM3LDEtMi41OCwyLjIxLTMuNTgsMy41OWwtMS45Ny0xLjkxWm0zLjY0LDI2Ljg3bC0zLjYyLTMuNTksMS45NS0xLjk2YzEsMS4zNywyLjIxLDIuNTgsMy41OSwzLjU4bC0xLjkxLDEuOTdabTkuMDksMy43N3YtMi43N2MuODIuMTMsMS42Ni4yMSwyLjUyLjIxczEuNzEtLjA5LDIuNTQtLjIybC4wNCwyLjc1LTUuMS4wMlptMi41Mi00LjU1Yy03Ljk4LDAtMTQuNDctNi40OS0xNC40Ny0xNC40N3M2LjQ5LTE0LjQ3LDE0LjQ3LTE0LjQ3LDE0LjQ3LDYuNDksMTQuNDcsMTQuNDctNi40OSwxNC40Ny0xNC40NywxNC40N1ptOS43LTI3Ljc2bDEuOTEtMS45NywzLjYyLDMuNTktMS45NSwxLjk2Yy0xLTEuMzctMi4yMS0yLjU4LTMuNTktMy41OFptNS41NiwyNC45bC0zLjU5LDMuNjItMS45Ni0xLjk1YzEuMzctMSwyLjU4LTIuMjEsMy41OC0zLjU5bDEuOTcsMS45MVptLTEwLjcyLDcuMzl2LTMuMTdjLjc3LS4yMiwxLjUyLS41LDIuMjQtLjgzaDEuODJsMS42NSwxLjY1Yy4zNy4zOC44Ny41OSwxLjQuNTloMGMuNTIsMCwxLjAxLS4yLDEuMzgtLjU3bDEuNjctMS42N2gxMC4zdi0yaC04LjMxYy4zNS0uMzcuNTUtLjg0LjU1LTEuMzUsMC0uNTItLjItMS4wMi0uNTctMS4zOWwtMS4yNy0xLjI2aDkuNnYtMmgtMTAuMTFjLjM3LS43OS42OS0xLjYxLjkzLTIuNDdoMy4xOWMuNTYtLjAxLDEuMDMtLjIsMS40LS41OC4yNy0uMjcuNDUtLjYuNTMtLjk2aDE2LjA1di0yaC0xNnYtMy41OGMwLTEuMDgtLjg4LTEuOTYtMS45NS0xLjk2aC0zLjIyYy0uMzUtMS4yMS0uODItMi4zNy0xLjQzLTMuNDZsMS4wMS0xLjAxaDkuNnYtMmgtNy44OGMuMDctLjIuMTItLjQyLjEyLS42NCwwLS41My0uMi0xLjAyLS41Ny0xLjM5bC0zLjY0LTMuNjRjLS4zNy0uMzctLjg2LS41Ny0xLjM4LS41OGgwYy0uNTIsMC0xLjAxLjItMS4zOC41N2wtMi4yNywyLjI4Yy0xLjA5LS42LTIuMjUtMS4wOC0zLjQ3LTEuNDN2LTMuMTljMC0uNTMtLjItMS4wMy0uNTgtMS40LS4zNy0uMzctLjg2LS41OC0xLjM5LS41OGgtMS41N3YtOS40OGMwLS45My0uMjgtMS44LS43Ny0yLjUyaDM4LjI3YzEuMzgsMCwyLjUsMS4xMiwyLjUsMi41djQ2Ljk3aC4wMmMwLC45NC4yOSwxLjguNzcsMi41M2gtMzcuMjZabTExLjcyLTIxLjU0bDIuNzQtLjA0LjAzLDUuMWgtMi43N2MuMTMtLjgyLjIxLTEuNjYuMjEtMi41MnMtLjA5LTEuNzEtLjIyLTIuNTRabTMyLjc0LDE5LjAxYzAsMS4zOS0xLjEzLDIuNTMtMi41MywyLjUzaC0uOTNjLTEuMzksMC0yLjUxLTEuMTQtMi41MS0yLjUzaC0uMDJ2LTEuNDdoNnYxLjQ3WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTIyLjUsMzZoLTE0djJoMTRjMy4zMSwwLDYsMi42OSw2LDZ2NDBjMCwzLjMxLTIuNjksNi02LDZoLTE0djJoMTRjNC40MiwwLDgtMy41OCw4LTh2LTQwYzAtNC40Mi0zLjU4LTgtOC04WiIvPjxnIGNsYXNzPSJibGluay1zaHV0Ij48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0yMC4xNSw0OS4xYy0xLjAzLTEuMDMtMS41Mi0yLjE0LTEuNDctMy4zLjA2LTEuMjkuODEtMi4zNywxLjUtMi45NGwuNjQuNzdjLS41LjQyLTEuMSwxLjI1LTEuMTQsMi4yMi0uMDQuODcuMzYsMS43MywxLjE4LDIuNTVsLS43MS43MVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0yMC4xNSw2My4xYy0xLjAzLTEuMDMtMS41Mi0yLjE0LTEuNDctMy4zLjA2LTEuMjkuODEtMi4zNywxLjUtMi45NGwuNjQuNzdjLS41LjQyLTEuMSwxLjI1LTEuMTQsMi4yMi0uMDQuODcuMzYsMS43MywxLjE4LDIuNTVsLS43MS43MVoiLz48L2c+PGcgY2xhc3M9ImJsaW5rLW9wZW4iPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iMjAuNSIgY3k9IjQ2IiByPSI0Ii8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSIyMC41IiBjeT0iNjAiIHI9IjQiLz48L2c+PC9zdmc+" alt="" className="img-responsive" />
                </div>
                <div className="contentText font_28 colorWhite">
                  <div className="contentTextTitle">
                    Engineer high-traffic e-commerce
                  </div>
                  <div className="contentTextDescription top-buffer30 font_16">
                    Headless storefronts on Next.js with edge caching, performance tuning, and integrations that hold up through peak seasonal traffic.
                  </div>
                </div>
              </div>
                  </div>
                </TabsContent>

                <TabsContent value="4">
                  <div className="contentItem itemAll item4 active">
              <div className="contentItemBox">
                <div className="contentIcon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGNsYXNzPSJibGluay1pY29uIiBkYXRhLWljb25uYW1lPSJERVNLVE9QX1BDIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7c3Ryb2tlLXdpZHRoOjBweDt9PC9zdHlsZT48L2RlZnM+PGcgY2xhc3M9ImJsaW5rLXNodXQiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTU4Ljk3LDUzLjgzYy0uMDYsMC0uMTEsMC0uMTcsMC0xLjI5LS4wNi0yLjM3LS44MS0yLjk0LTEuNWwuNzctLjY0Yy40NC41MiwxLjI1LDEuMSwyLjIyLDEuMTQuODcuMDQsMS43My0uMzYsMi41NS0xLjE4bC43MS43MWMtLjk4Ljk4LTIuMDMsMS40Ny0zLjEzLDEuNDdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNzIuOTcsNTMuODNjLS4wNiwwLS4xMSwwLS4xNywwLTEuMjktLjA2LTIuMzctLjgxLTIuOTQtMS41bC43Ny0uNjRjLjQ0LjUyLDEuMjUsMS4xLDIuMjIsMS4xNC44Ny4wNCwxLjczLS4zNiwyLjU1LTEuMThsLjcxLjcxYy0uOTguOTgtMi4wMywxLjQ3LTMuMTMsMS40N1oiLz48L2c+PGcgY2xhc3M9ImJsaW5rLW9wZW4iPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iNTkiIGN5PSI1MiIgcj0iNCIvPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iNzMiIGN5PSI1MiIgcj0iNCIvPjwvZz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im05NiwyNEgzMmMtNC40MiwwLTgsMy41OC04LDh2NDBjMCw0LjQyLDMuNTgsOCw4LDhoMjAuMzhsLTMsNmgtNS4zOGMtLjU1LDAtMSwuNDUtMSwxcy40NSwxLDEsMWg0MGMuNTUsMCwxLS40NSwxLTFzLS40NS0xLTEtMWgtNC4zOGwtMy02aDE5LjM4YzQuNDIsMCw4LTMuNTgsOC04di00MGMwLTQuNDItMy41OC04LTgtOFptLTE4LjYyLDYyaC0yNS43NmwzLTZoMTkuNzZsMyw2Wm0yNC42Mi0xNGMwLDMuMzEtMi42OSw2LTYsNkgzMmMtMy4zMSwwLTYtMi42OS02LTZ2LTZoNzZ2NlptMC04SDI2di0zMmMwLTMuMzEsMi42OS02LDYtNmg2NGMzLjMxLDAsNiwyLjY5LDYsNnYzMloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im02NCw3NWMxLjY2LDAsMy0xLjM0LDMtM3MtMS4zNC0zLTMtMy0zLDEuMzQtMywzLDEuMzQsMywzLDNabTAtNGMuNTUsMCwxLC40NSwxLDFzLS40NSwxLTEsMS0xLS40NS0xLTEsLjQ1LTEsMS0xWiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMjkiIHk9Ijk4IiB3aWR0aD0iNCIgaGVpZ2h0PSIyIi8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSIzNSIgeT0iOTgiIHdpZHRoPSI0IiBoZWlnaHQ9IjIiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjQxIiB5PSI5OCIgd2lkdGg9IjQiIGhlaWdodD0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iNDciIHk9Ijk4IiB3aWR0aD0iNCIgaGVpZ2h0PSIyIi8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSI1MyIgeT0iOTgiIHdpZHRoPSI0IiBoZWlnaHQ9IjIiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjU5IiB5PSI5OCIgd2lkdGg9IjQiIGhlaWdodD0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iNjUiIHk9Ijk4IiB3aWR0aD0iNCIgaGVpZ2h0PSIyIi8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSI3MSIgeT0iOTgiIHdpZHRoPSI0IiBoZWlnaHQ9IjIiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9Ijc3IiB5PSI5OCIgd2lkdGg9IjQiIGhlaWdodD0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iODMiIHk9Ijk4IiB3aWR0aD0iNCIgaGVpZ2h0PSIyIi8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSI4OSIgeT0iOTgiIHdpZHRoPSI0IiBoZWlnaHQ9IjIiLz48cmVjdCBjbGFzcz0iY2xzLTEiIHg9Ijk1IiB5PSI5OCIgd2lkdGg9IjQiIGhlaWdodD0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMjkiIHk9IjEwMiIgd2lkdGg9IjQiIGhlaWdodD0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMzUiIHk9IjEwMiIgd2lkdGg9IjQiIGhlaWdodD0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iNDEiIHk9IjEwMiIgd2lkdGg9IjQiIGhlaWdodD0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iNDciIHk9IjEwMiIgd2lkdGg9IjQiIGhlaWdodD0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iNTMiIHk9IjEwMiIgd2lkdGg9IjQiIGhlaWdodD0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iNTkiIHk9IjEwMiIgd2lkdGg9IjQiIGhlaWdodD0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iNjUiIHk9IjEwMiIgd2lkdGg9IjQiIGhlaWdodD0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iNzEiIHk9IjEwMiIgd2lkdGg9IjQiIGhlaWdodD0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iNzciIHk9IjEwMiIgd2lkdGg9IjQiIGhlaWdodD0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iODMiIHk9IjEwMiIgd2lkdGg9IjQiIGhlaWdodD0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iODkiIHk9IjEwMiIgd2lkdGg9IjQiIGhlaWdodD0iMiIvPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iOTUiIHk9IjEwMiIgd2lkdGg9IjQiIGhlaWdodD0iMiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTEwMCw5NEgyOGMtMi4yMSwwLTQsMS43OS00LDR2Nmgydi02YzAtMS4xLjktMiwyLTJoNzJjMS4xLDAsMiwuOSwyLDJ2Nmgydi02YzAtMi4yMS0xLjc5LTQtNC00WiIvPjwvc3ZnPg==" alt="" className="img-responsive" />
                </div>
                <div className="contentText font_28 colorWhite">
                  <div className="contentTextTitle">
                    Modernize enterprise systems
                  </div>
                  <div className="contentTextDescription top-buffer30 font_16">
                    Migrate legacy platforms to cloud-native architecture with infrastructure as code, observability, and zero-downtime releases.
                  </div>
                </div>
              </div>
                  </div>
                </TabsContent>

                <TabsContent value="5">
                  <div className="contentItem itemAll item5 active">
              <div className="contentItemBox">
                <div className="contentIcon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGNsYXNzPSJibGluay1pY29uIiBkYXRhLWljb25uYW1lPSJIQVJEV0FSRV9IRUFMVEgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIHZpZXdCb3g9IjAgMCAxMjggMTI4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PGcgY2xhc3M9ImJsaW5rLXNodXQiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTcxLjg3LDM5Ljg1Yy0uMDYsMC0uMTEsMC0uMTcsMC0xLjI5LS4wNi0yLjM3LS44MS0yLjk0LTEuNWwuNzctLjY0Yy40Mi41LDEuMjUsMS4xLDIuMjIsMS4xNC44OC4wNCwxLjczLS4zNiwyLjU0LTEuMThsLjcxLjcxYy0uOTguOTgtMi4wMywxLjQ3LTMuMTMsMS40N1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im04NS44NywzOS44NWMtLjA2LDAtLjExLDAtLjE3LDAtMS4yOS0uMDYtMi4zNy0uODEtMi45NC0xLjVsLjc3LS42NGMuNDIuNSwxLjI1LDEuMSwyLjIyLDEuMTQuODguMDQsMS43My0uMzYsMi41NC0xLjE4bC43MS43MWMtLjk4Ljk4LTIuMDMsMS40Ny0zLjEzLDEuNDdaIi8+PC9nPjxnIGNsYXNzPSJibGluay1vcGVuIj48Y2lyY2xlIGNsYXNzPSJjbHMtMSIgY3g9IjcxLjkiIGN5PSIzOC4wMiIgcj0iNCIvPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iODUuOSIgY3k9IjM4LjAyIiByPSI0Ii8+PC9nPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0ibTk1LjksMjQuMDJsLTQwLC4wN2MtNC40MiwwLTgsMy41MS04LDcuOTN2MTUuMzJjLTEwLjk3LDMuMi0xOS4wMiwxMy4zNS0xOS4wMiwyNS4zNCwwLDYuOTIsMi42OCwxMy4yMiw3LjA1LDE3Ljk0bC0xMi4wNSwxMi4wNWMtLjM5LjM5LS4zOSwxLjAyLDAsMS40MS4yLjE5LjQ1LjI5LjcxLjI5cy41MS0uMS43MS0uMjlsMTIuMDUtMTIuMDVjNC43MSw0LjM3LDExLjAyLDcuMDUsMTcuOTQsNy4wNSwxMS42NCwwLDIxLjU0LTcuNTgsMjUuMDQtMTguMDZoMTUuNTdjNC40MiwwLDgtMy41OCw4LTh2LTQxYzAtNC40Mi0zLjU4LTgtOC04Wm0tNTMuOTgsMjguOTlsLjA3LjA4djIuMTljLS45Ni0uMTYtMS45Ni0uMjctMi45Ny0uMjctLjE5LDAtLjM4LjAyLS41Ny4wMy43Ni0uNzMsMS41Ny0xLjQxLDIuNDItMi4wM2gxLjA3Wm0tNS41Myw0LjIzYy44NS0uMTUsMS43Mi0uMjMsMi42Mi0uMjMsOC44MiwwLDE2LDcuMTgsMTYsMTZzLTcuMTgsMTYtMTYsMTZjLS42NywwLTEuMzMtLjA2LTEuOTgtLjE0LTMuODItNC4zMS02LjE1LTkuOTctNi4xNS0xNi4xOSwwLTUuODYsMi4wNy0xMS4yNCw1LjUxLTE1LjQ0Wm0xMy4wNiwxLjEybDEuNjMtMS41Nyw0LjEzLDQuMTMuNzEtLjcxLS43Mi44MS0xLjU0LDEuNTVjLTEuMTYtMS42My0yLjU4LTMuMDUtNC4yMS00LjIxWm0yLjM1LDMxLjU1bC0uODEtLjcyLTEuNTUtMS41NGMxLjYzLTEuMTYsMy4wNS0yLjU4LDQuMjEtNC4yMWwxLjU3LDEuNjMtNC4xMyw0LjEzLjcxLjcxWm0tOS44NiwzLjA5aC0uMTZjLS45Mi0uNjEtMS43OS0xLjI4LTIuNjEtMi4wMS45Ni0uMDEsMS44OS0uMTEsMi44MS0uMjZsLS4wNCwyLjI3Wm0xMy4zNCw0LjA3Yy00LjIyLDAtOC4yLTEuMDctMTEuNjYtMi45Ni4yNC0uMzQuMzktLjc0LjM5LTEuMTh2LTIuNjRjMS4yOS0uMzgsMi41NC0uODksMy43MS0xLjUzbDEuODYsMS44NWMuMzkuNC45MS42MiwxLjQ2LjYyaC4wMWMuNTUsMCwxLjA3LS4yMSwxLjQ2LS42bDQuMTMtNC4xM2MuMzktLjM5LjYxLS45MS42MS0xLjQ2cy0uMjEtMS4wNy0uNjEtMS40NmwtMS44Ny0xLjg1Yy42NS0xLjE3LDEuMTYtMi40MSwxLjUzLTMuNzJoMi42M3MuMDEsMCwuMDIsMGMuNTUsMCwxLjA2LS4yMSwxLjQ1LS42LjM5LS4zOS42MS0uOTEuNjEtMS40N3YtNS44NGMwLTEuMTQtLjkzLTIuMDctMi4wNy0yLjA3aC0yLjY0Yy0uMzgtMS4yOS0uODktMi41NC0xLjUzLTMuNzFsMS44NS0xLjg2Yy40LS4zOS42Mi0uOTEuNjItMS40NiwwLS41Ni0uMjEtMS4wOC0uNjEtMS40N2wtNC4xMy00LjEzYy0uNzgtLjc4LTIuMTQtLjc4LTIuOTMsMGwtMS44NSwxLjg3Yy0xLjE3LS42NS0yLjQxLTEuMTYtMy43Mi0xLjUzdi0yLjYzYzAtLjU2LS4yMi0xLjA4LS42MS0xLjQ3LS4wNS0uMDUtLjEyLS4wOS0uMTgtLjE0LDEuNDgtLjg0LDMuMDUtMS41NCw0LjY5LTIuMDZ2LjAyYy42Ni0uMjEsMS4zMi0uMzksMi0uNTVoMGMxLjczLS40LDMuNTMtLjYxLDUuMzgtLjYxLDMuNzksMCw3LjM5Ljg3LDEwLjU5LDIuNDFsLTEuMTQsMS4xNGMtLjcxLjcxLS43MSwxLjg1LDAsMi41NmwxLjk2LDEuOTVjLS40NS44NC0uODIsMS43My0xLjEsMi42NmgtMi43NXMtLjAxLDAtLjAyLDBjLS40OCwwLS45NC4xOS0xLjI4LjUzLS4zNS4zNC0uNTQuOC0uNTQsMS4yOXY0LjM3YzAsMSwuODEsMS44MSwxLjgxLDEuODFoMi43OGMuMjguOTIuNjQsMS44MiwxLjEsMi42NWwtMS45NCwxLjk1Yy0uMzUuMzQtLjU0LjgtLjU1LDEuMjksMCwuNDkuMTkuOTUuNTMsMS4yOWwzLjA5LDMuMDljLjM0LjM0Ljc5LjUzLDEuMjguNTNoMGMuNDgsMCwuOTQtLjE5LDEuMjgtLjUzbDEuOTUtMS45NmMuODQuNDUsMS43My44MiwyLjY2LDEuMXYyLjc1YzAsLjQ5LjE5Ljk1LjUzLDEuMy4zNC4zNS44LjU0LDEuMjkuNTRoMS4zN3MwLDAsMCwuMDFoLjAzYy0zLjQxLDkuMzctMTIuMzksMTYuMDYtMjIuOTQsMTYuMDZabTEuNDYtMjcuMDVsMi4yNy4wNHY1Ljg0bC0uMDguMDdoLTIuMTljLjE2LS45Ni4yNy0xLjk2LjI3LTIuOTdzLS4xLTItLjI3LTIuOTdabTIyLjExLDguOTdoLTEuODR2LTIuMTZjLjY1LjA5LDEuMzEuMTYsMiwuMTYuMSwwLC4xOS0uMDEuMjktLjAxLS4xMi42OC0uMjcsMS4zNS0uNDUsMi4wMVptLTIuNjMtMTguODVjMS4yNiwyLjEsMi4yMSw0LjQxLDIuNzksNi44NSwwLDAsMCwwLDAsMC0yLjIxLDAtNC0xLjc5LTQtNCwwLTEuMTIuNDctMi4xMywxLjIxLTIuODVabS0zLjIxLDIuODVjMCwzLjMxLDIuNjksNiw2LDYsLjEzLDAsLjI2LS4wMS40LS4wMi4xOCwxLjIuMjgsMi40NC4yOCwzLjY5LDAsLjc3LS4wNCwxLjU0LS4xMSwyLjI5LS4xOSwwLS4zNy4wMy0uNTYuMDMtNi42MiwwLTEyLTUuMzgtMTItMTIsMC0zLjU2LDEuNTctNi43NCw0LjA0LTguOTQsMS41MiwxLjI5LDIuODgsMi43Niw0LjA1LDQuMzktMS4yOCwxLjEtMi4wOSwyLjczLTIuMDksNC41NVptLTIuMzgsMTEuMmwtMS41MiwxLjUzLTIuODMtMi44MywxLjUyLTEuNTNjLjgsMS4wNywxLjc1LDIuMDIsMi44MywyLjgzWm0tMi44Mi0xOS41OGwtMS41My0xLjUyLDEuNDMtMS40M2MuNjEuMzYsMS4yLjc1LDEuNzcsMS4xNi0uNi41NS0xLjE4LDEuMTMtMS42NywxLjc5Wm0tMi42NCwxMC4zN2gtMi4xNnMwLTMuOTksMC0zLjk5aDIuMTZjLS4wOS42NS0uMTYsMS4zMS0uMTYsMnMuMDYsMS4zNC4xNiwyWm0zNi43Myw4LjAyYzAsMy4zMS0yLjY5LDYtNiw2aC0xNC45OWMuNS0yLjAzLjc3LTQuMTUuNzctNi4zNCwwLTE0LjU2LTExLjg0LTI2LjQtMjYuNC0yNi40LTEuODQsMC0zLjY0LjE5LTUuMzguNTV2LTE0LjgxYzAtMy4yNywyLjY5LTUuOTMsNi01LjkzbDQwLS4wN2MzLjMxLDAsNiwyLjY5LDYsNnY0MVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im0zOS4wMSw4MS4wMWM0LjQyLDAsOC0zLjU4LDgtOHMtMy41OC04LTgtOC04LDMuNTgtOCw4LDMuNTgsOCw4LDhabTAtMTRjMy4zMSwwLDYsMi42OSw2LDZzLTIuNjksNi02LDYtNi0yLjY5LTYtNiwyLjY5LTYsNi02WiIvPjwvc3ZnPg==" alt="" className="img-responsive" />
                </div>
                <div className="contentText font_28 colorWhite">
                  <div className="contentTextTitle">
                    Turn AI ideas into products
                  </div>
                  <div className="contentTextDescription top-buffer30 font_16">
                    Integrate LLMs, automation, and intelligent workflows into your product through clean APIs, deployed on AWS with monitoring in place.
                  </div>
                </div>
              </div>
                  </div>
                </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}