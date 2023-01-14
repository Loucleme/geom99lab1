# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
[https://YourDirectionsApiURLGoesHere](http://jsonviewer.stack.hu/#http://www.google.com/maps/place/Ottawa,+ON/@44.2673762,-80.0066676,7z/data=!4m36!1m30!4m29!1m6!1m2!1s0x89d35054bb6a5a4b:0x37563636c082837!2sSt.+Catharines,+ON!2m2!1d-79.2468626!2d43.1593745!1m6!1m2!1s0x89d58c91b5103a57:0x5037b28c72318e0!2sPeterborough,+ON!2m2!1d-78.3199606!2d44.3047061!1m6!1m2!1s0x4ccd88b03bb2843b:0x4cc0b1932e63baf8!2sSmiths+Falls,+ON!2m2!1d-76.0216189!2d44.903748!1m6!1m2!1s0x4cce05b25f5113af:0x8a6a51e131dd15ed!2sOttawa,+ON!2m2!1d-75.6971931!2d45.4215296!3e0!3m4!1s0x4cce05b25f5113af:0x8a6a51e131dd15ed!8m2!3d45.4215296!4d-75.6971931 )
```


## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJS1pqu1RQ04kRNygIbGNjdQM",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJVzoQtZGM1YkR4Bgjxyh7AwU",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJO4SyO7CIzUwR-LpjLpOxwEw",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJDbdkHFQayUwR7-8fITgxTmU",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJd2iU34b_zUwRNFskkjD3byg",
         "types" : [ "political", "sublocality", "sublocality_level_1" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 45.565436,
               "lng" : -73.567166
            },
            "southwest" : {
               "lat" : 43.15913219999999,
               "lng" : -79.8330627
            }
         },
         "copyrights" : "Map data ©2023 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "253 km",
                  "value" : 252871
               },
               "duration" : {
                  "text" : "2 hours 25 mins",
                  "value" : 8719
               },
               "end_address" : "Peterborough, ON, Canada",
               "end_location" : {
                  "lat" : 44.3046747,
                  "lng" : -78.3199568
               },
               "start_address" : "St. Catharines, ON, Canada",
               "start_location" : {
                  "lat" : 43.1592032,
                  "lng" : -79.24653040000001
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "35 m",
                        "value" : 35
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 10
                     },
                     "end_location" : {
                        "lat" : 43.15945809999999,
                        "lng" : -79.2462834
                     },
                     "html_instructions" : "Head \u003cb\u003enortheast\u003c/b\u003e on \u003cb\u003eMarket St\u003c/b\u003e toward \u003cb\u003eJames St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_plfGxytbNs@q@"
                     },
                     "start_location" : {
                        "lat" : 43.1592032,
                        "lng" : -79.24653040000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 437
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 80
                     },
                     "end_location" : {
                        "lat" : 43.1618388,
                        "lng" : -79.25055789999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eJames St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "sqlfGfxtbNgBvCmC~Fm@pAkA~CWl@sA~C"
                     },
                     "start_location" : {
                        "lat" : 43.15945809999999,
                        "lng" : -79.2462834
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "29 m",
                        "value" : 29
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 11
                     },
                     "end_location" : {
                        "lat" : 43.1620941,
                        "lng" : -79.25059539999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLake St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "o`mfG~rubNMFc@?"
                     },
                     "start_location" : {
                        "lat" : 43.1618388,
                        "lng" : -79.25055789999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 891
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 109
                     },
                     "end_location" : {
                        "lat" : 43.1576838,
                        "lng" : -79.2594982
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at the 1st cross street onto \u003cb\u003eWelland Ave\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRegional Rd 77\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Regional Rd 77\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "abmfGfsubNdAvEZnA\\vA`@bB`@xATz@^bBPr@bArET|@@B\\tA@@Xn@d@~@p@fAFHf@n@LPDDHJv@|@r@v@VZDTTZHHn@v@LPTVj@l@"
                     },
                     "start_location" : {
                        "lat" : 43.1620941,
                        "lng" : -79.25059539999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.5 km",
                        "value" : 3532
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 142
                     },
                     "end_location" : {
                        "lat" : 43.1742174,
                        "lng" : -79.2847532
                     },
                     "html_instructions" : "Take the ramp onto \u003cb\u003eON-406 N\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "oflfGzjwbNDLDJDJ?@@D@D@F@D@H@N@L@bB?HDfC?@@`A@ZFtDLtD?@JP@`B@t@@z@@n@BpB?RBbB@~ABlC@lA?nA@tC@dA@~A@bBB`A@jB?LBhA?b@BrBBxA@zAB`B@vA@tA?r@?LAZAZ?ZCd@AT?DGv@AVAFCVGn@Ih@EVE\\Kh@I`@GXSz@ITAHOb@CHQf@O`@O^KVINQ^MVMTQZe@t@ORQVMNGHUVe@d@YXKFe@`@c@Zg@Zg@Vs@ZA@MDk@RUFWFQD]F]FI@o@Hi@D_@?q@@S?o@AUA}@Cw@E_@AwAGgBGwAI_@AKAcAC_@?_@AW@U?a@@G?[B[B[B]DMBg@HWFIB[JMBIDWHKDIBUHSJYNk@ZQJa@XSNe@^e@^e@\\u@n@k@b@A@KJ}@p@WR_@VQJGDKFSLe@VWJMFGDSFUHC@ODQFWFQDWFa@Fc@Fg@DU@E@O?o@BqABeCByAB"
                     },
                     "start_location" : {
                        "lat" : 43.1576838,
                        "lng" : -79.2594982
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "50.8 km",
                        "value" : 50773
                     },
                     "duration" : {
                        "text" : "28 mins",
                        "value" : 1668
                     },
                     "end_location" : {
                        "lat" : 43.3278855,
                        "lng" : -79.82556959999999
                     },
                     "html_instructions" : "Take the exit on the \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eQEW\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eQueen Elizabeth Way\u003c/b\u003e toward \u003cb\u003eToronto\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "{mofGth|bNsEJ_BDG?w@?G?A?I@K?U@k@@o@@w@Bi@Bg@FUD]J[JULE@ULQLMLOLGFQP]d@MRQXGNQ`@IRK\\K^ERGZEVG`@CTC\\AX?TATAb@?D@R?X@VBXBZD\\?BHh@Hj@^fCJ|@BLHh@F^Hn@DVF^Jr@@BD^D^DZB\\?@B^B^@\\@^?Z?\\?\\Ar@Al@C`ACfAC`ACz@Lj@ShFGrAEvAMnCItBMhDKdCI|BK`CInB?NEv@Aj@IvBGnAWlHI`BGrBIdBEfACr@Af@GjACn@KjC?DG`BANG|AEfACl@IbCM`DOnDKnCCx@G`BIzBE`BAXA~@GpD?RChDA`B@x@?^?nABbB@tCBdC@p@@nA?bA@l@BhDFtH@dAD`GBzA@~BBlC?l@@r@@tB@n@@hD@v@BlCDxDFrG@^?b@DjE@pBFpG@p@?bADpDF`H@~BBrADlFDfF@|AD~FBzA?d@DvF@jA@tABhB?p@DdEBdD@r@@x@BrCBtD@dAB`D?zA?P?rA?pACzAItDObEGbAIhAC\\C^Gl@AJKpAEd@E\\Iv@AFE`@Ij@Kv@Gj@U|AOx@a@`CQx@Ov@YtASx@Sx@[jASr@]hAENc@tAK^e@vAYbAM`@O`@g@`By@jCQh@ADQf@kAvD}@rCw@bCu@bCs@zBKZQn@a@rAGTK`@[lAAB[nAYlA[tAUfAAD[dBAFKh@EPEXOv@Mx@Ij@Mt@ANIh@MbAA@OrAADGf@MhAIr@I`ACTEh@Eb@WbECf@IrACd@Cx@GtAGlBCbACx@?VCzBAZ?`@Ax@?z@?x@?P@h@?x@@xA@x@?~@RlZLlP?J?hA@rA?bAAz@IlJSpQOhPk@bj@K~JC~BOfM?PAr@O|NYdXCtCQrOIrJCnBStQEhDAtACrB?DAtBCvBEnCE`ECtCCtBChC?FCvAA|ACtBAzAEpCA|@CpCC|AAtBCtACrCAzACzACrBC|B?l@C|AAzACvBCpBAx@ArACtAGlGGzFAZAbBu@rs@EfFa@h`@Aj@CrB?|@A\\EnEEpDEv@?DA|AIdIYbYG`FCpC?BE`EGjEA|AGdFI~HAlAAfA?RCnBAf@A`BCdB?^?DAfA?jB?rCB~T?vA?fC?vC@nB?`D@hB?lA?h@?nE?x@@|E?`D@fK@dE?jC?tB@tB?vB@hK?vD@xG?`CBnR@`G?\\?dF?|A?hA?bC?|@Ax@Az@An@Ah@Cx@Aj@G~AGfAIxAE|@Eh@?JGx@KlAInAKlAKnAI~@Gt@QhBEd@I~@Ej@SrBGr@OxAGf@UxBKbAEZSfBY~BMhAKx@UfB[|BSxAOhAM|@U|AQlAU|ASpAAB]xBGb@QjAKn@CNWdBW|AiApHo@`E]zBWbBe@xCmB~LwAhJ]|B]vB[pB[xBm@xDKn@Mz@Kr@UxAm@zDId@_@dCe@zCc@nCYlBg@dDId@O~@AHm@zDEZy@hFQfAiApHm@~DGZYfBU|AKl@Kt@c@bC_@bC?BO|@QjAO`A[lBUvAStAMv@SrAMx@[rBUrAa@nCSrAa@lCe@tCi@nDk@pDIf@{@tFWhBa@jCk@nDw@bFg@fDMx@SpAGZEZO|@EZSpAa@jC[pBMz@Kp@UtAE\\[rBSrAc@rCi@fD[pBw@dF}@bGUvA[nBi@jDm@`EmA|H{@xFe@|Ca@jCw@~Eg@dD?Ba@lCO|@Kl@Mx@Gb@s@vEg@dDs@rE_BjKo@bEKr@Kp@g@dDg@~CYhBAD_AhG[tBIh@c@rCI`@SvAaAlG_AhG[pBMr@QnAUrAStA?BQhAUvAIh@CN[pBUzACPSnAYfBKr@Kr@EVQjAOz@CLOfASnAIl@Mr@E\\EVYjBSrAIf@Mp@YnBQjAUzAIb@i@pDc@rCg@~CSnAOdAYlBW~ASrA[pBYlBOz@Mx@QjAMz@Kp@G`@Mx@Id@]vB[rBm@bEwClRUzA[tBSpAYlB[pBSlA_@hCm@|Da@hCSrAQhA]vBQhAGd@If@W`Ba@hCo@fEg@dD[tBSjAG`@a@jCWhBe@zCUxAObAERE\\]vBYjBwDxVkA|HMt@u@~E_ClOq@tEaAjGG^Mz@c@pCiBtLa@lCYnBUtA[pBSrASpAQlAc@pCU|A[lBSvAEVO`AMx@Mv@Mv@Kv@UrAMx@SpAQnA[rBMv@Mv@Mx@SnAM|@Mx@SrAUtASrA[nBQnASpAKp@G^StAOz@UxASrAMx@Mx@Mx@Mv@Mx@Kv@Mv@SrAWzAIh@e@|CUzAM~@AFMp@SrAAHYhB?BUvAG`@SrAkAvHSrAMz@Kr@Ib@Mv@[tBYlBUvAYpBOz@EXMz@Mt@UvAYpBMt@Mx@Mz@Mt@QlAMz@UrAMz@Mv@QpAUvASrAMz@]xBc@tCIh@SrA[pBQfAQfAALKj@SpAM|@EXUtAIh@CNIl@If@Kl@Gb@CNIh@G`@EXMv@Mz@QhAO~@Ih@Il@UrAEXG`@StASrASrAUtAEZADETE\\Mx@Kl@Gd@SpAg@`DIf@SvASrAUtASrAMz@SpAM|@QfAGd@UtASpAG^U|ACR[rB[pB[pB[rBSrAeA|Ga@nCStAcC`P]|B[nBSrAUtAKx@UtAStA[lBGb@SrASpAKv@Mx@UrAKv@O|@AJg@`Dw@fF}@bGG^SlAGb@QlAIb@ObAO~@If@In@EXG\\Kp@k@rDKr@EZW`Bc@nCa@rCG`@QdAMx@OfAOx@Mz@OdACHG`@Kp@Kp@Mx@_@hC[rBG^G\\ETMz@QjA_@bCOfAAFUrAEXKt@g@dDADKr@Mv@AFSrAU|AUvAM|@[pBId@Kt@UvAQhAAJGb@Mp@ObAIn@ETUtAId@Kj@IZKf@Md@CHK^Od@A@M^KVKVKVMVKTEHKROVKROTMRKNMPORSTc@f@QRONQPOLMJQNm@`@ULe@Zq@b@GBUNQJc@X]Ti@\\i@Z}A`ASLUNQLQLOHA@ULQJQLSLSLQJ?@SJQL}@j@OJQJSLQJKFGDg@ZSLIFGDSLSL]Rm@^CBs@b@SLUNc@XSJSLQLWNOHSNC@MHSLSLQJSLKHEBULQLGDKFe@XIF]Rg@ZEBuAz@g@Ze@Xy@h@ULSLe@Zc@XQJQJKFo@`@g@\\{A|@sAz@EBo@`@UNQJSLQLGDKFe@\\UPIDi@^MJWPURGDe@\\WRGDIHSNQNA@a@ZUROL]\\g@d@QNQNOPC@o@n@CBOLQPQNQPUTMJONSRONIFIHONa@^QPEBONMJQRA@a@^QNCB]\\QPQNQPc@`@QPGDIHONQPOLQPc@`@WTk@h@SRu@r@c@b@QNEFKHONc@^ONA@SRa@^ON?@QNQNQPQNOPSNa@`@QNQPc@`@a@`@QNYXKJQNc@`@ONQPQNOLQRQNONQPURMLONQNQNMNOLCBONSPONQPONc@^c@b@q@n@QPc@`@QNQPIHEDc@`@QNQPa@^QNONQPQPQNQPQNQPONSPA@MLQNu@r@ONc@`@A@a@^MLSRa@\\MLg@f@c@`@c@`@QPINQNkAfAaA~@CBcA~@a@^SNSPc@\\A@u@d@A@kAp@ULa@RWJGBYLEBYJGBE@i@T{@ZA?y@Z[La@Ng@Ry@ZSFsAf@{@\\WHoAf@}@ZWJu@XgBp@mAb@s@Xa@NOFQFSJk@TA@w@ZQJk@TmCpAcBx@q@ZYNQHKDYL_Ad@UJwAr@EB]Na@R_@PCBaBt@YN{@b@e@RMHIDQHSJQHSL{@`@i@Vk@VOHg@TYN_@Pq@Z_@Pk@XWLg@Tg@X[Lk@Xm@Zc@PSJoAl@EBs@\\WL_Bt@oAl@IDm@Xi@VMHYLe@Tg@TULaBv@oAl@e@Te@RSHSJmAl@g@TSJQJg@Tg@XqDdBeAf@iB|@m@Zk@XsCrAw@`@sB`AwDhBmDdBaAd@mB|@k@X}Av@eCjA}@b@_D|Ag@TSJkB|@aAf@}@`@YJWJUJkA`@sA^_AVoA^C@i@Ni@Pg@Rw@Z[Lg@Xc@Vi@\\e@ZYTIFSNc@^a@`@ONSRa@d@a@d@g@p@W`@]j@]j@MROVS\\Wb@[j@OVu@pAo@fA_@p@i@|@{@xAEJWb@y@zAcAlBg@~@CFuBxD]p@_BxCEFw@xA_@p@aB|CwAhC}AtCaAfBKRcAjBuAhCg@~@aCnEcB|CCDGLs@pAGHKRKPWd@Yb@c@r@[d@ORo@`AY\\W^a@h@QRUZq@v@GF]^A@i@l@ML[ZIHgAbAcA|@{@r@OLQLA@SNOLQLSL"
                     },
                     "start_location" : {
                        "lat" : 43.1742174,
                        "lng" : -79.2847532
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1252
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 47
                     },
                     "end_location" : {
                        "lat" : 43.3387007,
                        "lng" : -79.82915280000002
                     },
                     "html_instructions" : "Take exit \u003cb\u003e100\u003c/b\u003e for \u003cb\u003eON-407\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eETR\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-403 W\u003c/b\u003e toward \u003cb\u003eBrantford\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eHamilton\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "inmgGx|efNWCA?A@KHSJQJSLSJSJSJSJSJUJQHUJSJSHUJQHSJUJSJQH[N}@`@SJ{@^w@Zu@VSFwA`@y@Ri@JWHSBUFUBSBUDUBSBWBUDU@UBSB]BM?S@W@S@W@U@I?a@@i@@wA?k@?aA@g@@Y?a@@s@FUDUBi@J{@RYHSFSHUHUHGBIDSJSJOH[RWN"
                     },
                     "start_location" : {
                        "lat" : 43.3278855,
                        "lng" : -79.82556959999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "86.6 km",
                        "value" : 86592
                     },
                     "duration" : {
                        "text" : "45 mins",
                        "value" : 2727
                     },
                     "end_location" : {
                        "lat" : 43.8487511,
                        "lng" : -79.31363759999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e at the fork, follow signs for \u003cb\u003eON-407 E\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eExpress Toll Route East\u003c/b\u003e and merge onto \u003cb\u003eON-407 E\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "fork-left",
                     "polyline" : {
                        "points" : "{qogGdsffN]R]TSLSNEBc@XYP_@TOJEBSJSJSJSJSHIB_@NSHSFYHODSFI@KBQDUDA?UDSBUDA?QBWBS@UBi@BUBU@U@S@S@_@BU@_@BU?S@S@K@m@@?@A?A@IPgB@kBB]@eA@iA@eB@kA@M@c@?iA@oEFgABiBB]?c@@I?_BBI?u@@K?sABK?gA@S@y@@G?e@@S?aABw@@_@?S@w@?U@q@@I?K?c@@G?kA@s@@S@]?mAB_ABU@_@@S?i@@[@wCHM@m@@gADy@@cBFK?U?M@qBDaBFG?aABA?S@U?M@K?y@BW@S@iABwADw@@w@BM@_BDU@]@_BBG@iBDy@@S@W@u@@[@m@@}@@uABE?wA@aBBkABY?[@qBBuBBY@s@@s@@M?Y@s@@wA@m@@[@cA@E?cABi@@yCFU?mAFQ?C@wADG@m@Bq@Bc@BA?W@O@y@DY@_ADqADQ@i@Bs@DW?sAFkBHO@gADg@Bq@BW@eADkAD]Bq@B_@@{@Dm@B_@@c@BaAD_@@sAFS@y@Du@BO@S@i@Ba@By@BaADS@mABaAFiAFmAFW@}@DU@U?mADcADYB}@Bm@Bq@B{BJyAFu@BS@}@DcADY@S@a@BM?g@DiABK@q@@K?u@BaA@c@@eA?o@@eAAa@?oAAc@Ai@Ay@CIAmAGe@C]AYAAAA?a@Cg@E[C]C{@IYEa@E_@CWCo@I_@EcAM}@Kg@IWCi@Ki@GYG{@OUEUEg@KMCq@Mi@Mg@KA?UGSEUGSEUGQGSEWIk@Oe@OUGSGi@O}@[g@OOGYKi@Qe@S]K_@OYMOGq@WAAo@YMGYKc@UCAg@UQIUKg@UCCc@Sc@UAAg@WGE_@QSMSKe@Wm@]oAu@qAy@EEg@[{AcAa@Y_BiAiA{@KIoAcAyBkBw@q@WUwAsAUUsAqASUaBcBeAmAo@s@g@k@aCuCuBgCy@aASW]a@e@i@q@y@o@w@Y[u@_AWYuAeB[]cCuC_@e@o@w@QS_@e@a@e@W[uBgCaDyDeAoAqA}AOQGIa@e@g@m@kB{BOQeBuB{AgBsCiDQSW[QSeCyCc@k@UYUWWYKM_@e@u@_Aa@e@a@e@[_@]a@g@m@[_@MO[a@o@u@yAgB[a@k@o@MOw@_AQSQS}@gAy@aASWg@m@SU[c@{@aA_@e@AA}AkB}@gAm@s@a@g@{@cAOQ}BqCUWIKs@y@e@k@SWm@s@KMyAgBsDmEc@i@SWAAWYCEa@c@k@q@qA{AMO}@cAy@}@?AgAiAo@q@_@_@c@c@[[i@g@MMm@k@c@_@m@m@m@k@mAeAqAgAmAcAQMkA}@[WUSUQ_Aq@{@m@sAaAmBqA}@m@w@e@mAu@UOi@]e@WgAo@_@U}@e@m@[i@[KEaCkAYOc@Sw@_@gAe@gAe@g@Uo@WQGy@[uAi@YK}Ak@gA_@SGGCeA_@mA]iCs@[IMEiEiAgCo@iB_@}@QeASkB[YEwC_@CAeJu@gTgBc@Ck_@}CwC]qDi@wCw@gBc@q@Su@Wm@Sg@Sm@SUKiEmBm@W_Ae@KG_Ai@KGGEWOc@YWOOKmAw@QMSMa@[a@Yc@YWUCAUSOMMK_@YQOMKAAyAsAe@a@OQQOKKOQKKYYoAsAu@{@mAwAy@eAi@s@]e@k@w@U[IMoAkBqAqBiAgBoAkBOU}A_CeBiC}BmD]g@s@gAeA_BqAoBeAaBaCqDYa@gAaB{@sAm@{@s@iAs@eAYa@IMm@}@Wc@gAcBYa@U[[e@g@s@OUOUMSOUOSMUOSMUOSOUMSMSOSOSOUMSOSOSQSOSOQOSQQOQQQOQQQQQQQOOQOOMOOQOe@_@SOQMSOQMSOQKSOSMSKa@Ui@[QIe@Ug@UMGEASISISIe@QWIi@QQEYIQECAMCk@Ok@Kk@KQCSEUC[Ee@Gi@Gi@GaAMi@Gi@IaAKi@I_AKk@IaAMOCWCSCaAMi@ISCUEQCUCUESESCUESEUGUESESEUGUGSEAAQEUGSGUGWIQGQGUGSISGSIQGCASISISISKSISISKSISKUKQKSKUKQKQKSMSKe@Yk@]SMQM_@WWQc@[QMOMQMSOQOQOSQQOAAOMOMQQQOQOOQc@a@QQe@g@a@c@]_@OSa@c@SUKOW[IK_@e@OSQQOSOSKMSWOSQSOQSWKOW[i@o@OSSWOQm@u@_@g@UW[a@c@k@a@e@_@g@m@s@SYo@w@m@w@c@g@]c@OQQW_@e@]c@e@i@MQ]c@e@k@KMOSQU]c@QQQWQS]c@a@g@EG[_@[a@QU]c@a@e@a@i@]c@OQ_@g@QQOSSWMQMOSWOOMQOS_@e@c@i@QS[a@IKEGQSACOQOSQSQUOSQQKQSUCCGKQQOSOS_@e@c@i@cAoAOS_@e@_@e@OSa@g@a@e@_@g@_@e@a@g@g@o@e@o@yAkBg@q@OQQSOSOQOSQSMQQUCCMOOQGIGGOSOSOSQSOSOQAAMQOQQSOSOQ?AoA_BQSo@w@eC_D_AkAOSeC}Cu@aAW]Y_@{@eAIKOSSYQSOQIMOS_AkAAAY_@W[CESWKK[_@[_@_@_@_@_@II]Ye@_@OKMIEEQKQKSMSKCCa@SSISKQGWKQGSGAAUGSESGKCYGe@I]Gk@EA?QCWASAUAW?A?_@A[?[@Q@i@DU@WBG@K@SBk@Hk@Lg@Lg@NWHQFk@VC@IDa@P[P[Pc@XMJQLOJUPQN?@QLONQRKJUTSV]`@GJUXOTOVOTS^EHMTOVKT]t@_@x@[t@OZYp@IRA@KVCFINITUh@OZw@lBwAdDCFaAzBc@fAA?Ul@a@z@a@~@Yp@_AzBA@yAdDGNk@pASf@CFe@fAYp@o@xAMVYr@e@dAKTKVIPMVKVMVMTMXKRKVMVMVMTMVMVMTKTMVMTOVYh@]l@KRi@`A]l@OTMR[j@]j@m@`A]f@]h@k@|@a@l@_@h@]h@k@|@m@~@ORkAfB{@rA_@h@k@|@_@h@]h@]h@OTU\\W`@]f@]f@{@pA}@tAm@~@{@pA}@rA{@rA}@rAOTk@z@{@pA_@j@]h@QVMPORORMRORORORQTMPOROR_@d@a@d@_@d@a@d@QRGHWXQRa@b@OPABmArAyAbBKJs@x@a@d@aAfAOPs@v@q@v@a@f@ORQROPMPa@f@ORORQR]f@a@j@MPORi@x@QVKNq@`AKR]h@QVMTOTCDINOVMRIPOTMVMTMTOTKTOVKTMTMVMTA@KTMTYl@MTMXMTKTMVMVKTMTMXYl@g@dA[n@IRMXKRMTMVKXMRQ^Wf@[l@[l@KPADMRMTOVMTA@KRMTMROTCDKNMTW`@EDMTOTOTIJCFORMTOROTMRm@|@m@~@]h@_@h@k@|@_@j@_@h@]h@MP_@j@]h@]f@]h@_@h@[f@_@j@]f@]h@_@j@]f@]j@_@h@]f@MTORORyBfD_AtAwAzBkAdBoAlBy@nAuArBKPc@n@W`@CBQVk@|@{@pA}@rAi@v@c@r@g@t@ABm@|@a@l@mAdB_@j@UZa@h@kA`Bo@x@eArAQT]`@a@f@{@hAeApAo@x@a@f@{@hAc@h@o@|@m@z@[d@m@~@_AvA_@l@Wb@_@l@i@~@i@`Ak@dA[h@i@`Ay@vAm@fAKNw@vA]l@[j@]j@g@|@QV]l@Yd@c@p@KPk@z@]h@{@pAm@~@o@~@GJc@n@EFy@lAMRiAbBw@jAoBxCaAvAgAbBi@t@aAxA]h@_AtAuAvBa@l@}@rA{A|B}A~Bi@t@KPo@`AIJu@hAEH{@pAsAnBC@]h@]b@_@j@_@f@a@j@A@}@hAqBtB_CnB{BtAeBr@eAZkAZuAP]DM@_AF]@gA?g@Co@CqAKKCYEE?y@QgBk@g@Q}@a@s@a@o@a@a@W{@o@]YUQs@s@i@m@?AQQGGW]ACkAuAOQk@w@y@qA{@qAg@{@Ye@OW]k@e@y@]k@[k@Yk@c@y@[m@i@eAMU[o@kAeCQ_@mAiCq@{Ag@gAYm@g@gAYo@Yo@Ym@Ym@Yk@i@eA[k@_@o@g@}@m@aAk@_A]g@_@k@m@y@[c@q@}@]c@[_@i@s@g@s@Y[}@eAAAs@w@_@c@q@w@a@e@c@g@_AkAa@e@]a@sAcB_AkAoA_B[c@cAuA_@g@m@{@GIw@eA}@uA}@qAy@kAKSS[_@k@k@{@]m@k@}@OWeAkB_@o@Wg@w@wAMUu@{AeAuBe@cA]s@Wk@MYe@eAWk@Wo@e@iAe@kAUo@Wo@Uo@Wq@ACUq@Ws@So@Ss@KYIYSs@[kASs@Oq@I]I[Qu@Os@G[G_@Os@Mw@Ow@Kq@?EMy@G]Io@M}@C_@Iq@Ky@MuAIy@OuAMsASsBOyAIs@QsAK{@Ig@Gk@O{@Ku@UqACSIc@G]WmAWuAYqAKc@Kg@Sy@a@aBCMYeASq@]oAACSm@K[Uu@Sm@Uu@Wq@_@cAAEc@iAYs@ISYu@Ym@Wm@Wk@]w@_@s@]s@m@iAKUk@cAa@q@Wc@[g@k@_AOSm@_Ao@_A_@g@]c@aAqAo@w@MOu@{@uAaBcAiAGIkBuBq@u@cAgAOSqAwAAAsA}AqA{Au@w@yAcBY]cAgAaAiAaAgAaAiAq@u@cAkAq@u@e@g@_@_@q@s@QQa@c@s@q@SQq@q@w@s@s@m@w@q@u@q@s@k@y@q@o@g@_Au@s@k@w@o@c@_@eA{@gA}@c@]WSoAcA_Aw@qAeAIGmAaAu@m@c@_@mAcAIGc@]QQQOQOCCMKOQQOm@m@EEQQOQMMCAOQQQOQQSOQOQCEMMOQOSOQQUMQOQQUMQEGY_@OSOUOSMQIMEGOSMSOSOSOSOS}@oAi@w@EGSYg@s@a@i@MQm@}@o@{@m@{@m@{@{@mAg@q@w@iAm@y@_@i@AAm@{@MSOU]g@EIGK]i@EGk@aAGMOUMUk@cASa@Q_@[m@s@{As@_BOa@eAgCq@_B}@wBe@gAEM]{@Wo@Yo@ACc@eAYo@Wm@Yq@Wm@Wo@KSM]oBwEc@eAq@aBWm@Yo@Wq@Yo@Yo@c@_AO[Ym@MWYk@Ym@i@eAMUMWWi@Q[c@w@?Am@eA]m@CEWe@]i@QYi@}@]i@k@_A]g@_@k@[e@_@i@MQSYc@m@_@g@EIc@m@oAeBOSKOQWOQCEKOOSOSOQaByBMQ_@e@?AOQOSOSCC[a@OS_@g@KKSYOSMOGIY_@_@e@KKc@m@a@e@EIY]OS_@c@QUMQQSOSEEcAoAu@aA_@a@gByBKMSU]c@GIGGo@u@AC_@c@c@g@MOQUOQGGe@i@u@}@i@o@WYi@m@GI_@c@AAq@u@MOc@g@IIY[c@g@[]UWKMw@}@Y[SSOQ_@c@MMUUW[GGSSOQW[IIq@u@c@c@QQMMQSOQMMCCOQQQQQQQQS_@_@QQQQUUIKQQQQOOa@c@c@a@MOUSOOQQQQQOQQOMQQQQEEKIc@a@OOQO?AOOc@_@SQa@_@c@a@a@_@SQMKSSc@]e@a@US{@s@k@c@_@[YUo@e@o@g@u@i@g@]gCiBYQqA_AyEiDuA{@CCECq@c@uAy@cI{DwAo@{Am@i@Ui@Sc@OGC{Ai@}@Yk@Sy@Uq@Su@Ui@Om@Ow@Sm@M{@S}@Sw@Qw@OcAUu@Og@Kw@Qq@Mg@KSEe@Ko@M{@Qw@Qq@Ms@Oq@O_@Iy@Qc@Ik@Mg@KA?u@Qo@Q_AU{@Um@Q_Be@yBq@MEk@QIEQGa@Oi@UA?gAc@EAy@]e@Ss@Yw@]ECw@]MI_Bw@y@e@c@U]SsBiAmDmBaDiByAy@wAw@_Ai@eB_ASMmAq@oAs@}A{@}EqCwAw@{BoAMI[QgAm@gBcA_CsA}@e@oBiAiBcAeDkBcAk@}@g@w@e@y@c@}@g@_Ag@eAo@qAs@qC_Be@We@WQK_@Ue@WiBcAs@_@e@W]Sc@Wk@[OIQKe@YUMYOa@Ue@WOIi@[m@[g@UAAq@[i@USISIe@Qk@SSIUIUGOEYIg@Qc@Mk@Ma@K[GWGe@IYGi@Ig@Ia@E]EUCk@G[EiAIm@Eu@C_ACc@AkCEqBCk@Ag@AyACuBE{ACsAAs@AkAAyFIwEIy@CUAaAEk@GQCQAwAOYC[GWE]GYESGq@OYGYIEAQEUIa@Mk@QKEMESIWK_@OSKg@UUKQKMG[MwBoAwA_Ak@c@WSs@k@m@i@USUS_@_@c@a@QUQQQSQS[_@SWSYqAcB[c@MSOSMWMS]i@_@q@KSKUaAkBeAsBQ]Q[eC}E}BoEa@y@a@u@c@}@m@iAaB_DS_@Q_@g@_A[q@We@]q@Q[e@aA]o@Wi@Q_@_AgBMU]s@g@_AYg@{@cBe@aAYi@[m@}@eB}@eBqDeHyAuCe@}@Yk@MUOY[m@m@kAk@gA[o@]q@[k@Q]We@]o@i@_AYg@_@q@e@y@Yc@]m@i@}@a@m@U_@OUU]a@o@[c@m@_Ae@s@a@i@cAwAw@eA[e@OSSWMQ_@e@e@m@}AmBa@e@IKW[SWQSSSoA{A_@e@q@w@[_@iAsAIKY]a@e@s@{@_@c@kAuAoA{As@y@QU]c@qA}Aq@y@a@g@OQg@o@Y_@OQMQ?A_@g@]i@EEWc@[i@]k@[m@Ym@OWKUYo@Ui@Ys@M[Uo@Uo@Ww@Y}@Me@Uu@Qs@Mc@UgAOw@Qy@y@gFa@oCOcAaAyGwB{NUuAMoAUyAa@mC_@kC[wBQiAMy@YoB[oBGe@QgAAMKo@CUEWc@qCa@wCKm@M{@AEe@eDe@{COeAe@_Da@qCy@sFu@eFm@yD[uBe@gDoAmIWaBWcBEQW}Ac@oCe@kCKk@q@wD[_BOy@GYG[EWESEUMk@G[Ou@I_@G[GWYqAYqAQw@G[I]GYI]I]I]GWGYI]GYI]I]YgAIa@IYGYm@cCSu@Qs@I]Mc@GQSw@Qq@GQEMk@uBm@qBm@qBAC[gA_@kAGUWy@]mAOi@q@cCk@uB_@uAc@gBYkAWeAKe@]yAOo@_@cBg@{Bc@qBAIS{@Qy@I[]}AWiA[oAYkAYeAWaAU}@Me@Mg@EKMe@a@wAMg@So@e@cBCEc@{AAEg@eBQm@I[KY{@yCK[c@yAg@}A_A{CEOy@iC?A_@kAUu@Us@Og@Oe@KWI[IYUs@K[EOK[Ww@Y_AW{@g@}AGS_@kAUw@i@cBa@qASq@u@aC_@mAK[GWWw@Us@Ss@IUc@uAg@_Be@}Aq@uBUs@iAsDkAwDUq@a@qA{@uCm@qBQm@W}@g@cBc@eBe@eBc@eBYkAQu@GWGUYuAS{@I]mAeGUiAe@eCACESEYWqAW_BQ_AMu@AOSmAIg@E]OcAO_ACOWoBM}@OkAOmAAKEYGk@a@yCUkBY{BsAoKCSc@_DCWc@iDMcAAEg@}D]oCUmBy@mGgAwI[eCCQE_@[eCE_@M{@QuAGm@SyAAIUgBWqBe@qDGe@UiBAGe@}DGe@M{@Ky@QuAQuAE]Ku@E_@EW?GKu@E[M}@Iu@G_@QuAQwAUmBYuBWuBS{A]oC]mCk@iEWkBQoAMaAg@kDi@uDQgAOgA]yB[oBU_BOaAc@mCWeBWaBG]OaAUyAMw@U}Aa@eCSuAUsASuAUsASwA[oBUwAKu@G[UyAYmB[mBM}@UsASuAMw@Kq@O_ASoAMw@My@SqASsAO{@U{AKw@Oy@Mw@Mw@Kw@O{@WcBWaBSqA[uBGa@Mu@SqAUwAM{@[oBSqASwAUuASoA?GO}@SkAOaAKs@O{@Mu@Q{@Os@Ow@Ou@Qw@Qu@Qu@Mi@Me@c@eBW_ASs@u@cCQi@CIUs@Uo@Ws@Uq@Yu@Wq@Wo@EKSe@Wo@e@gAWk@O[e@cAk@gA]q@[m@g@_Ai@_A_@o@Wa@EI]g@_@k@a@k@]e@a@k@a@i@k@s@e@i@g@k@EGs@u@QSa@a@u@s@q@o@g@a@SQOOSOy@o@gAw@e@]UOa@YUMUOQKSMSKSMSKg@Wc@U[Oa@Q{@_@g@Sg@SSIk@SWISIWIWIOESESIUGSESGUGSEYGYG]Ik@Km@K]E]Gm@Ie@GYC]Ca@EmBMYCQA_ACK?e@Cg@Am@AOA}@CgACQAaAC_ACg@AWAq@Cc@Aq@C_AC}@Cq@Aa@Am@E[AUASCUAWCSCWCSCUCUESEC?SCSEUGUEg@MWEQGSGSGUGSIUGWISISKKEWK[Oa@Qe@WUMQIc@WUOUMOKQMSOSMQOSOi@a@WUqAkAc@a@_@a@c@e@c@e@a@e@Y]WYe@k@W]IIW_@_@e@_@k@OSOUOUMUOSOWMSMUOUOWg@_A]o@OYMWYm@KS[q@g@gAUi@Yo@[u@Um@g@mAcAoC[w@i@_Ba@mAa@kA_@mAu@_Cm@sBYeA_@qAQs@]qAm@eCSy@u@eDq@cDKe@[cB?AWwAUqAMs@WyA[qBSuA_@qCQsAQsAE]MeAIu@OqAMaAYkCS}Aw@aH]sCi@eEi@cEM_AKs@OgAG_@SwAEUIe@Kw@[mBQkAE[Ic@Ii@OeAaAiGG_@Km@Mu@QoAEUQeASmAW_BW_B_@cCWyAUyAU{AUqACOWgBg@{C]_CES]yB_@_C[uBU_BOiAGa@Im@_@eBIg@WyAOy@Qy@Mo@Ke@Os@U_AMm@Qq@]sAYgAUw@GSK_@c@sAACa@qA_@gAc@sAK[So@Sm@iAoDs@{Bu@}BiAmDcBiFIYi@aBAEY_AEMW{@Uy@]qACIa@aB]wAS_AMq@ACG]Ow@QcACMO}@G[E]AECU]eCUuBMkAKcAEi@C_@E_@MgB?MEu@CWIaB?CCq@E}AA]AUAe@AWAc@?K?MAg@Aq@?}@?}@?uA@_B?W@aABsADaBFkA?EDiA@KHyABc@F_AHsA@UJ_B?GHmAH}ATqDBa@HkAB]FgA@MDcAFu@?IHoA@a@Bs@^_GBi@|@gOR}CHyAL}BLcD@GFyAB}@LgD@c@@k@@S@[JcF?g@BsABy@@wBBeB@qC?M?_G?EAuA@i@AsAEaFCmCAY?GAS?e@EqBEuBASGoCEsAAYG{AEw@A]A]Ey@GqAMyBKcBEo@AYCUASMgBAI?MOeBKuAUoCEc@QwBMsAa@oECUYiD_@iEi@eGy@oJe@iF?GGq@[qD[mDkA}MSsBAUQmB{@uJ_BuQC]C[E[C_@E]Eo@Gg@C[C[C[CYSwBC[CYE_@C[C[CYE_@C_@CWE]C]C[E]C]CYC[E[C]C]EYC[E]G{@CWE]AKAOC_@E[C[C[C[Iy@C[C]C]C[E_@C[CYC_@CYA[E_@C[AUCa@C]C]C[CYC_@A]CYC]C[AQ?KC[A]C]C[A[C]A[C]GeACUAWC]C[AIIoACYC]C[C[C]C]C[C]C[C]E]CYC[C]C]E[C[C]C[E[C]C[EYC_@E[C[C[E[C]E[C[E]E[C]EYE]CYE_@E[CYCWACE[C[E]E]E[C[EYE_@AMCMC[E[E]E[C[CMGg@C[E]E[E_@E[C[EYE[CYE]E[E]E_@CYE[CYGa@CYE[AMCMC[E]E[E]C[EYE]C[E]EYE]C[E_@EYE]CYE[CUAGEYC]QuAE[CYE[E]EWE_@E[E]CYG][iCa@kDWoB?CEWE[E]EYAGCSE]E[AGCUEYE]EYE]CQAGE]E[EYG_@E[CWG]E[CUAEE]CSAIG[E[EY?AE[EYE]E[EYE]AACWG]EYE[E[E]G[E[EYE[E[ESAGE[E[AECUG[EYE]?CEUE]G[E[EYE]G[E[E[EYG]E]EYEYE[G]EYG_@EYE[E[E[EYG[E]EYG]E[E[AGCSEYG[E]E[EYACEYE[E[AEEUE[AICOE[E]CM"
                     },
                     "start_location" : {
                        "lat" : 43.3387007,
                        "lng" : -79.82915280000002
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "61.8 km",
                        "value" : 61759
                     },
                     "duration" : {
                        "text" : "32 mins",
                        "value" : 1945
                     },
                     "end_location" : {
                        "lat" : 44.0190329,
                        "lng" : -78.6219057
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eON-407 E\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eToll road\u003c/div\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "uesjGf}acNCOEYE[G]EYE[COGg@G]EYM{@EYEW?CG[CYG[E]EYE[G[E]EYG]EYE]EYCMAMG]EWE_@G[CYG[E]E]EYG[?CEWEYE[YoBG]E[EW?CEYE]G[E]AGCQG[E[E[G[EYE_@G[EYE[E[EYE[G]EYE]EYG[E]?CEWG[EYCSAE?AE[G]AICQE[E]EYG[E[?AEWG]CYG[E[E]G[E]EYEYE]EUM}@EYG[E]EYE]G]EWE[E]G[E[EYCSCIE[E[EYE[G[E]EYEYCMAMG]E]ACCWEYG[E[E[G]CYG[E[G]EYE[E[E[G]EYE[E[E[GYE]E[E[G[EYE]G_@EYEYE]EYG[E[E]EW?AEYG]AMCME[E[ACEYEYE[E[G[E]My@k@}De@gD[sBE]_@kCm@aEYqBKu@Kw@QsASuAOqAWqBUiBw@sGIk@Iw@QsAOuAKw@C[Ku@Iy@CUGc@C[E[Iy@Iy@Kw@Iy@]oDo@sGK}@Iy@Iu@E]E[C]EYE]E[E[E[E]E[EYE]EYE[CMCME[E[E[G[G]EYEW?CG[GYE[G]GYE[A?EYG[G[G[EUI_@G[GYG[G[GYIYOu@Qu@GYOs@I]K]GUGYIYI[?CGUIYIYSu@IWI[IWUw@Sq@IYIY]gA{A{EaDcKg@aBUs@uB{Ga@oASo@IYSq@k@mBg@cBIYUw@Sq@I[IYIYSs@I[GU_@oASw@a@{Ak@wBm@}BSy@i@yBi@uBI]c@kBMc@Ke@[uAQu@GYI[G[I[Os@Qu@Qw@Ou@Qs@G[ESKe@c@wBKi@Qu@WqAIe@e@aC_@iBKm@EUEQ?Ce@eCGYIc@Ko@Ow@Mw@]kBCQIg@G[SkAM}@GYG_@Ku@G[Ga@CQOy@SwAYeBM_Ag@oDQoAMw@E]EWE_@Mw@Ky@EYKy@E[Ky@EYE]Kw@Ky@E[]mCWqBQsAS{Ay@iGq@gF[eCWmBWgBE]u@}FaAyHE[QsAe@mDWoBE[E[E[E]CMAME[E[G]E[E[E[E]E[E[E[E[E[E]E[E[E[E[E]E]EYE]E[E[G[E]E[E[E[E[E[E[E[E[E]E[E[E[E[E]E[E[E[COAKE]E[E[E[E]EYE]E[E[E]E[E[E[E]E[YoBAMCME[E]E[E[COAKE[E]E[E[E]E[CMAKE]G[E[E[E[E]EYE]E[E[E[E]E[E[E[E]Kw@E[E[E[COAKE]EYG]C[EUAEE[Ky@E[E[E[E]E[EW?CE[E[E]E[E[G[E[E[G[E[G[E]G[GYE[G[G[GYG[G[GYOw@I[GYI[G[IYGYI[GYIY?AIWIYGYIYK[I[IW?AIWKYI[IWK[Qg@Oe@Qg@m@}A[}@Yq@Se@Qc@Yq@EGAEIQGOCEQa@IQYo@KScAqBQ[]q@OWOYQYAAU_@MQ_@m@Yc@W_@QSQUi@s@MQMQOSMMg@m@OSOQMMy@aAMKIIUYOQWWMOq@o@c@c@OOu@s@AAi@c@CE_Aw@c@a@{@q@WU_Au@mCuBw@q@g@]sGcFsC{BmEiDyAmAoCuB]Yc@]UQ{AmAeAy@g@a@g@e@WSu@u@_@_@MO]][][_@o@w@QUm@w@a@k@Ya@GIKMk@}@QY]i@EI{@}AMUo@oAKUUe@Ug@]u@Uk@EKc@eA]}@}@kCY_AQi@Mg@e@aBU_As@yCMm@WoACSOy@Mw@CWu@cFkBqM_@iCy@sFeAoHaB}KmBeN_CePw@uF_ByKg@iDy@wFuAoJa@qC[sBM}@k@cEWeBuCgSe@cDIi@UyAOkAk@{DU}A_@cC]eC]yBSuAUaBQkAMw@Kw@AEKs@O_Ae@eDq@uEIo@Ks@QiAGa@OkAKw@O}@i@uDKw@EYQkAKu@OaAKw@CSCIGe@Km@YsBc@wCAESuAIq@OaAIm@Km@Io@cAgH[qBMaAU{AE_@a@mCSwAWiBUyAc@yCm@kEM{@YoBSsAQmASwAOcAGg@Kw@QkACSYmBCOIm@?CQcA]_CQmACUQkAYmBYmBQoAAK[sBYsBa@qCSsAGa@UcBUaBGa@]gCG_@O}@ScB[{BYqBYeBm@uDSeAScAWgAGYc@eBc@aBAAU{@q@yB_@aASo@]_Aq@cBGKQe@]w@Wi@c@aAEG[o@CGs@oAc@{@U]e@u@ACiAaBkAeBCC{AqBcAgAEEaAcA{@}@m@o@MMYYg@g@e@g@YYk@k@[Y_A_AUWs@s@s@s@a@c@WWeAeA[[}A}Ay@{@ECmAmAKM{@y@MO}B{BeAgAOMcAcAwAyAKKYYEEMM]]g@g@QQQSKI?A[YOQMMOM[]o@o@q@s@WWEEk@k@[[gCgC[]SSQQMOQSQQY[Y[]e@QSMOa@g@KQCCOSEGGIU]Ya@OSACi@y@]k@IM_@q@k@eAUc@aAoBa@}@GO]u@EMKS?ASc@KY_AcCwA{DWs@q@gBAEUo@Um@c@iAWs@Wq@Qi@g@qAa@gAc@kA_@cAKYa@iAcAqCm@aBa@iAc@kAe@oAWu@_@gAa@kASs@Us@Us@Sq@Ss@Su@Ss@Qo@IYIYGYIYo@iCQy@Qs@?Ca@iB_@kBYyAUkAO{@SkA[sBSsASqAIg@QmAQkAq@wEAE]}B{@eGG]AE?EGc@AEIg@U{AWmBKm@CUe@}CIi@Io@e@}CCS[sBGc@CME]Ik@CSEUCSMy@AGM_AKm@AMKo@QiAc@yC_@iCe@}CKs@Gg@Km@Ii@Gg@G]Ik@Ii@U}AAMSoASyAACg@iDa@uCAGWgBIc@CUCMGe@a@mCAK[uBa@sCG_@AIKo@U{ASyAM{@My@Io@W_BWkBM{@WeBOaAYoBAKKk@E]My@_@mCYmBcBgLKw@G]CQOcAIk@YmBWgBYoBQmA]yBGa@OcA]_C[{BM}@U_B[qBWiBQiAu@kFk@yDm@gEQmAW}A[{BYkB]gCUoBUkBIw@GUGg@Iy@Iw@Gs@Ea@C]?AC[I{@CYKyAIuAC]G{@GuAE{@C]AYA_@A[C_@AYE{ACy@A_@CwAA_@Au@A}@AsAC{BG}FAwBAeAA]AiACeEGwECmEEoCAyAAqAGcGAcBCyBGoHEoDKsMAQ?KA{@?c@?WA{@A[?{@A{@Ay@Ay@A{@A{@?{@Ay@A{@?GAq@A{@?e@AU?{@Ay@Ay@A}@A{@?]A]?]A[?]?]A{@Ay@A]?_@Aw@?_@?K?QA]?]?[?]?i@?a@?Y@]?y@@{@B{@@y@@]@[@_@Bw@@]?M@OD{@@O@g@F{@@M?MB_@Dm@@KB]@S?ED]B[B_@B[B]@EBUB[BW?CD]D[B[D[BS@GD]@IBSD[D_@DWJy@Lw@BOFg@Lw@@KBOF]D[DYHm@BKLw@?Gl@}D@GJq@Jw@Lu@Ly@Fa@BSD]Jk@NcAPmAN_ABYF]D[L{@Lw@Jq@@EJu@Lw@?CJu@DYDa@D]BML_AJ{@H{@NuAD]Fq@Dc@D]Fy@LwABYF{@B[B]B[F{@Dw@F}@Dy@Dy@B]@[@]B]FwABw@@]By@B_ADyA@y@@]@e@?S@{@@]?w@@s@?G?}@@oA?}A?e@Au@?iAAm@?{@A{@Cy@A{@A{@Cu@C}@EwAAc@AWC{@E{@Ey@E{@A]C[Ey@CWE_AC]C[CYC_@G{@C]AKEm@Iy@C[CYI}@Ee@CSCWI}@C]MoA?CGw@Iy@E]Gy@COEi@Iw@Eg@Go@Gy@Iw@I{@Iy@I{@Gy@COEg@Iw@MuAIo@Q_BMy@Kw@Kw@Ic@CSMy@?AMu@G[Mu@Os@?COu@Qw@G[CMCMQs@?AQu@Qs@Qs@Su@Ok@Ma@g@gBKYSs@KYKYCKEKKYKYEMCIKWKWKYIWACKUKWKYACISKUKWMW?AKUKWMWEIEM[o@KUMUMYMUYm@MUOWKS[o@[k@Yk@[m@Yk@S_@We@MWMUKSOYCEIOKUMUMUMWMUMWMUMUMWMUKU[m@[m@[k@[o@[k@Yk@OWMWIOCEMUKWIMCEMYMUMSMYMUMUMUMWQ[IOMWKUMSMWMWMWMWMUMUMUMWKSOWMWKUMSOYKUMUMUMWIOCEMWKUMUMUMWOWKUMUMUMUMYMSKSMWMUMWMUMWMUKUKSAAMUMWMUMWMUMUMWMUMUKUMW[m@S_@GKMUKWMUOUKWMUMWMUMUMWMUMUMWMUKUMUMW[k@i@cAKUEGGOMUMWMUMUMWMUMUMWMUMUACIQOWIQACMUGMEIMUMUQ]MUMWMUMWKUMUMWMUMUMUMWMUMWMUMUMWEKGKKSCEIQMUMUMUMWMUKUOWMUKUMWMUMUMWKUAAMUKUMUMWMWMUKUMWMUMWKWMUMWKUMWKWMUMW?AKUMWKUMWKWEIGKKWKWMWKWMWKWKUMWKYKUMWKYCGGOKWMWKWKWKWKWMYIUMWKYKWKWKWKYKWKWKYKWIWKWKYKWKYIUM[KYIWKWKYIWKWIQW{@KWIYKWKYIYKYIWKYIYKYIWKYIYIYKYIWIYKYIYIWIYK[IWIYIYIYKYIYIYIYIYIYI[IWI[IYIYIYIYI[IWI[GYIYIYI[IYG[IYIYGYI[IYIYG[IYG[I[GWI]IYGYI[GYCICOI[G[GU?CI[GYI[G[G[GYI[GYG[GYG[I[EYI[GYG]GYG]GWG[I[GYG]GYG[G[GYG[G[IYG[G[G[G[GYG[I[G[GYG[GYG[G[I[GYG[G]I_@ESG[GYG]GYI[G[GYG[G[GYI]GYG[GYGYG[G[G[GYGU?EG[IYG[G[GYG[CMCMG[GYI[G[GYG[G[GYG[G[GYG[GYI[GYG[G[GYI[G[GYG[GYI[G[GYI[G[GYI[GYESAGGYG[IY?CGWEUAEG[I[EYIYG[GYCOCKG[GYG[GYESAEG[GYGYG[G[GYEOCKEYCGCSIYG[GYG[GYG[G[ESAEG[GYG[GYIa@GSG[GYCQCIGYG[G[G[EQAGGYG[GYG[GYG[GYAAEWG[CKEOKk@I]?AGWEYG[EMAKI]EYGYG[CQAIG]EYG[E[CSAGE[E[E]CYE]E[E]C[C[C[C]C[C]AIASC[C]A[A]C]A_@AYA[A]A]?O?KA]A]?]?[A]?]?[?]?]?[@]?]?E@W?Y?C@[@_@@[@[@]@]@Q?IB]?I@QB]@[B[B]@M@OBYB]D[B]D[B[D]B[D[DYD]D[F[D[D[F[D[F[FYFYF]FYF[FYF[FU@EFYHYHYFYHWH[HYHYH[HWHYHYHYDMDMFUHYJ[HWHYH[HWHYHYHYJYHYHWHYHYJ[FWHYHYHYJYFWJYHYH[Ts@FWTs@f@gBHYH[HW@CFSJ[FWRq@J[HYHYHWHYHY\\kAHYJYHYHYHYHYHYRq@HYHYHYHYJYHY?AHUHYHYHYHYHYHYHYHWHYHYJYHYFS@EHYHYHYHYJYHWHYH[HWHYH[HWHWH[HWJYHYHYHYHYHWH[HYHYHW@EFSTs@HYHYHYHYHWFSBIFUBKDOHWTu@HWHYHWHYH[HYHWHYHYJYHYHYHWH[HUH[HYHYJYHY@CFUHYHYRq@HY@EFSHYHWHYJYHYHYH[HWH[HWHY@EFSHWJYHYHYFSh@kB\\mATs@Rq@Rs@Rs@Rs@JYHWLc@Nk@Rq@J_@FSHYRo@x@uCJY?ADOZeALe@DIRs@La@Nk@HYTs@J_@J]XaALc@Pi@Rs@HWRs@Rs@Rs@Rs@Ts@Rq@Rs@Rs@Ts@Rq@Rs@Rs@Rs@Ts@Rq@Rs@Rs@HYHYHYHWTs@Rs@Rs@Rq@Rs@^mARs@f@eBRs@\\kATw@\\iARq@H[Rq@Pu@ZmAF[No@Ha@FYF[DW?AF[F[Hg@Hi@Hm@BKD[D[D[Fe@Fo@LsAJkAHaA?GLoBDgABk@@_@Bu@@{@@y@@K?Q?]?y@?{@?[?y@A]?]AUC_BEkAE}@I{AG{@Gy@Gw@E]Iw@Eg@Im@UoBGa@EYCUE]Ky@]kCUaBS}A}@}GMeAY_COuAMuAC]MsAK_BIoAIuA?IGiA?MGoAEoAC{@A{@CwAAy@?]A}@?uA?y@@o@?e@@y@?{@@k@?q@@q@@cB@mA@gA@k@?{@@yA@aA?U@[?]@]?]?[@]?]?[@]?[?]@]?]@a@?W?]?K?O@]?]@]?[?]@]?[?]@]?[?]@I?S?]?[@]?[?]@]?]?[?]?]?]?EAU?[?A?]?[A_@?YA]?]AU?EA[?[A[A]A[A]A]EgAI{ACq@MiBIy@WqCQsBW}BW}BK_@OcAa@eCKo@Km@Kg@e@iCg@eCe@yBe@cBAEQi@{@sCKYCKQc@[iAOe@GWGOCEe@sAe@qAGMQc@Oa@Ug@CGMYg@gAEMKUSc@]u@CGEGo@sAKWk@iAeAiCQc@Oa@ACkAoCQc@_@{@Ug@i@oAQc@Sc@CIUg@Qc@uAgDaBsDaEgJSg@AAQe@i@oAuFeMK[Si@qB}FSi@_BsEIWGQkByFu@kCMc@EKQm@CIKe@_@gBCKCKm@gCOm@Mk@_AmEaAaGk@cE{@kFGc@y@uF]wCQ{AAIe@aFEo@SkCAOQoCKwCCm@a@yJGyAG{ACi@WwG?KCa@Cq@GqBCq@Ca@Cq@SwFWaGKiB?MOkCAAQ{CAGM}AEs@Gs@U{COoBCUASMgBOeBEs@C[I{@AOGs@Es@Gq@Gs@Es@Gs@AUE]Es@Gq@Gs@?KEg@Gs@MgBSeCCY?ACUCYCYCYCUGq@Eq@Gq@Es@OcB?KE]?GGq@OcBGq@Gq@Ca@AEAIUwCMcBCYa@_FGq@Gq@Gu@AQGq@Eo@AOQoBIgA_@uFGq@Cg@AGUsCWqCGo@UsCUqCOaBGo@Ee@AKQ_BYqCQ_BIo@Gq@Gi@AEGo@Ec@OaBIo@Gq@]_DGo@[qCIo@C[ESY{AMo@CKY{AAEIi@Io@Kq@Ko@CQG[EYEUc@mCEQE[CIIc@EQ_BmH[{AEQWiAKc@a@cBOk@Mm@_@yAOk@Om@]yAMe@AEQk@Om@Ok@Qk@]kACKa@wAQk@q@cCQk@Qk@GWGQSk@Qi@iAkDIQIWc@uAe@uAQi@Qk@e@sAQk@w@_CQk@Qi@KYEQe@uAc@uAc@uAQi@Sk@Qi@Qk@Qi@Qk@e@uAQi@Qk@Si@Qi@Qk@Si@c@uASi@Qi@Sk@Qi@w@_CkAiDQk@Qi@Si@AGOc@Qk@Qi@Qk@Y{@IYSk@Qi@Mc@Qi@GSIWQi@Qi@Mc@Qi@a@uAQi@Qi@ACa@qAOc@Oc@c@uAO_@CIoB_Ge@uAc@uAe@sAQk@Si@Qi@Qk@Si@Y_ASi@Qi@_@iAQk@Qi@Qk@Qi@Qk@c@uAQk@CIM_@{AwEQk@Qi@Qk@Qi@y@eCOe@Qk@Si@Qk@Qi@Qk@Si@AEOe@Qi@Qk@Qi@Qk@e@uAQi@Ma@IUY_Ae@uAc@uAEMCKK[IUKYIYCGGOIYKYIYGQCEIYKYIYKWAGGQIWKYGSCEIWK[IWKYIYKWIYCGGQIWIYK[IUKYK[IYIWIWISAGK[KWIWCIEOKYIYGQCIIWKYGQAEIWIUIWKYGUMa@IUK[GSMa@KWIWK[[aAEOIWKWK[GSACIYKYKYCMEIIYIWK[IS?CKYCGEQM_@ISIWGSCGIWIYGQCEI[IUKYCIEOKYUq@AEGQIYISEMEOKYGUWu@g@{AQg@GSIWK]EKEMIWIU?AK[GSKWK]KYIWKYIWACIWIWIWK[IWAAGUACIYKWIYKYIU?AKYIWI[GOCGIYK[IUKYAGGQKWK]IWIYCCEOIYGQK[IUCGKYIWKYIWEMCIIUIWKYKYM]IU?AIUIWM[IWIWKYKYKYACGQM]IUIUM]EMCGKYIWKWIWACIUIUM]CGAEGOUq@KWK[IWKYKYIWKYIWKWIYKYKYIWUs@KWUq@IWQi@Y_AKYIWKYIYKYIYIWKYKYK[IUQi@K_@Us@Sm@CEIYKYI[IWIUI[KYI[IYIYGSAEGWI]IWGYI]GYGWI_@GUI]EYI[COCIG]EYG]CGKo@E[G[EYEYG_@E[Ms@a@oCEYWcBCOSsA"
                     },
                     "start_location" : {
                        "lat" : 43.8487511,
                        "lng" : -79.31363759999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "42.5 km",
                        "value" : 42492
                     },
                     "duration" : {
                        "text" : "24 mins",
                        "value" : 1455
                     },
                     "end_location" : {
                        "lat" : 44.2787874,
                        "lng" : -78.298613
                     },
                     "html_instructions" : "Take the exit onto \u003cb\u003eON-115 N\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "}mtkG|yz~MDWM_AM}@SeB?AKu@K_AGm@CSAGOyACQCSEg@CYAWCc@Ca@C_@?KAWAm@AY?W?o@?i@@e@?]@a@@Y?ABo@Fy@@[BUD_@Dk@DWBQFk@Fc@DOHg@DWZwANs@@ALk@DUBKDW?EDSBWDa@B]@U@S@_@?U?SAQ?SAUAMC[Iu@EUEYI]GWEQIW?AGMGQEKEICEMYOUQWGIGIIIGIEEMMCC_@WCCMGKIICGEMEKEAAUGMCQEOCKAC?EAI?MA[?S?G@E?Q@SDI@IBMBMDKBIBEBGBKDEDEBGBGDSLSPEDGFCBKJONKNIJ?@GFGJGLEHEHGLEJCFCFEJCHEHCHCJENCFCLENEREVCLAFENI\\EVERENGTI^IVIPIRIROZMTOTORMLILMJKJOLMHQJWN?@c@Ps@Za@NOFWJA@w@XA??@CP]LUFUHA?OFUHUFQFC@SFUHSFQFUFUFSDUFSDSBC@SBM@G@UBU@I?I@W@Q?K?K?I?I?WAU?SC[CUAUEWESCSEWGMEEASGA?SISGUKSIQIi@UUICCMEWMc@Sk@USISKSGUISGAASGSESEAAUEWESCWESAUCUASAU?U?W?Q?W@S@S@O@I@Q@QBWDSBQDSDC@QDWHSFWHQDSHUHi@PSFSFUHSFWJSFUHKDE@SFWJSFSFUHUHQFSFSHQFUFMD_@Li@RSFSFIDc@LOFC@qC~@SFOFE@SFUHSHSFSFUHMDGBSHQFSFWHSFOFC@UHUFUHSFOFYHSHSFMDGBSHSFUFUHQFWHSHQFC?SHSFSHUFSFWJQFi@PODE@SHWHSFSHSFUHUFQFA@WHQFUHSFSFUHUHSFUHSFSHUHUHSFSFUHC?QHQDUHWHSF[HKDUFg@JA@SDWFUDUFUDYFw@Nk@JUFUDk@JSDmB^}@RSDi@NSFUHC@QFSFMFEBWJGBKDSJSJOJULQJUNOJUNQLSNSLQLSNSLOLQLSNQLSNSLSNQLSNQLQLOJCBSNQLSNOJSLSNSNSNQLOJMJGDQLQLUNSNQJe@ZMHEBSLQHSJUJQFA@QFSHUFQFC@SDSFSBQDC?SDWBSBU@S@S@A?O@E?Q?_@?i@?i@E[CIAGAc@GYGm@Oy@WYKUKYM]O]SUOUOSOOK?ACCSOSQe@_@OOEESSSQUUKKKIYYYYMOUSQOUUMMQOQQQQQOQQa@a@A?UUIIKIIIKKIIOMqAsAuCmCy@y@cA_AQQi@g@USSSi@g@i@g@i@i@k@i@c@a@u@u@_@_@{@aAGG[_@a@e@a@g@aAoA}@gAMO}@eAkAoAMMuAqAqAoAe@c@EEUUe@e@i@g@i@g@USQQi@g@WWQQUSQSMKGGqAmAc@c@e@c@_@_@g@e@wDqDk@k@wAsAsAoAOOYYMKk@k@KIc@c@a@_@e@e@IIkAgASSw@u@[[o@m@]]q@o@y@w@QQKIWWk@i@oAmAQQA?a@a@q@q@USQQm@k@EEQQyAuAi@i@e@c@GGQQCAMM}AyAOQMKe@e@sBoBe@c@_@_@CCcA_Aa@a@w@u@]_@SU[]QSKKCEOQ]e@QSMSQSACMSOUMSOUMUIMEEOYKSMUGMCCUc@GOO[Ug@ACMYQ_@GQYq@Ys@e@iAa@eAM]Wq@Wo@K[c@eAYu@Ys@a@eAYw@c@iAISM[ACGOCCK]Wo@e@kAc@kA[w@m@{AKWsAiDkA}CKWISCESi@Oa@Wq@Yq@Wq@KWWs@c@iAMYWo@Ws@Ui@O_@Wq@EK_@}@Yq@KUYo@KWKQACM[MUYm@MUOYCGGKOWMW]k@[k@AA[i@a@m@MSW_@U_@OS_@g@OUOSOSQUOSQQOUOQQSUYKKQQOSQOc@e@a@a@QSu@s@u@u@u@s@c@c@c@a@s@s@u@s@u@u@e@c@s@s@c@a@QQsDoDgAgAgAeAKMAAUSQQOOQOQQOQe@a@?AQQc@a@a@a@][GGu@u@a@a@a@a@US_@_@g@e@a@a@QQc@a@OOQQQQc@a@QQQOOOc@c@i@g@wBuBc@c@QQQOMMACSQa@a@QOQSQOQQOOSQOQc@c@c@c@QQOOQSSSOQQSOQCCKMQSOSOSQSMSQUQUOSOSOSMSOUAAKQ_@i@QYMSOUQW{@sAS_@II]k@_@k@GKU]OUMUMQQY_@k@QYKO]k@_@i@]k@]i@a@m@MSS]IM]i@_@k@]i@]k@_@i@]k@_@k@]i@OUm@_AMU_@i@Ye@CE_@k@]i@]k@_@k@]i@S[KO]i@]k@MOAE]i@_@k@]i@]i@OWIKEG]k@Yc@EG]i@_@k@]i@]k@]i@_@k@]k@_@i@]k@]i@U]IM]i@EGWc@_@k@QWKQ]i@_@k@]i@]i@_@k@MUOU]i@_@k@]i@]k@_@i@]i@]k@_@i@]k@]i@_@k@]i@]k@QWKQ_@k@]k@]i@OUEGIMMU]i@_@k@]k@_@i@]k@]i@]k@_@i@]k@]i@_@k@]k@]i@_@k@]i@]k@]i@_@k@EGWc@]k@S[IMOUOSIOS[OUWa@EGMUOUAAMQMUOUIMCEOUOUOUMSOUGKGIMUOUMSOWOSMSOUMUOUOUMSOUKQCCMSOWOSMUOSOWMSOUMSOWCCKOOWMSOSMUOUMUOUOUMSGIGKOUOU]i@MUOUOUMUOUEEIOOUMSOUOUMUOSMUOUOUACKQOUMSOUOUOUMSOWOSMUOUOUMUGGGMOSMUIKEIMUOUOYk@_AMWGMEGMUMWMWKQACMWMWKWA?KUMYMWKYMWEMEIKYMWKWGOCIMYKWKYKYKWKYKWKYKYIUACKWKYKWKYKWKYKYKYKYKWAAIWMYIWKYKWAAIUKYKYKYEKQe@KYKWKYKYIQAGKWKYKYKWMYIWKYKWKYQc@KWIWEKGOKWKYKYKWKYKYKYKYKWKWKYKYKWKYKYKW?AKWKYKYKWKWKYKYKYKWIUACKYKWM[KWIWKYMYKWKYKYACGS{Ni`@e@oAc@iAIWGM]_Aa@iAe@kA?Co@cB_@aA[}@_@cACGe@oAa@eAAAUo@Yq@Qe@EKO]IUWm@MYMWKWKQAEMUKW[o@MUMUOYMWMUMU[k@CCKSMQOY]i@i@y@CEo@aAW_@W][g@QUa@m@g@u@SYQYMQ_@k@]i@_@i@_@i@MUYa@U[}@sAOU]g@AC]i@a@k@m@}@QUk@}@[e@CEMQQWOS_@k@[g@QUYa@S[[e@SYOU]i@_@i@_@k@_@k@e@q@Ya@MSKOEEMSOUOU_@i@MS_@i@MSOUOUACMO_@k@Yc@SYOQEKIKOSEGGKOUOUOSOUMSYa@EIOSIMEGMSOSAAMSMSCAMSQYMOOUMSKOCGSWKOMSGKGIOQKSACOSOUOUOUA?MQOUOUMSOUOSMSOSOWOUOSOSOW]i@OSOSOUOUMSIMY_@KOACKQOSOUOUOSOUMSIKEIQWOSMSMSOUKOAAOUOSGKIKOUOUMSAAMQOUOUOSACKOOUKOACQUMUOSOSOWAAMQMSQWMQOUOUMSOUOSCEMQMQMUQUOSMSOUOUOSMUQUIMSYOUEIIKMSOS?AOUIKEGOUOQAE]e@OSOS?AOQOUKMCEOSOSQSMSQS?AOQOQOSOSQSOSQSQSOOOSQSMOSSOQOQQUQQQSOQQSOOQSOQQQOSQQOSQQOQQSOQOOACQQQSMQQQQSOQQQOQQSOQQSOQQQOSOQQQQSOQOQQSa@c@OQQSOQQSQQCCMOOQOQQSQQOSOQQQOSQQOQQSMOCAQSOSQQOQQQQSEEIIQQOQOOSQWWMKc@_@SQQMQMQMSOe@[UMe@Ye@Wo@]sAs@]Q}BoAcB}@sBgAc@UUMQIQMSISMQISKQKSKQKSKQKSKQKSKQISMSIQKQKQKMGGCUMSKQKUMy@c@e@Wg@YQMSKg@[SMQMSMQMSMSOc@]e@]SOSQa@[[Y[Wu@o@e@a@CCMKQOQOCCeA}@AA_@[KIIGOOcDqCw@o@{AqAmBaBuKiJgAaAw@o@{AsAeNoLe@a@o@k@}@u@uBiBuF{Ee@_@k@g@}@u@y@u@SOg@c@eA}@oAgAWUeCwBs@m@gDuCAAyEaEiAaAaCsB{AsAoAcA_CsBUQq@m@sBeBs@o@i@e@CCKIwIsHa@]qC_C_@]yBmBgB{Ae@a@c@_@_@]AA{AqAc@a@i@i@k@o@c@g@_@e@_@e@OUU]IKg@w@g@}@Q]Yg@a@}@Sa@Wm@GOKWM]Uo@IWCGGQQi@a@yAWaA_AuDAEa@eB{@mDi@wBq@sCw@_Dk@aC]uAOq@I[I[m@gCa@aBy@iD}@sDgDgNu@}CaA}DsBwIu@}COk@w@aD{AmGUaAo@gCe@qBWaAeAiEcAeEoAiF_@{AOm@s@yCWeAaDyMu@}Ce@kBYiAMi@Oq@o@iCw@aDw@_DaBaHcAeEkA}EqAkFAIWcAES_@wAUcAc@eB[oAI]Oq@[oACKa@eBmAaFOk@e@qBi@}Bo@eC{AmGOm@_@yAOm@Mk@Ok@EUCKEQa@aBQs@IYAIQq@Qu@I[Om@IWI]IYKYK[ACQk@Yu@KYKYQa@O]MUSc@ACMWe@}@c@u@k@{@[g@MQSYIOW_@U]OU[e@k@}@c@o@S[QYOSOSMUOSeA_Ba@m@Yc@?AkBsCm@}@AAMSQWMS_@i@e@u@kAeBYe@MQMUOSSYYe@OSOUMUOSOUOSMUOSOUMUOSOUOSMU_@i@OUm@}@m@_AOUMSOUOUOSm@_AOSm@_Aw@mAOSOUMSOUMSOU_@i@OUOU]i@]i@OSOUMUOS]i@OUOUOSMUOSOU_@k@MSOSOUMSOUOSMUOUOSOUMSOUOUMSOUOUOSMUOS]i@OUm@_A_@i@MQ_@m@OSMUKMW_@g@w@aAwAg@y@cO_U_@i@OUMUOSOUMSOUOSOUMSOUOUOSMUSY[c@_@k@MSOUEGIMOSMUOSOUOSACKQOUMQAAMUOSOUOSMS_AwAMSOUMSOUOSOUOUQWKQOSOUOUMSOUOSMUOSOUOUMUOSOUOSOUU]GKOSOUMUOSOUOSGKEIOUOSOUMUOSOUOSWa@EIOSOUKOa@m@OUOUMSOUOSMUOUOSOUMSg@w@GIOSMSOUIOUYU]IKMSQUMQQUOSOQQSOSOSQQOSQQOSQQOOKMEEQQc@c@QQQQSSKIEESQOOSOQOQOSQGEIGQOOKAASOQOKGYSe@]SMWOOIQMSMSKSKQMSKSMSKSIg@W[MoAk@mCcAyBu@UIoCaAmDoAyAg@u@YoIuCuAg@KCWK}@[m@S{@[qBs@m@UGCiDsA{@_@]Ou@]e@Wa@We@[UQ[WIIa@_@c@c@a@g@[_@Yc@QUGKUa@[k@i@kAWo@Wo@_@gAOi@Ka@Qs@ESCMSkAKo@e@_DQmAKs@U_BO_Aa@sC}@qGcDeUWiBcCwPuBaOm@gE[cCm@_EKy@w@mF[yBYyBm@wDUeBc@{CO}@CS[uBIo@Ko@U_BIo@EY]_CGe@CIQqAM}@k@}DKu@e@gDCQ}@mGu@eF}@mG[yBCWGa@[wBOaAa@kCs@kFCOKs@c@wCM{@g@qDYqBg@mDo@qEa@gCG_@Km@Qy@Ka@Mk@Mg@Oi@CKGOEM[_ASm@KWYs@Yo@e@eA[o@c@u@MUm@_Ac@m@"
                     },
                     "start_location" : {
                        "lat" : 44.0190329,
                        "lng" : -78.6219057
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 304
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 27
                     },
                     "end_location" : {
                        "lat" : 44.2791668,
                        "lng" : -78.29549519999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e56\u003c/b\u003e toward \u003cb\u003eAshburnham Dr\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "megmGhu{|M?M?AEKYa@a@o@[e@KMUc@O[IQAAGUGYEQC[?S@YB[Hm@L[HWBCFOFMXi@Ra@"
                     },
                     "start_location" : {
                        "lat" : 44.2787874,
                        "lng" : -78.298613
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 275
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 32
                     },
                     "end_location" : {
                        "lat" : 44.2809722,
                        "lng" : -78.29315009999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNeal Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "yggmGza{|MKSa@g@cE_FOQo@aAu@eB"
                     },
                     "start_location" : {
                        "lat" : 44.2791668,
                        "lng" : -78.29549519999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.4 km",
                        "value" : 2406
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 210
                     },
                     "end_location" : {
                        "lat" : 44.300967,
                        "lng" : -78.3023018
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eAshburnham Dr\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "asgmGdsz|MeAVSDODa@Jc@D[BG?c@?c@?k@@UGkA?w@@eA@S@m@?}@@m@@C?MJG@c@?c@?yADG?_@?e@BYBE@]F_@Tc@Pm@^g@f@CBMPKNCFm@pAuAjEm@lAy@t@oAt@OHeAh@A?aA`@MBeAR{Af@m@Ti@PyAb@uCfAcDjAy@l@oBr@yAd@cA\\gC~@qDtAmBt@cBl@_EtAeGrBqA`@uAb@q@Ri@Hu@F"
                     },
                     "start_location" : {
                        "lat" : 44.2809722,
                        "lng" : -78.29315009999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 763
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 69
                     },
                     "end_location" : {
                        "lat" : 44.3006907,
                        "lng" : -78.31188210000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMaria St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "apkmGjl||M@p@?v@@p@?J?d@?L@bA?R?\\@nBNvHHlHB|CBlBBhI@RBtCBrA"
                     },
                     "start_location" : {
                        "lat" : 44.300967,
                        "lng" : -78.3023018
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 575
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 62
                     },
                     "end_location" : {
                        "lat" : 44.3058546,
                        "lng" : -78.31213529999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBurnham St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "inkmGfh~|Mc@?_BAq@@gA@}ADoCFO?_CJoB@cEHwAJ"
                     },
                     "start_location" : {
                        "lat" : 44.3006907,
                        "lng" : -78.31188210000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 438
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 50
                     },
                     "end_location" : {
                        "lat" : 44.3060094,
                        "lng" : -78.3175208
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHunter St E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qnlmGzi~|MX|AHlA?HALC\\S~BMjASnBSlBCb@BtCBzBFpB"
                     },
                     "start_location" : {
                        "lat" : 44.3058546,
                        "lng" : -78.31213529999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 137
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 22
                     },
                     "end_location" : {
                        "lat" : 44.3050457,
                        "lng" : -78.3178624
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eQueen St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qolmGnk_}MBpAn@AjCK"
                     },
                     "start_location" : {
                        "lat" : 44.3060094,
                        "lng" : -78.3175208
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 181
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 53
                     },
                     "end_location" : {
                        "lat" : 44.3046747,
                        "lng" : -78.3199568
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSimcoe St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qilmGrm_}MLHPNDF@BDLHXDtBL~E"
                     },
                     "start_location" : {
                        "lat" : 44.3050457,
                        "lng" : -78.3178624
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "209 km",
                  "value" : 208732
               },
               "duration" : {
                  "text" : "2 hours 33 mins",
                  "value" : 9171
               },
               "end_address" : "Smiths Falls, ON, Canada",
               "end_location" : {
                  "lat" : 44.9037614,
                  "lng" : -76.02159499999999
               },
               "start_address" : "Peterborough, ON, Canada",
               "start_location" : {
                  "lat" : 44.3046747,
                  "lng" : -78.3199568
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 136
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 40
                     },
                     "end_location" : {
                        "lat" : 44.3047742,
                        "lng" : -78.3182482
                     },
                     "html_instructions" : "Head \u003cb\u003eeast\u003c/b\u003e on \u003cb\u003eSimcoe St\u003c/b\u003e toward \u003cb\u003eWater St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "eglmGvz_}MM_FEuB"
                     },
                     "start_location" : {
                        "lat" : 44.3046747,
                        "lng" : -78.3199568
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 139
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 25
                     },
                     "end_location" : {
                        "lat" : 44.3057542,
                        "lng" : -78.31791539999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eQueen St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "yglmG`p_}MCoAs@@kCJ"
                     },
                     "start_location" : {
                        "lat" : 44.3047742,
                        "lng" : -78.3182482
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 496
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 49
                     },
                     "end_location" : {
                        "lat" : 44.3058546,
                        "lng" : -78.31213529999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eHunter St W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "}mlmG~m_}Mo@@CqAGqBC{BCuCBc@RmBRoBLkAR_CB]@M?IImAY}A"
                     },
                     "start_location" : {
                        "lat" : 44.3057542,
                        "lng" : -78.31791539999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 575
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 53
                     },
                     "end_location" : {
                        "lat" : 44.3006907,
                        "lng" : -78.31188210000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBurnham St\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qnlmGzi~|MvAKbEInBA~BKN?nCG|AEfAAp@A~A@b@?"
                     },
                     "start_location" : {
                        "lat" : 44.3058546,
                        "lng" : -78.31213529999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 721
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 68
                     },
                     "end_location" : {
                        "lat" : 44.3009552,
                        "lng" : -78.30283179999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMaria St\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "inkmGfh~|MCsACuCASCiICmBC}CImHOwHAoB?]?SAcA?M?e@?KAq@"
                     },
                     "start_location" : {
                        "lat" : 44.3006907,
                        "lng" : -78.31188210000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1309
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 119
                     },
                     "end_location" : {
                        "lat" : 44.2899463,
                        "lng" : -78.29734500000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAshburnham Dr\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "_pkmGto||MNg@BKFKDGBEHIJG`@[p@StAc@pAa@dGsB~DuAbBm@lBu@pDuAfC_AbA]xAe@nBs@x@m@bDkAtCgAxAc@h@Ql@UzAg@"
                     },
                     "start_location" : {
                        "lat" : 44.3009552,
                        "lng" : -78.30283179999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 km",
                        "value" : 1183
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 99
                     },
                     "end_location" : {
                        "lat" : 44.29369,
                        "lng" : -78.28352959999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eLansdowne St E\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ekimGlm{|MWoBIg@?Aa@_CYgBk@sDIi@m@}DIa@Ii@QkAKo@I_@Ms@Mm@O{@YgAQo@}@}Cc@yAYcAU}@Mi@WgAOs@Ii@Kq@EWO_Ao@}D}@_GKq@O}@UsAHQ@C?C?AAGKu@"
                     },
                     "start_location" : {
                        "lat" : 44.2899463,
                        "lng" : -78.29734500000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "183 km",
                        "value" : 182848
                     },
                     "duration" : {
                        "text" : "2 hours 6 mins",
                        "value" : 7570
                     },
                     "end_location" : {
                        "lat" : 44.9118863,
                        "lng" : -76.2613482
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eHwy 7\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eTrans-Canada Hwy\u003c/b\u003e",
                     "polyline" : {
                        "points" : "qbjmG`wx|MSyAGa@oA{IE_@AEAEAEKOGc@e@cDIc@MaAWcBcAyGi@oDW}AQgA_@gCkAyHc@wCGk@UiBo@{GcAyJ]yCo@cEa@uCe@sCm@wDU}AY}As@eEkCiP_@_CUyA}@uFcBoK_@yBcCeOsAmIq@eEq@kEG[_@oB]eBc@mBSu@Sq@[aAUu@]cAYs@yA{Dw@sBwA}D{@cCeA}CaAuCQi@Y}@c@uA{AcF{@aD}ByIgB}GkBiH]qAs@kCOk@Om@_@aBwA_GcAqEi@_CeJgb@EUiAeFe@wBq@{CUgA_AkEuBqJe@{Bc@kBe@{B@G@C?EAECQ{@{DMm@Ou@Om@Ke@e@}Ba@eB?AOm@CO_@eBs@cD[uAMm@Mm@CGg@aCKc@Qw@AEQ}@GWKe@G_@G]Ik@SsAAIGo@AKGc@?CGm@Go@AQEm@ASE_AAWAI?C?EAC?EKa@AeBA_AAeA@W?{@@g@@u@Bk@@i@@a@HyAZiIZsHPmDJgBToF@EL{CRqENiDHiBBa@By@@s@Bw@?K@i@?a@?c@?g@Ag@EaACm@Ey@Gm@Go@Gk@Ku@E[y@kF}BmOc@mC]aCUcBOmAEUm@_Eq@iEoAmIYqBi@kDy@mFyAmJo@gEIe@w@mFEU{@yFaAwGa@iCk@sDq@qEe@uCSyASqAc@cCc@{BUaAMk@Me@Oo@u@sCg@gBe@sACK_@gAe@uAaBqEe@qAWq@i@aBKY}@{C_@mASy@I[SaAY_BUwAiAiH]wBYaBa@iCUqAWeBc@qCYcB]aCw@aFe@mDSeBQwAIs@?CGq@UsCC[UgDEq@SsCK_B[eEQuBUqBQ}AMaAGc@AKKo@E_@e@_Ds@oEQuAy@gFy@kFo@kE[qBw@mFy@oFk@}Dm@}DKo@_AoG[mBIo@sFg^s@sE[sBQmAWeBKo@WeBE_@o@gEEUq@mEs@iE?AKm@g@sCIi@Km@Ms@YyAKm@{AeIs@}DY}Au@_EiAuGCIUsAs@yDY}AoAqGSmAYcBk@aDESgAiGeAgFsAuGaAwEwB_KcByG{AiFuA}DyBeFQ[oAgCkBoDcAeBc@g@aA{AgBgCa@s@[m@]w@Wm@KWO]IYIWOg@Me@GWI]COKe@Ig@AECOEUE[Gc@Gc@E_@Ge@CYACa@cDAGCQCUOqAY}BY}BACEYCUEYIi@G[EYESCSe@sCGY[oBm@gDEWu@oE{@wEKo@Ko@e@eCGa@a@_CO{@Ga@EOc@mCg@kDk@}D[yBCOO}@_@aCKo@cA_He@{CqBsMqAwIu@}EUuAeA{GAIm@{De@{CM{@UoACMa@mCSmAg@aD[gBQiASmAeAwGk@qDGa@cBeLc@wCQiAe@_D]}BgBkL?Aa@mC]mBc@iCi@_Ds@eEs@oEYeBCQIk@O}@[sBk@iDKm@SqA{@gFSqAKi@CUIe@y@cFACo@aEq@_EKm@i@gDyA_JG]s@iEW}Ag@_Dg@yCWeBa@cCo@eEIi@eAkGQmAc@mCG[[qBKo@iBkLcBkK?Ck@mDO_AQeAQgAMy@a@iCMy@Kw@E_@ASKeAKsBEeA?KCg@GmBOsESoCCo@OaDK{ASqBG_AQ{AQoAE]Mw@QaAMq@Ia@I[Mm@S{@cAmDo@kBg@qAsAqDQg@ACSg@g@sAi@qA{@yBUi@Yq@Ue@Wg@S[MSKOYa@W]]c@}@kAo@u@[_@oB}B_CuCuAcB}@eA{AmBW[i@q@qBcC_EcFIK_CmCu@y@EEWWq@o@m@g@WScDgCYU[Yo@k@MOgAeAeBiBeDkDqCyC{CeD_GkGkAmAQOq@q@s@}@OOa@c@SSSSi@e@g@e@g@_@cAs@e@[o@a@AAYO[QKE_@MiA[aBi@a@OkBu@_Ae@a@Q_@Sa@SMGs@_@ECa@Sk@[]SUMKGSIWMICeA[o@SWIYKa@OaAa@ECCAm@Wg@Uo@WWKGCAA_@QmAg@UKCA]OA?KEUMOGa@UYQ]SMMIE[W_@[u@k@_@[]WYSy@q@k@c@QOc@]IEUSGEEC[WSOGGEEw@m@AAu@k@a@]i@g@YWUUa@c@OQGGOQe@k@g@m@Y[SWQSEGc@g@i@o@g@o@k@o@i@o@W[QUEGo@u@]a@U[OSYa@_@o@c@w@We@EIc@y@w@{AgBcDMY[k@e@{@Ug@a@{@Wm@M[IWCEIUKYQk@M_@I[IYGWU}@I_@EM[{AMm@GSSaAOs@I]_@eBWiAUaAACUy@g@_BISOc@Wq@Sg@AAUk@Q]Sa@Ue@g@{@c@{@Ye@QYQ]Wc@k@aAe@{@Yi@_@o@O[k@cA{@{AiBcDQ]c@u@ACIOMSWg@oA{BQ[k@cAMUg@}@KOSc@IOUc@KOk@}AUk@Uq@Qs@Qq@Ia@Oo@SaASiAQqAa@eCGc@QaAEQKo@O{@Ia@k@eDa@uBYgBg@yC_@{BOy@AEa@aCYcBIa@UwAQaAKo@QgAMu@m@aDo@yDc@mCeCaOg@sCAE[_Ba@gBGWe@aB[_AM_@Sg@IUMWM[CGWg@O]EGmCcFWe@IQMS{BeEoBuDyAoC[m@Ue@We@Wg@Ue@KSKQ{A{Ck@kAy@_B{@_C]_AUg@Ui@s@cBk@qAqAuCYq@Ug@k@oAO[gAcCoAsCCIAAUg@{D{ISe@IO}@yBiAkCiAaC]o@u@uAc@w@EGEIGIIOcHyKMQKQEGEIs@gAc@s@_AyAKOEGo@cAeMwR_@k@IMGKMS]g@Wa@kCcES]o@iA]s@IUYs@Wu@a@wA[qAKc@WqAEWIi@MaAMmAIgACgAAUKmECmAE_BGwCIgHCiACsDCeDC_BAaACmBEiDAqAK{HKmKCeBOgPKaFAaAG_FI_JEuC?s@AICwCEyF?s@CcB?q@Aq@AkA?i@@]Bk@Bg@@QBq@Dc@PmB?A@ITaBHo@@CJw@jAyId@}EXqCRuCReET_Gx@kPH{AFkALmCBsBAeBK_BKyAKkAkAkNe@uFOaBwB}Va@oEIy@ScBqBaPw@yFiAqI_@oCgB{MUeBIo@SaBOmAUgCc@uGm@{Is@kKc@iHk@yIiBgYEi@o@yIi@{GSuCa@mFOiBg@yFQuBc@uCWuAq@kDMg@w@wD]{AMo@ESe@sBk@iC_BkHs@{BiAeC}EcK}CsGe@cAcEuGkD_FYa@Ya@m@{@EGuBsD_AkBY{@y@}BGSIWyA{EQk@a@uAQk@Qk@Qk@Qk@Qk@Qk@EOK[Qk@Qi@Qk@Qk@Qk@GUGUMm@Om@Mm@Kc@AIKo@Km@Kk@OeBkAoI{@eGE[U_Bw@oFS_By@_GcAgHU_BWaBQcAs@{DESUgA}@uEkA{FMm@Mq@yAoHa@wBWmAGWYqAMs@o@aD_@oBcAaFuA_Hs@cDc@gBuDqO{CeMOm@w@}CEWOm@YwAs@wDe@{C[kCGq@eAgKOcB{@wIOaBGo@Iq@sAiNi@sF_@cEIq@WqCGq@Io@QiBGi@Io@Io@UoByAwHMo@u@yD[}AMm@Y}AMm@y@eEUkAKo@SkAc@mCe@mCKm@Ko@Mm@Ko@Ko@AEm@wDKo@Km@Ko@c@mCgA}GKo@Km@sAmIc@mCKo@c@mCKo@Ko@c@mCKo@Km@W_BW}AW_BKo@Km@Ko@{@mFKo@Ig@Ig@QgA]uBeAqGaBiK{CeRKo@i@kDQaAMm@s@{DKo@Mm@Ko@Kg@AEkAkDw@_C_B}ESm@Qk@w@aCqA_Ey@mCiAiDw@aC_@iAaDyJmBcGAEsC{Ia@oAQk@AESi@gAmDGOsAgEgAgDgAiD_@kA}@qCY}@IWSi@Qk@e@uAe@uA_@mAQi@m@mBa@kA_@mAQk@Qi@Y_Ag@aBk@eBc@qASq@_@}@W}@u@cCo@mBGSs@}BACs@wBiAqD]kAGMIWGSQk@Si@Qk@K[EOQi@Qk@EKQi@[eAcA_Dg@}A{@iCw@aCw@aCs@{BaA}CwAmEc@uA{AyEmAuDAG{@yCa@sACMOk@[aBeAyGi@uD{@mF?CKi@CUi@iDQeAm@{D{@oFqBkMuAuIi@uDs@kE_AeGa@uCKy@i@aEg@uDAIy@cHiCgTy@aHi@wEo@qFcJ_u@W{BqC{TScBg@cES}AQwA[cCMw@g@aD_@wBa@qBq@{Cu@{Ci@{Bi@}B}AoGoAoFYoAc@sBg@iCi@wC}CeSQgAQiAwE{Z_CiOUiBUyAGo@MiAEu@GkACeAAsAAy@@OBkADsADg@B]Di@Fi@JcAZiBT{Ah@kChCwMbAeFx@_EjBmJBGp@qDP{@VoAh@kCLm@@KdAiFr@oDrAuGtA}G\\gBx@cE`A{E`AcFVqALm@XyA|@oEH[Ls@XyAJi@f@_CTkANy@`A}EDUt@mDD[Nu@Jk@Fe@BOD_@D[LsAHsA@s@Bo@?A?sA?oAAe@Aq@?EIkAMsBCg@a@cGYeFg@{HAEQcDC[YeEe@_HAI{@}Nu@qLc@iHa@qFKiAASIu@K_AKaAAIi@yDAEoAuIw@iFmAmIWeByAeKiAqH_D{ScAmHcA}GoDaVmBmM]aCO_AOiAYqBK_AI}@MsA?CG{@GeAGoAGoACcAC{AAsAC_H?o@CsG?]AgDAgAA}@?CCcAIuBGmAIcAIiAQqBCUUiB[iCaAaISkBMkAMwAEe@Gw@IaBI_CEaB[qRAq@Aq@CcBAq@A_@EwBAq@Aq@?]EyBAq@GqCImEAo@AcBA{@@_A?wADuBF_CDmBDsABgADiA@]@e@?KBk@B_A?k@@Q?_@?]AaAA}@Cy@Es@KsAWyBSgBu@sF]eCMu@?CKk@GWMi@Mg@Qo@Wy@Wq@Um@KU]w@g@gA}BgFs@_BgDsH[u@k@qAgBaE]w@_@_Am@yAOc@q@kB_@gA[cAUw@Uw@Sw@]uAK]u@iDQ}@AEOu@Ko@CMuAgIeAcGMw@e@oCYeBg@aDg@cDG[{@kF{@iFEWy@eFKqAMyBKiCGqDCmEAiCEkFGaF?c@GqFCw@GsACo@Ee@IcAOwAQ_BSwAMs@UwAg@}Ci@gDO}@iAeHa@eCIo@g@{CoAaIc@kCQiAu@sEIm@q@_EKq@s@mE_@cC_@_C_@}Bi@eDGa@i@{CuAoI_AaG]uBKe@k@kDy@uEMo@Km@Mo@WwAsAqHUkAY{A_@_Cc@{CKs@Ko@e@}Cc@qCy@wF]uBm@}Di@eDWcB{E{Za@oCc@mCKo@U_BKo@Km@Ko@a@oC}@sFW_BKm@a@oCc@mCSqAYmBACIk@u@iEoA_IKo@gA{G}CiRY}ACOa@kCoAuHaAeGKk@o@mDCQKo@Mm@W_BKm@?A}@gF{@kFACyB}MiDySkAiHa@eCuAsIKo@c@mCMo@oCyP_@aCu@cE[cBI_@u@yCa@wAaAsCK[_@}@Ug@a@eAoBwDu@oA{@yAyA_Ca@o@qAuBk@aA]s@Yq@k@_B]mAIUEWOo@YsAQqAi@mDQkAa@oCIo@Ic@WkBsAmJCM]}BMcAOeAOcAYoBM{@Im@?AQkAESGm@S{AY_CKiAGq@Gu@Em@ASA]K{BCkAEcAKkFEgBAk@EgBMsCKcB[eGIuAGaA{AqWMsBEs@c@uHOqCO{BUqBSkBm@{DOq@Mo@i@mCMk@S_AeDyOCMWmA}@iEmAuFqAcGaA_EcAaEg@mBoCqKg@kBOm@Om@o@eCGQG[oAaFOm@IWi@wBoA}EOm@aAsDOm@g@sB}@uDGSe@cBQo@w@wCe@yAOc@w@oBw@kBoAqDaAaCiAmCm@{Ae@sAi@{AwAcE{@cCEK_AeCwCmHe@iAgBmE_AcCSi@Qi@_BuEkAmDcAaDSo@iBaGAAOi@IW_AmDm@mCEUMm@cAiF_DaP_@wB_@sCKuAIgAGiAGqC?cA@yA@U@[@UHmBJcAZ_DZoBBQZ}ALm@`BeITkADOLo@t@sDj@qCV}AHo@ZgCLoBHyANiE?EJuC`@wN\\oKVwI@g@BcB@eB?{DA{B]mNIkCc@uPs@wVUmHaBql@Cq@_Am\\M{CQ{CS}BUyCe@uFMcBa@mDa@wCUaBYaBmA_HY{Aa@{BOu@Km@OgAIi@OiAg@sDm@cF?Ag@aEQuA_@{CUkBg@aES{AIu@Go@Ee@AEGs@GeAOwC?SEq@?MIiBOaC?GM{BO{DKkCGoAGuAMeCE_AGgA?OC[AU?GCa@EaACi@AWG_AEy@?CMuC?AIyAKiB?MEs@Gq@Ea@Gg@MgAMaAO_AEUEWI_@COG]S}@AEMg@GSYcA?AQi@g@{A]eAi@_B_AsCKYy@aCQg@uCwIc@uAmAkD_AqCo@mB_BwE_@gAWs@Yo@Ug@EIYi@i@}@g@w@{@iA_@c@m@m@m@k@g@c@i@a@[WWUu@m@m@e@c@]QMWUOK_@[c@]YUi@a@OMYWsAcAWSYUKI_@YGEECOMc@]u@o@aAu@GGSQIGAASO]Wg@c@_@]WWa@c@[_@Y_@QW?AW]Yg@CECCOYAC]m@oA_CaB_DmA_C]q@KSWc@EKIKOYO[_@m@MUg@{@]m@g@{@m@gAi@}@U_@S]c@q@CGS[[c@]g@W[_@c@IKIKGGSUIK[]_@_@k@k@YUa@_@]Y]YUOo@e@g@]]Ye@[[S[U_@WOKe@]GEA?UQMMq@c@m@c@c@[_@Wy@m@y@k@o@c@y@k@IGGEe@]OKIG[Uo@c@i@a@a@[YWWWYWQSa@_@WYEEg@i@AA]]GIGEKMy@y@AA_@_@a@_@]]c@_@{@u@QMgA{@eAs@kBmAcAk@IE_@Sm@]sCwAuAo@}@_@{Ao@w@Sc@Ke@Km@KeC[_CSkC]YI_@KcAY{Ak@MEe@WOKMG]SSOAA]WQMWSg@a@m@e@o@i@e@a@i@_@a@Wc@WsAu@cAa@IEm@YyAs@_Bu@_Aa@oA_@iBi@w@Oa@Kc@K]K[KICk@S]O}@c@_@Qe@WeAm@s@_@CA_@UCAsAu@kDkBKE{BmAqAs@m@[AAa@Uk@[UKsC_BoAq@a@U]QAAa@U_@SAAaCqAeB_A_@U]QQKmAm@AAIEaD{Aw@a@EA]QYOoAm@eAi@u@_@u@_@aAi@m@]CACA{@m@]WIEm@g@qAgAyAiAoAgAm@g@w@q@}@w@OMAA[WAA][_@Y[WAACCw@q@_@[YWA?AAq@k@k@e@o@k@WU_@]MMQSGGAASSe@k@gAuAaBqBiAyAACGGSWW]CCY_@Y]c@m@U[QWS]O[MUCCACUg@Sg@Oa@Uq@K_@CKGUEQ?EK_@CMIa@Q_AScAQ_AKk@AEKk@?CG[CMG_@Q_A?CESMs@EWG_@AIACE_@Ga@Go@Eg@Gu@Ce@A]C]Ae@Aa@?]?c@?C?c@?g@?S?E@YBm@Bq@Dm@Fw@Fq@BWhA{KVwB?GFk@@C?CJ{@Da@D]J}@@CDc@Jo@L}@Lq@Ji@Pu@Nq@Po@T{@No@Ni@T_ANm@BGFYLk@BMH_@Hc@F_@J{@Fg@B_@Bg@Be@BaA@y@?g@Ai@Cs@Cg@s@aFUgAa@wAc@kAs@{AcAyAy@_AMMmAkA}AqAgH{GoAeAk@c@OK}@g@aAi@gAk@i@[AAk@[w@e@w@g@w@i@ECm@e@q@i@s@k@q@m@i@e@OOaB_B}@_A[[eAiAQQoAqAm@k@oAsAY[SQgAmAyAwAoAsAsBuBUWa@a@AAaAaAsAuAo@q@EEy@{@cBeBqAsAo@q@mAkA{@aA_A_ACC_@a@o@o@k@m@A?kAmAaAcAAAg@g@u@w@w@y@{@cAe@q@u@sAmAeC}@qBQ]cAaCuA_Ds@_B_@y@s@yAwBqDsAwB{AyBkAiBqAwBaAyA}@yAi@u@IOk@u@g@}@_@i@KQU_@y@mAc@m@]i@o@eA_@o@AEUc@Q]CG[w@K[M]Ww@ESSs@EQIYk@aCK]ESOm@w@}CI[EOgCmKeAkEm@aCi@yBUaAWcAYeAg@oBg@sAa@iAq@wAoAiCs@sA{@aBu@}AaAmBo@oAcAoBo@oAcAqBo@sA_@eAo@oB_@yAu@aE[mBGa@QaASkAG_@]oBKq@My@WeB[kBSaA[qBO{@CKW{AS{@Ia@Mo@Sw@m@{Bk@}Bq@wBm@iBoAeD}@cCa@_A{@qBq@eBa@cAw@kB{@eCYcAq@oCm@{Ce@iDgC}Qe@kDw@sFWiB_@gC_@kB_@aBWaAa@}AaAkDYeAe@aB_@uAo@}BSw@m@sB_@mAa@yA]mASs@]mAU}@q@cCi@mBGUWaAmAiEUu@{C_K?A_@oAw@}CYcAc@_B_@mASw@IYy@qCMe@q@eCsCeKCKcBaGq@cCe@cBCI]mAa@uAYaAUo@]}@_@{@a@_AUa@Wk@}@{A]k@o@}@IK{@cA_@a@UUe@g@c@e@w@y@g@g@CCy@cA_@e@q@}@k@}@CEo@aA[i@QYaAeBiCsE}AoCyBuDq@mAWc@i@_A{AoCoAwBc@w@i@}@_@q@QWWe@EIQ[We@k@aA{AmCa@u@CE_AaB]i@?AiAoByAeCg@{@OYw@uA}AqCqA{Bs@sA_@m@Ua@e@{@{@yA_@o@}@}Aa@s@k@cAO[i@}@q@gA_AaBMW}@}AiAsBwAeCu@sAg@y@w@uAAAoA}Bc@}@i@gA]{@w@uBc@kAm@kB]}@_AqC]aA_BwECGw@aCy@_Cc@sA_AqCK]Qi@yCyIgDwJCEqAeDCGi@gAcAqBw@sAoAkBm@w@wAkBcB}BqAcBgAcB]k@QWgEwHo@kAo@iAWe@aAcBiBiDyBmEq@wAO_@}@wB}B{FeBoE{BwF{@{Bo@yBuAaD_CuFSg@uAcDUg@k@uAg@mAUg@}CoHq@}AQ_@Wg@g@gAi@cA]o@Ye@a@s@]k@GKU]k@}@{AuB]g@eBcCIMkCqDu@eAGIQWe@q@U]u@cAGKQUQYGIKOq@eAMSKQMSKOWg@Uc@a@s@a@w@OYKQg@_As@sAw@wAgBaDWe@IOMUMY_@s@Sa@ACu@yAu@qAq@mAIOWe@KSc@w@OWGMc@y@Yg@o@qAGIg@aAEKo@kAYe@S_@OYMUGMOWKQIOIQIQACKQIQMWKWIUKUKWIWKWIYK[K[Mg@K_@Oo@GUCMMe@Qy@c@wBi@mCa@oBI[Mm@a@oBYuAKe@Kc@Me@K_@Me@Oe@Mc@M]IUQi@Wm@m@wAGKaAsBs@wAUg@_@w@kAcC{AaD{AeDSc@AA}AiDsA{C_BoD_BmDeA}BUg@EGyAgDwGoNm@sAUg@Wm@i@kAWm@M[M[KWGOIUKWKYK]AEEMIUAGAEGQOm@Om@GSOk@Om@Sw@Qy@GWMg@AESy@[wAYoAw@cDeAkEOg@KYK]K[IUSi@K[K[Wq@Uq@_@cAe@yAUq@Qe@s@sB}@iCUo@Y{@Uo@K]KWGQQk@GQ[cAQk@Oi@K]I[Qo@U_AQu@q@mCOk@GQ_A{DsAiF_AsDU{@GWGUEQG[CIKa@GYIa@Ic@COG]AGSeAc@mCAK[iBSoAIg@_@gCIg@Ik@SyAIo@a@wESmCSaCAQ[eDY_DCQIs@Ge@Ga@Ic@Ke@Ig@Kc@CKGYI[GWUw@Oe@CEK]O_@KWK]MYISIQUc@i@}@[g@kAkBGMqDwEgA}Ay@cAcB}BcAuAYa@e@m@OSkA_Be@o@a@i@[a@i@q@W]AAW]e@m@]i@g@s@cA_BgAaBaAyAsDoFCEs@eAW]CCYc@KOe@u@EEaAyA]e@Ye@a@k@w@iAoAiBOUYc@g@s@KOu@iAu@gAU]IMOSGKSYYc@S[Ye@AAOWIMGKQ_@KSMUKYIWGOCICGK]Ka@K_@G]Mm@Mo@Iu@Ea@CWASCYA[C[A[Ac@CaACiAK}EMwEGgBAYEoBIeDCkAAWAq@Cs@Cq@AY?WGqBEoBIwCGaCEuBGkCEuAKqEMoE?AAQ?M?O?A?QA[?W?s@@i@?]@a@@e@@_@Ba@@[B]B]B]D]Bc@Fc@Dg@Fa@F_@Fa@Hc@Ha@Hc@Li@Jg@Nm@T}@V}@Ty@HYDS`@yARo@Pu@T}@Nm@Lm@Jm@F_@DYD_@F]B]@M@EBWBS@WBWBa@@]@[Ba@?Y?Y?W?]@]Ae@?a@Ac@Cs@Eq@AY?EAQE]C_@E_@EYAICOCSCQESCSSeAKi@UkAOs@[yAGUEWGUKe@UoAO}@Kg@G_@Gc@CUAEGa@Eg@Gg@Gq@Ce@G}@Gy@Cc@Ey@Cw@?QCu@C_AEiA?ICq@?MQaHGkCGoBGuAEoAEy@C_@A[Gu@CUASCSGq@CYSyBQcBi@aGWiCEm@Gq@AIGiAEw@Ck@Ci@Aa@?_@?o@A_@?]?A?]?S@K?S?c@@[Bu@@]@o@By@Bi@@W@i@?IDaAB}@B}@@I@g@?KBk@Bq@Bu@?A@q@Bw@F_B?IDsADgAFyADuAD_ABo@?GFcAF_ALkBLgA`@{Et@_JDq@ZwD\\qD`CiY|@kKTsCd@wFFo@VuCDo@NcBvAwPRwBB[Fq@HaAJqABSB]Dw@BwA?E@sA@uAAuAAaB?CAo@Ca@GyAIyAI}@O}AE[Gg@AGSiAW_B[{AQ{@EUe@qBoCoLqA_GOm@c@oBe@uBOm@gBaIGWcAmEw@eDEQgBsHs@eDe@}B[yBO}BCiAC_AGyDAgBAs@AcBAq@?s@?II}IMgKCkBGoFA_AA{ACwACcACaAEaAIaAIw@?AOgAOaASqAQiAQaAIo@g@oCIg@Ii@Ge@Gk@Gi@Gm@Gs@Ee@Gs@A[Cg@?AK_E?aB@sA?WD_BB_@Bo@?AFeBDo@Be@@KLcDBe@NqD@URaEHkBJuBPqDBw@Bq@Bm@HgBBq@?ADo@D_AL}APoBNsAPyABYDWR}AToBXaCTaCBUDq@Dq@JuBFoB?gBA{ACwAIqAImAWgCWuCk@iC_@oAa@wAi@sA[w@w@{A{@yAm@aA]m@m@}@Ya@wBcDmC_EgAmBm@qAm@iB{@wC]iAiAgEo@sBm@{Au@sAyAaC}AgCU_@CEyAuCm@}Aa@kAa@kAUy@CEMe@EOSw@ESMm@CQG]Y}Ak@wCiAqGKm@Ko@UqA_@_DAIg@wFg@eHEi@_@yFQaBMeAS{AKo@Ki@YqAU_Aw@cDgAoEuCoLo@oCc@kBo@eCGWOm@K_@EKc@yAg@yAa@aAw@qBc@eAOa@K[Uw@ACUw@WeA]eBYiBOmAq@qHu@sIq@aJe@iG_@gFMaBCQMaBE_@I{@OgAQaAMq@Uy@Yy@Sm@KSeAwBaAwAqAyAAAs@q@_Ao@UOkBgA[S}C}AsAi@y@YkA[iAU}@Kq@G_CSC?yAO}AY{@USGyAm@cAe@aAq@uAgAaAeAQUYa@W]u@qASc@i@oAe@oAAEOk@Uw@i@gCgBqJMm@s@{DMo@aAkFKm@oA{GcC}Lw@yDMo@[}Aa@oBgAiEWm@Ug@c@_A}AoCuB{BcDwC]Y_E}DMMuBuB[]{@y@iBkBoAwAMSy@kA_AeBg@yASi@q@eCAEMg@Q{@[kBIu@G{@Ew@Eu@EaBKwDSoGQ}DCq@?A?ECm@EuBEiA?IA[?KAIEaAI_AAIKaAS_BG_@Km@WaBAIIc@O{@Y}AIc@]kBIa@Ko@AK]}BEOIc@AKIc@AI{@cFg@yCIc@Ie@EWEWKm@AECOGYAMUqAESY_BEYIg@AG[{AQqAQ_AQ}@[eB]uBoAsHe@wCKo@Ic@CMI_@Y_B_C_Nc@aC}@mF}@mFMm@}@mFKo@e@mCoC}OE]}C_ROgAUaBIm@Gq@IkAKgBASIcCCeAEeBCcBCkAAYAq@Cq@KwEE{AWaJAq@GaBCs@Cs@Cc@MgBW_CE[Ko@Ga@SmAG]Mo@G_@_@aBa@uAgAaDq@}ACEmA}Bi@}@oCoEwDcGYc@q@gAkAkBkAkBkCcEkCeEeBoCYc@kFwHIKwAgCYc@i@_AEKsA{C}@cCe@qAgBiGqAgFeDqMI_@aE_POm@oAaFOm@a@{AcDwLAEOm@}AqG]{AmB_IMm@}A{Ga@mBSeAIy@Is@KoAGgAE{@?WAc@?OAkA@y@@kAXeHLoDLqD@q@@WDgB?iAAgBCeBGaBK}AG_AKiAM_ACSE]E[WeBOu@[yAg@sBK[W{@gA{Ck@qAg@cAeAiBe@s@IO_AsA}BgDcA_Be@{@AA]s@IUa@gA]gAeAaEa@eBYoAmBcIa@cBm@iC[{AgAqE]cBMm@Ks@Is@KeAIuAAMCiACiAIeGGeCCq@C_AKwAOiBWmCWqBkA{Ho@_Ee@yCoAeIKm@Ko@OcA_AaGAIiAkHS_BMkAIq@EYeAkOs@}KUcDCQg@iHAS]yEO}AQwAWgBQeAYuAaAyDcCwJi@yB}@mD[eA[aAi@uAiAsCgAoCk@_Bm@{BYsAYgBIo@MaAM}BE_C?IAcB@eA\\aHHqAD}@H}@NcCRgDf@uI@KLoBFkA@_A@[BoA@}ACkAAo@EgB?CKmBU}CMmAGo@?E]}Ca@_E_@yDIo@a@gEOwA[{CE]QiBI{@Ei@ImACm@Cs@?OCoB@cB@cC@mBBwC@eBBiEBcDAuAA{@E_BAMCc@Ck@?EGq@IqAKaAC]I}@SoBKcAQkBAMYaCIw@E_@Mw@Ii@Q}@Mo@g@wBUy@_AeDe@mBWmASmAGg@AGWcBMmAQwASgBUmBIm@y@kHg@_EGg@?GMeAE[WyBMiAAEKeAMiAEs@OiBM}AQuBMwAWsCCYMcBEq@C_@IcAGq@]eEEg@?IYwCU_CK_AAOUyAOq@[oAGWk@iBw@wBgEmLa@kAk@aBa@iAe@uAe@}AAGSy@_@cBQ{@SkAKy@CW]kCe@uDoBwOi@gEm@oFY_CKcA[mDgAuMOaBe@{Fc@uCM}@Os@[{AW_AI]kAcEiCcJs@gC[gAy@sCoB{GMi@c@}AIYSs@Qs@a@kBS_AAG]{BAIKq@Im@?AKiAIw@KuBIsB?c@EyDKoP?q@EgGEsFIwJEaC?AEo@ASK}B_A_IwCmS{CcTU_BIo@cAaHIo@U_BcAaHaAaHa@oCa@qCIo@cBqLKo@g@oDCQIo@Ga@O}@Ko@Ko@Io@Ko@G[ES[{A[wAgBqGOk@sA_Fs@kCa@sAy@yCcAqDwAkFeCyIq@gC{@yCg@kBs@kCmAcF}BeNKm@gCmOKm@{CuQQeAcB}JiA}GiA}G{@mFMo@c@mCKo@cB}J_DkRKo@WyAiBwK[kBSsAKiAIq@?ASgCe@cGcAsMUyCeCm[SmCM}ACa@S_B?A]{CY_CIw@M}@[aCa@cD_@uCsDeZ_@}CiAgJoAaKeAsIgCyScCwRg@cEoAeKIo@iAcJmL_`ASaB{CwVgAsIKo@oAwJoAgLeAuIIo@iA_J[kCu@aGW{BW}BQkBOkBK}BGmBAOC{AKqGCcAGgB?GIoBOoBI}@Io@?AWmB[mBa@kBc@gBOq@cBmGcA{D_@yA}AcGwBqIMe@CMWaA}@gDq@eCcA{Dk@wBs@{CSy@]oAa@{A[oAc@{A[sAc@}A_@wA]oAs@gCi@gBi@gBm@cBq@eBq@_Bq@}As@{AkAeCwFqLoBeEWg@mNgZWe@_H}NiCsFoNeZk@oAWg@yDgImDoHmAgCm@uAuFmLoAkC]u@iA}Bi@kAUe@GKq@}Ao@aB?ASk@Wq@?Ck@gBe@iBoA{FWmAEYQ{@e@iCO}@{@_FWqAYiB?AUoAYqAYgA[iA]mAAAUq@GMGO_@y@[k@IOYg@c@w@KQQ[aAcBm@eAsBeDuAaCwAeCm@gAGK}AuCsBwDkAwByDeH"
                     },
                     "start_location" : {
                        "lat" : 44.29369,
                        "lng" : -78.28352959999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 2017
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 215
                     },
                     "end_location" : {
                        "lat" : 44.8980304,
                        "lng" : -76.24482999999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eDrummond St W\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "izbqGlxmpMvBuCr@cAv@cAXc@pAcBt@aA~@eAvBsCtAiBbBwBhCcDFGFK`AkAnBcCbAoA|@iA~CwDhCaDrCmDzDyE|AiB~AuBnAeBZ_@hBwBf@o@r@_A@At@_A\\a@Z_@lBaC^e@pAcBpAaB"
                     },
                     "start_location" : {
                        "lat" : 44.9118863,
                        "lng" : -76.2613482
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "18.4 km",
                        "value" : 18352
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 814
                     },
                     "end_location" : {
                        "lat" : 44.9062198,
                        "lng" : -76.0318925
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCraig St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eLanark County Rd 43\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Lanark County Rd 43\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "uc`qGdqjpMeAsB}A{C{AyCAE{BoEYk@q@sAMW_@y@u@yAe@}@GK_AoBeDuGoAeC}A_Dk@iAk@mA_@y@Sg@Ww@Qm@YgAKk@Km@Io@Iu@KiAUmCe@}FGq@Ca@IcAG}@GiAIaBEmAIiCEsCIeEIaGGoEMsHGkFI_FC{AGiEAs@Ae@SkNKeGI}EAq@GoFIgFEuAEeBKoEIeFUyOGyEKsGA_@CwBEeCIuECsBEiCEkCAcACeBAk@EkCEkDAq@AMEyCEgCCoBEyDCmA?g@?s@BaBFmAHwANuAHq@@KXeCHo@BOr@{FRaBd@uD|@qH@EFi@VuBPmAHo@Ho@BYDWHo@x@{GTiBHo@Jw@P{AHo@\\qCDWVmBBKLu@\\gBh@uBDQv@aCTw@L_@Pk@t@{BTo@Pk@Z_AdAaD|@oC~@uC@C~BiHxAoEhAmDVu@Pk@h@aB`@kATs@`@kATs@f@}A~@yCn@iBpAaE~@wCRm@b@wAPi@Ne@h@}AdAaDTu@nAwDb@wA\\oA@EHa@R}@Lq@RgBFa@H_AFqAF_B@m@@w@Au@Am@?CAs@EmEIuFCgBKkGIgHEqCAq@Am@GoEAq@GkEC_CEsCEkCM}HAc@As@C{BCiCCw@Aq@GoEIuFAmAEoCEoCG}EEyCAmB@oABo@Bu@Du@Dm@Hq@Hu@Ho@Hk@Jk@DS`AyE~@kEH]^iBFW\\aBDQLm@TcAb@uBF[DQTcATgAt@kDBMVgAh@yBT}@XeAbAeEZsAPo@BQFYJk@Fe@Dg@De@Fy@^mHTyDD{@JiBBcA@[?KAcAJm@CUEi@Ku@Mq@Ke@Oi@Yw@M]OWc@{@mA}BWe@_AgBEKgAqBO[GIUg@q@mAe@_AGI}BmEkCaFa@w@EIgAqBs@qA}AmCcEiHWc@Ye@MSsC}EgAkBSa@s@oAWk@k@qAUi@Sk@So@_@yAMc@oA}Ek@yBaAwDgDoMe@_Bm@sB]}@Se@q@{AeAmBS]sB}COSoAiBqBwCeCsDg@q@_AsAg@u@sByCe@o@oAiB_BkC[i@Wi@Ws@Qc@KWi@kB[cA}A_GoAqEcAuDCGm@_Ce@cBi@sBCM}@qDq@kD]sBKo@Ig@i@gDc@}COwAI_AEs@Cy@As@AyE?wGByE?QDgFBsAB{@Bc@Be@FaAJs@d@cDT}AlAsIb@qCZsBb@oCbAaHl@_EvDaWp@kE`@qCFc@Ly@PaAv@iFBMT_BRqAHe@t@oFZ{BRwADk@@KD_@F_ADeAB_B?uB?IAs@?MAq@Ac@AMGyCQ{FOwHGmC?k@?O?i@@c@By@JoBBY@EBYFm@D_@@IDY@EDWFc@Nu@Ha@Nm@Ng@Nk@ZcAFS@E?A`AaD`@uAd@cBLg@H]D[DYBS"
                     },
                     "start_location" : {
                        "lat" : 44.8980304,
                        "lng" : -76.24482999999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 530
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 63
                     },
                     "end_location" : {
                        "lat" : 44.90659369999999,
                        "lng" : -76.0252314
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eCornelia St W\u003c/b\u003e",
                     "polyline" : {
                        "points" : "{vaqGh~`oM@UJ{AFw@@u@@]AaA?QCiAMyCAUSeECm@MgCEcAKaCUeD"
                     },
                     "start_location" : {
                        "lat" : 44.9062198,
                        "lng" : -76.0318925
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 426
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 56
                     },
                     "end_location" : {
                        "lat" : 44.9037614,
                        "lng" : -76.02159499999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eElmsley St N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-15 S\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Elmsley St N\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "eyaqGtt_oMbAyAhA_BdAaB^e@X_@`B}Bd@o@r@cAfAsAXc@HK"
                     },
                     "start_location" : {
                        "lat" : 44.90659369999999,
                        "lng" : -76.0252314
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "244 km",
                  "value" : 244292
               },
               "duration" : {
                  "text" : "2 hours 42 mins",
                  "value" : 9704
               },
               "end_address" : "Montreal, QC, Canada",
               "end_location" : {
                  "lat" : 45.5018696,
                  "lng" : -73.5674191
               },
               "start_address" : "Smiths Falls, ON, Canada",
               "start_location" : {
                  "lat" : 44.9037614,
                  "lng" : -76.02159499999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 901
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 85
                     },
                     "end_location" : {
                        "lat" : 44.89783629999999,
                        "lng" : -76.0138063
                     },
                     "html_instructions" : "Head \u003cb\u003esoutheast\u003c/b\u003e on \u003cb\u003eElmsley St N\u003c/b\u003e toward \u003cb\u003eDaniel St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ogaqG|}~nMb@g@dAgBz@iAfBeCT]nCsDdBcCt@cAl@y@nAcBj@w@bB}B`AuAbAuAv@cA\\k@^k@Zm@@AP]@ERi@"
                     },
                     "start_location" : {
                        "lat" : 44.9037614,
                        "lng" : -76.02159499999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 872
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 66
                     },
                     "end_location" : {
                        "lat" : 44.8942899,
                        "lng" : -76.00418599999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eQueen St\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ob`qGhm}nMzA_EdBeEpA_DzAoD`@_Ah@mAxBqFJUDMDKBILk@HaAHaAL}BN{B@MHgBRgBRkB"
                     },
                     "start_location" : {
                        "lat" : 44.89783629999999,
                        "lng" : -76.0138063
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 671
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 53
                     },
                     "end_location" : {
                        "lat" : 44.889261,
                        "lng" : -76.0080492
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eOld Slys Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "il_qGdq{nMbBv@h@TNFh@XB@NFpEtA@@t@XDBd@T`FvBhAf@f@RDBFFRRPVFJNZ@@JTHXHXDRFb@BXFjA"
                     },
                     "start_location" : {
                        "lat" : 44.8942899,
                        "lng" : -76.00418599999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "6.7 km",
                        "value" : 6710
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 298
                     },
                     "end_location" : {
                        "lat" : 44.8457738,
                        "lng" : -75.95156949999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eJasper Ave\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eCounty Rd 17\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRegional Rd 17\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{l~pGhi|nMKxAp@G|@c@pBoDLINU^k@T_@nAoBPYDIVe@Ve@BCPc@@CHYd@gBBKHSJ[L_@Rc@@ETe@l@aAZe@NWHKXa@h@w@HMXc@R[DGR[JUNWDKP_@P_@J[J_@DKDST{@ViAj@cCh@_CDOb@mB^aBJe@FULk@d@oBJc@R}@\\uAj@aCDK^qARe@JYBEh@kAPWTa@HK`@o@PSfAyAzH{J`AsAf@q@dAuAX]vDcFtAiBZa@vEiGpGgIpAaBpAaBhCgDPY^e@lEyFpAaBZa@jBcC`FmGfCcD^e@bC}ChA}A|EiGzEeG`DcEjHiJbDeEl@u@X_@xAgBjA{AZ_@Za@lHeJV[vBqCr@}@`EcFfEoFpGeIxI}KNQjEsFNQlHiJ|AmBXa@rGeIfCcD`BuBr@w@VYXYXS^Ul@UbCw@"
                     },
                     "start_location" : {
                        "lat" : 44.889261,
                        "lng" : -76.0080492
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 1998
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 103
                     },
                     "end_location" : {
                        "lat" : 44.8324829,
                        "lng" : -75.9347185
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eCounty Rd 17\u003c/b\u003e",
                     "polyline" : {
                        "points" : "a}upGhhqnMx@]f@[^[Z_@n@}@`@}@n@eBbBsEz@iBJSl@gAhAeBlCkDjKyMpIsKHKvIcL`JmLrBwCvBoC`GqH"
                     },
                     "start_location" : {
                        "lat" : 44.8457738,
                        "lng" : -75.95156949999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "5.1 km",
                        "value" : 5138
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 253
                     },
                     "end_location" : {
                        "lat" : 44.844122,
                        "lng" : -75.875162
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eCounty Rd 16\u003c/b\u003e (signs for \u003cb\u003eCounty Road 16\u003c/b\u003e)",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_jspG~~mnMYy@s@{AsBeEKSEMEOCSCU?W@iA?g@?eA@e@ASAMEKAIEGEEKK]UWOQKm@c@_@UYSECkBqAe@Yo@e@YWMKc@e@g@k@Y[CAW]KKo@u@]e@SYEEYe@O[O[Um@Oa@Ok@Qq@Ms@Kq@Is@Gm@Co@Cw@?{@?cABsA@q@DwCDgCHyEBeB@q@@s@JqH@kBDuDHgEFkEBq@LcICcCAq@Ao@YeFSyBoB_SIq@qCcYGq@Io@g@gFAOEq@_@mFWeGEq@a@_JQiECq@Eq@Cq@e@eKAKIcBUiEYmFGmAc@_Jk@mKEyAAo@A_A?G?y@AoA@u@DgB@q@D_BByB?s@CeAEm@C]Ec@McAIk@GUEUMg@Sk@Oa@Qc@IOSe@Ua@]q@KOi@cAg@_Ai@aAq@qAiAuBOWoBmD[e@"
                     },
                     "start_location" : {
                        "lat" : 44.8324829,
                        "lng" : -75.9347185
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "5.3 km",
                        "value" : 5258
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 238
                     },
                     "end_location" : {
                        "lat" : 44.831956,
                        "lng" : -75.816159
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCounty Rd 41\u003c/b\u003e (signs for \u003cb\u003eCounty Road 41\u003c/b\u003e)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wrupGvjbnMDUBIf@y@tD}GVe@tHmN~AwCHMLWfAqBx@_B`BwCHQPc@Vo@Pi@@CXeAt@wCH[DQl@gCT}@x@eD`@gBvDwOlB_Il@gC|AsGr@aCd@yA@Cf@{Af@{A^eAFQJWbDaIVq@Ti@tB{FRk@dAwChA}Cp@kBh@yAd@qA?Cf@sADIr@uBRi@Na@BIf@sARi@Vu@l@aBFQJ_@HYLq@F]DWB[B[BY@w@@Y?w@Aw@?A?q@A{@CiBAcACsB?w@@{@@[Bw@@GDu@JmATkB@Ex@cHX}B`@}CRgBXcCFk@TuBLoAFu@@Y@Y@Y?[?YAYAYAK?MCYCWEYEWEWEWGUIWGUIUIUIUIUIUIWSk@IUIUIUIUSk@o@oBWy@M_@k@qBg@eBGQg@gB{AkFU{@k@sBo@}BYeA?AMk@Mo@Im@Gq@Ew@EaAAy@A{A?aBAyA?w@?mB@mCBcD@a@LcFBcB"
                     },
                     "start_location" : {
                        "lat" : 44.844122,
                        "lng" : -75.875162
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "26.1 km",
                        "value" : 26069
                     },
                     "duration" : {
                        "text" : "20 mins",
                        "value" : 1222
                     },
                     "end_location" : {
                        "lat" : 44.6520601,
                        "lng" : -75.6252331
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eCounty Rd 15\u003c/b\u003e (signs for \u003cb\u003eCounty Road 15\u003c/b\u003e)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wfspG~yvmMzDYrDW`Ik@pM_Ab@EtDWh@ERCDALARERCTEz@Qf@KRENEfBa@fRcEd@Kd@MPEPGPGPINKNKNMNMNONOLONSLONSp@}@fB_ChIuKX_@xEiG`DgEfCgDzBwCjA{Ax@eAZe@JQJSJWPi@Pm@Le@BIPo@Nq@Nq@Po@Nq@XcAHUJSP_@\\k@X[f@m@h@k@f@g@fDmDVYd@g@n@w@RUNOhBoBjFqF`CgCJKr@w@`@c@\\]|BcCjAkADE`CcC`A{@b@]NM`@]d@[`@Yb@Wb@Wb@Wb@W`@UdAm@pAs@b@Wx@e@jCyAz@e@hDmBhAm@p@_@f@YtAy@`@Yn@g@d@a@X_@Za@DKNYf@eA|CuHhBmERg@Ti@vAiDdJ_TxCiHfFaMhDgIxCiH|@uBN_@~@gCh@{AhAaDx@_Cz@cCd@qArB_GfCiHt@uBVu@j@aBr@qBbCaHrBaG`EiLrB_GfCkHfF_OxAgEb@cAJU@CHMLUJMLM~AqAlMcK^Wt@m@tGiF`ImGfOqLfBwAnDoCtGeFtAgAd@_@nGeF`BqAlEeDlCuBvAgA?AhBsA^WXSXQf@OLENARAhCs@l@UHCn@a@~AyAtFoEtHgGpJyHzD_DvEwDbIuGLKd@a@b@a@VWRUTWV_@`@i@@ArC}ETa@jAoB|BuD@A~DsGDKhFyItCwEp@iAR[n@eAj@w@j@s@\\a@\\Yb@a@xCcCpC_C\\YbBuApC_C\\Y|BmBlHgG\\[tBeB|CiC\\YxBiB^[\\Y\\YbDoCp@i@nJaIbH_GJIbH}FnD}CbA{@\\Y\\[vCgCz@u@LKhEqDvAoA|BqBrCcCjJeI\\[|BoBjJ_I@A\\YhEuDHI^YvCeC\\Y\\[^Y~EiEPOrBgBDC\\[FE^c@X[RYVe@Tc@Ti@Lc@Nk@H_@TkABUFc@Bc@Bo@@u@?cACaBIgCEkBGyCKyEMuEGmCIaEMoFCeAEcBCwBEwDA}CE{CAyCAs@@g@@i@Da@BYF_@Hg@Li@La@Pa@N]JQJQT[TYTUt@i@bAu@j@a@l]{VzFeExKcI|DoCnBuArCsB^YxG}E|AiAtCqBd@a@tBeBbAu@pAcAdCoBtHaGzEwDXW`BsAbCmBvAiA|@s@\\WtAgA|FsENMxC_ClB{Az@s@HEnDuC|@s@tAiAzCmCVUDEjCyB|CqC|BqB\\[`@]bDwCzBoBbC{BxAoA\\Y\\[vCeC|@u@\\YTQd@c@tE{D\\[hA_AlB_BrFuEf@c@p@m@`Ay@XU^Y\\YnAcAfCqB|AmA\\YtGgFHGRQ|@u@|@u@l@g@dG{E~AsA\\Y^YtD_D^[\\YzAoAzBkBxAmA\\[rFuEHIjEoD|@u@vCeC\\[d@a@pBcB\\[jAaAhEiD|@q@VU`BsAtFoE^YdA{@dCoBJInByAj@e@zAmAzAmA\\WbGyE|AmAzAmAbA}@x@m@^W|@q@v@q@"
                     },
                     "start_location" : {
                        "lat" : 44.831956,
                        "lng" : -75.816159
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "123 km",
                        "value" : 123161
                     },
                     "duration" : {
                        "text" : "1 hour 9 mins",
                        "value" : 4132
                     },
                     "end_location" : {
                        "lat" : 45.2083611,
                        "lng" : -74.3482758
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to merge onto \u003cb\u003eON-401 E\u003c/b\u003e toward \u003cb\u003eCornwall\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Quebec\u003c/div\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "kbpoGtpqlMXb@Zh@T^LT^t@L`@DX@VATCRGLADIJKJMDG@I?EAKAOGEESQMOOQSUACA?A?MCW]MSAAMSOSKMCEQUMQQSOSOSOSq@{@aAmA?AiB}BmCeDoCiDsBiCSWOSOQa@g@qAaBKMc@k@W[k@s@OQKOAAa@g@_@e@QSOS_@e@OSY_@WYOSOQ_@g@a@g@MQQSCEKMOSMQa@g@_@g@QQS[EEW[KMSWOSOSo@{@OSgAwAi@q@MOs@aAMO}@iAc@k@QS]c@QUQS_@e@OSOQOSQSOSMOuBkCCEKK_@g@OSQSOS_@e@_@e@a@g@OQa@g@OSOQKMSYq@y@OSQUMOKMe@m@OQa@g@OSo@y@QSOQOSQUi@o@c@k@CEMOOSQSOSMOECm@y@GGW]OQOQAAo@{@QQOSOSe@m@KK_@e@_@g@a@g@q@{@OQOQOSOSMOEGm@u@OQQSo@y@OQQUOSOSq@y@_@g@_@e@OQQSOSQSMQQUOQOSCCm@u@OSOSQSOQQWKMQUQSOQOSOS_@e@QUOQOSMOEEoA}AOUOQOSOQQSOSk@u@EESU}@iA]c@QUOSQSOQOSOSa@e@OUOQQS_@g@OQQS_@g@o@y@QSOS_@e@a@g@OSQSOSMOQU_@e@e@m@KMOS_@c@aAoAQS_@e@cAoA]e@A?MSQSOQQU_@e@AC]c@_@e@a@e@IMUYQS]e@c@i@_@c@W]GIaAkAyBoC}@iA]e@a@g@aAmAq@y@MQOQCCOSOSOQIKEGOSQSOSOQOSAAOQOSOQOSOSQSOSOQOSOSAAOQKOCCOQOSOSQSOQOSQSOSOSOQOSQSOQOSOQOUQSOQOSOSOSQQOSOQQSOSOS_@e@OSQSOQOSOSQSOQOSOSOSQQOSOSOSQSOQOSOSOSQQOSOSOSOSEEKMOQOSOSOSOQQUOQOSOQQUOSKKOSUYg@o@q@y@e@o@o@w@i@o@EIk@q@e@o@g@m@OQ]e@g@m@uAeBq@{@q@{@i@q@_@e@KOi@o@o@w@g@q@u@_AaAmAuFeHeDcEY_@uFeHgDeE]e@aAkAs@_A_CuCIK[a@cI_K_@g@QUe@k@Ya@mHeJiCcDySwW_AmA_AmA_@k@{@oAm@aAm@cAi@aA]m@i@eAs@{Ag@gAYs@c@eAc@kAc@kAa@kAUs@Ww@IYSq@]oASu@[sA[uAQw@CMCMI]EYI]G]EYG[G]G]G]E[G[G_@E]G[E[G]G]E[O}@E[E[G_@G[G]E]G]E[G]My@E[G[E[G]AKCOG]E[G[E]G[G]E[E[G]E[G[E]AEMw@G]E[G]E[G[E]G[E]G[E]G[AECUG[Kq@EYG]E[G[E]G[E[G]E[G[EYG_@E[AGEUEYG]E[E[G]G]E[G[EYE]G[E[G[?EEWEWACE]GYE]AEEUE[G[EYG_@G]E[G[G[G]GYGYOy@G[I[Qu@G[I[I[EQAEI[IYI[IYI[GQAEK[Ss@KYIYAC_@iAKYGSCEIWKYKWKYA?IWKWMYGQCGKUIQCIKSMYKWMS?AMWMYMUKWMUOYKSMWMUMUOWMSMWOUMUKQCEe@w@EGIOOUMUCEMUQWGMEEMSOWg@{@ACOUMUMUKOCEMUOUMUACKQOSMWOUGMEGMUOSMUOWk@_AMUKOCEMUIMEGMUEIGKOUMWKMCEMUMUOUMUOUCEIOk@aAMSOWMSOUGMEIOUMUMUOUMUQWKQMU?AMSOUMUOUMUOUMUMUOUMUOUMSOWMSMUOUMWMSOUMUMUOUKQMUEGKQOUMUOUMUMUOUMUMSOWMSMUOUOYMSMUOUMUMUOUMUOUMUMUOSMUOWMSk@aAOUMUOUMUOWMUMUm@aAEGKQKQMSMWOSMWOUMUMSOUMUOWMUMUOUMUOUMUOUMUMSOYMSOWOUKSQWIQQYOUKQOWKQMUOUOWMSOWMSOWMUMUOUQYKQMUOUMUOUMUOWMSMWOSS_@IMOUMSOYMSMUMUOUOWMSIMEIMUOUMUMUMSOWOUMUOUOWMSMWOUMUOWCEIMMUOUOWMSAEKOOWMUIKEIMUMSKOEKKQOUOUIQCCMUOUMUMUAAMSOWMUCEKOMUMUOUMUOUMWOUMUMSOWOUOWOWMUOUOWOYOUMUOUMUOWMUOUMSOWMSOWMUMSOUMUMUOUMWOSMUMUOUMUOWMSMUOUMUOUMUMWOSMUMUOUMUMUOUMUOUMUMUOUMUOUMUOUMUOUMUMUOUMUMUOUMUOUMUMUOUMUOUMUOUMUGIEKOUMUOUMUMSOWMUMUOUCCWe@]m@MSOWOUMUMSMUOUMUOUKSACMSOWKOEKaA_BCE]m@k@_AEGUa@c@u@e@w@]k@_@m@KSOUMSMUOWMUOWOU[i@]k@Q[IO]k@g@{@c@q@]m@[i@k@aAOU[i@]k@KS_@m@OW]k@k@aA]k@MU]k@OUy@wAU_@GKOUMUo@iAYc@MU]k@[i@S[We@AAm@cAu@oAGKEIOUMUMUOWMUA?MUMUMSOUMWKQCAMWOSMWGIGKMUMSMUOUYg@}@yAACQ[g@{@U]aAcBUa@iAkBkAoBsA}B[g@e@w@k@_AcCcES_@MUMQOWOU_@k@QWOUOSOUQUIKGIOSOUQSQUQSQUOQQUQQOQCCOQe@e@QQSSACOMQQSQGGIISOQQSQOKCCSOQQSOUQSQSMSQg@]SMSMSOi@]SKi@YMIECWMQKe@Wi@WQISKi@WSKSKSKoAk@QKSK_@Qq@[e@UQICASKg@WSIYOKGUKSKIG]OGCWMIEc@U_Ac@q@]_Ac@AASKa@QYOSKEAMIm@YSKiAk@SKi@Wy@c@SI{@a@gAk@sCuASK{@a@k@YOI{@a@SIy@c@g@UUMQKSKy@e@SMQKSMSOc@[SMQOSMSOu@m@e@_@QOQOu@q@QQa@a@s@u@QQa@c@QSOQQSOQQSa@g@MSOS_@e@OUCA[e@QU]i@MUm@_AOWCEIMMUS]IOOWMUi@aA}@cBWe@]o@w@{A[k@OWUa@EIMUMWOWMU[k@Ue@CEk@eA]m@Q[Ue@]m@OYMUYk@[i@Q[[k@[m@[m@[m@OUMWYg@?A]m@[m@[m@]m@[m@MUOWMU[m@[m@[k@]m@MU[m@]m@Yk@MUGKs@qAYk@OW]m@[m@MWeAmBk@eAYi@MW_@o@cAmB]m@]q@We@OY]o@]o@MUMSO[Yg@?A]m@KSAEMQ[m@IOEIMU[m@Ua@Ua@MUMUMWMW[i@]o@i@cA[k@eAqBy@yAWg@CG]m@OWMU[k@O[_@q@IQ]o@gAoBCG{J}Q}EcJiAsBWe@Yi@]m@[o@gAoBcBaD[k@m@iAw@wAYk@MUOWiBiDMUUa@MWk@eAi@aAOWqBuDMU[m@]m@i@cAOYKSqBwD[k@{@}Aw@{A[k@c@y@s@oA]o@Yk@a@u@EGS][m@_CmEWe@o@kAMUOWi@cAOWWi@_@q@MUYg@[m@gAqBO[OUQ]We@[m@g@_Am@gAk@eAaAiBuAgCOYa@u@oA_CS][m@Yk@q@mAy@}Ao@kAs@sAGKi@cAMU]m@[m@CCSc@Q[_@s@IMQ]KQEIIM_@s@i@cAIOw@{AAAoA_CWe@s@qAsAeCYk@{AqCWc@i@eAi@aAS_@aAiBKSa@u@i@cAg@}@MWo@kAk@eAi@cAMUaAgBa@u@i@eA{@_Bi@_AMYuAiCWe@m@gAc@{@IKg@cAMU]m@i@cA[m@S_@{@}AUc@_CmE_@q@y@{A_ByCa@u@c@{@k@cAMWMUm@gAcAmB[m@OWi@aA_@u@qA_CmA_Cs@qAcAkBeBcDgAqBi@cA]o@MU[k@]o@]o@Yg@yAoCe@}@i@eAy@{AOWg@_A[m@]o@OWMUy@{AYm@]k@y@}Ay@{AuAiCi@cAMWi@aA]m@y@}AYi@[m@k@cAi@eA]m@[k@[o@y@yA[k@[o@]m@i@cAOYYi@k@eAs@sAKS_CkE_D}F_DaGoA_C}BgEg@_AwAmCw@yAy@{Ay@}A[k@sAeCk@eAkC_F[k@kA{B_@s@cAmBg@aAKQ_HiMm@gA]o@Yk@QYm@kAk@eAc@w@]q@[k@O[[i@Yi@[m@k@eAKS[k@Ua@GOiEaIcB_DmA}BUa@[o@S]c@{@OWw@wAg@_AQ[MUi@eAOUKU[m@_@q@uAiC_@s@OWEIg@aAoCcFu@wAcB}C}C_Gu@uAkBkDUc@Ua@iBmDwCoFe@{@eBeD_AeB[m@wAmCc@}@Ym@c@}@y@iBg@gAMYIUc@cAMYa@cAEKy@oBu@gBCEg@mACISe@Qc@i@mAa@eASe@[u@O]EKYu@q@_BIUEE]_AO]KWQa@KUcAaCe@mAg@mAAAM[a@cAO]GQO]]y@IQy@sBGMUi@u@iBQc@Qc@Ug@Wo@M[_A}Bs@aBWo@[u@Uk@e@iAQc@_@{@g@oAQa@[y@Yq@Yq@KUg@kAiAqCYq@c@gAYq@M[KUq@aBGO{BqFi@qAQc@GOe@iAc@eAEIiAqCCEUk@_@_Aw@iBk@wAmAwCe@iA[u@Sg@EImDuIq@}AUm@i@oA{@uBaBaEO[y@oBo@_Bm@{Ao@{AuAeD[u@Yq@e@kAKUc@iAYq@Yq@}@yBYq@Wo@s@aBKWWq@MYKUKYMWc@iAYq@KWe@gAKYMWiAqC}@yBMYe@iAq@aBKWMYWo@Yq@IUKWO[Yq@c@gAe@iAe@iAc@gAe@iAg@iAWo@Wo@MYQc@EMe@gAYq@c@iAMWcD_Ic@gAMYiAqCe@iAe@iAe@gAOa@aB{DKWe@iAe@iAe@iAKWwAiDCISg@kAsCWo@s@cBWm@KWM[q@aBe@iAWo@c@iAK[Wq@k@eB_@oAIYSs@IYq@gCSu@Qu@Su@Su@CIm@{Bo@eC]qAI[Qu@]oAIYKa@GWq@gCAEe@iBSw@Ss@_@yASw@_@wAQo@Sw@]sAWaAc@_BCMiAiEcA{Dg@mB]qAsB_Ie@iB{@cDIYI[IYI[IYo@eCI]y@}CIYSw@U}@Mg@K]IYo@gCqA}EES]oAIYI[I[GYIYI[IYI[IYIYI[I[GYI[IYI[IYI[IYIYG[K[GYI[IYIYCKGSa@}Ai@oBQq@W}@_@kAWy@GUAESk@_@mAQi@Ss@Sk@GSIU?CKYK[IYIYKYKYIWIYKYI[KYIWKYK[Mc@Qi@Us@Us@KYUs@IYK[IYIWK[Uq@IYKYK[i@eBKYIYUu@Uq@aA{C_@kAa@oAa@oAIWUs@KYIYIYKYSq@Wu@IYQg@CIIYK[KYi@cBIYK[KYUs@K[GUWw@KYK[Uu@KYK[IYCI]cA_@oAK[KYSq@AEa@mAUs@K[]eAAGWw@Us@Us@Us@Us@Us@IYa@mA_@mAUq@IUa@sAk@gBKYIYKYKYSs@GQCG_@mA_@kA_@mA_@mAa@qA_@iAUw@K[M_@GSK]KYK[GWK[GQCIK[IYKWIY?CEKEMIYKYIYK]GOAGK[K[So@Ww@IYAESo@a@oAIYK]IYKYACIWI[KYIYK[IWK[IWK]IYKWK]CKEMK[_@kAIYIYKYIYK[Us@IYIYUs@M_@GSUs@K[Sq@K[IYEKEMIYIYKYEOCIKYIYIYKYK[IWIYKYCMEK_@kAGSCIIYIWK[Uu@IYKYIWK]IWK]KYI[Oe@Oe@CEGWIUK]KYCKEOKYK[IYIYK[IYKYIYKYIWK_@KYIW?CcA_DK_@ISq@yBCKKYIYIWK[M_@aA}CGUGOgB{F]iAEK_@oAk@gBk@kBCIEOa@oAIYK[K[?Aa@mAUu@Oe@u@cCo@oBAGg@_BAEWw@Og@o@sBKYi@gBUu@Uq@I[Us@IUK[_@oAk@gB_@kA?AUs@Us@IW{A_Fq@uBcH_UkBeG_@mAk@gB_@qAWy@kBaGaA_Dk@gB_@mAa@kAk@eBy@cCw@_Ca@kA_@mAm@gBcAyCa@kAIYm@eBa@mAcA{CKYk@eBa@kAa@mAUs@a@mAUo@K[Us@s@uBOe@w@{B]cA_@iAk@eBm@iB{AmEIWIYy@aCa@kA_@kAqCmIYw@w@_Cy@cCsGwRyAmEcA{CQg@[_AIWIWKYKYIWKYKYIYKWIYK[KWIYAAIWIYK[IYEKCMIYKYI[EQMa@KYI[IYKYI[IWIYCIGQIYUu@IYCKOg@Us@AE]iAIYIYIYK[W}@Oi@[eAMc@KY]mA_@mA?AIYKYIYI[GSCEIY]mAUu@i@iBIWK[I[_@mASs@a@uAg@cB_@mAg@eBACIYi@iBIYkA}DQm@IYK[EQm@sB_@mAUs@Su@IYUu@IWK[IYIY_@oAIY[cAMe@a@uAq@{Bo@wBOe@s@cCIYI[KYSs@IYK[Ss@Us@Ss@I[KYIYUs@IYI[s@cCUs@s@cCIYK[IYI[i@eBOi@Oc@I[IYIYUs@I[Qi@W_AUs@Mc@[eAIY_@mAI[Us@IYSs@K[IYUu@Ss@Ma@GQI[IYIY_@mASu@K]g@cBUw@IWk@kB]mAo@uBk@oBqB}GWy@_@qAq@}BUw@K[c@yA[eAi@iBSu@Uu@IYUw@u@aCSu@i@iBUu@}CoK}AiFa@sA_AcD]iAiA{Di@iBi@gB]mAAA}@yCAEoAkEmCcJa@qA{D{MK]}@}Ci@gBIYK[Su@IWu@gCUs@m@sBEQIYUu@s@cCUu@y@sCc@{Ai@iB_@oAUu@mBsGOg@IYK[IYI[IYIWK[I[EKEMIYIYK[I[IWIYK[I[KYK[IWCIGOIWMYKYM[KUMYMWGMEIKUOWMWMUOWMSMUOUMUOUOUOQOSQUOQQSOQQSOQQQQQQOQQQOQQQMSQQMQOA?QMQOSMQKUMe@WQKWKSISISIUISICAOEUISGUGSGKCGCUGUESEUEUCSEUEUCSEUEUCSEUCSEUCUESEUCSEUCUESCWESESCSEWCSEUESCSEWESCUESEOCGASCUESEUCUEUCUEUCSEUEUCUEUCSCUEUCUESCUEQCC?UESCSCWESCUEUCUEKCG?UESEUCUESEUCUESEUESEWGSGSGSGSIUIQGUKSISKSKSKQI?ASKSKQMSKSOSMQMQOQMQOe@a@OOOOUUOQQSOOOSOQSWKMIKU]QUOUMSOY[i@[m@MWMWYm@KWYq@K[IWKWK]IYGOCGIYK[Ss@K[IYI[KYIYIYK[IYuBcHs@aCMc@GQUu@K[]mAa@oASu@KYSs@_@mAUu@a@qAg@gBa@qAg@eBUu@Us@Ss@_@mAAC]kAOk@Oe@I[IYIYI[IUK]IYI[IYKYIYIYI]u@cCk@kBMa@e@aBUu@gB_Ga@yA_A}C_@oAOg@EMIYUu@Sq@Uw@Sq@k@kBIYIYSs@Uw@u@cCs@cCKYi@iB_CaIUs@K[Sq@_@oAkA}DeAqDc@wAiAyDcAkD{AcF}@yCSs@K[IWI[KYIYSu@KYEOMc@K[IYUu@IYIYKYI[K[IYIYIYKYIYI[KYI[IYKYIYIYI[Uu@IYKYIY_@oAI[KYIY?AIYUq@I[K[IYIYI[Us@K[IYIYIYIYK[I[K[IWI[KYIYK[IYIYIYIYK[Us@IYI[IYUu@Uu@Ss@IYKYSu@KYI[IYKYSu@K[IWGUM_@I[IWK[Ss@Uu@I[EMCKKYIYI[KYIYOg@Og@IYIYK[IYK[I[K[IWIYIYK[IYIYK[IYIYK[Me@EMKYI[IYKYI[Us@IYI[IWK]IWK[I[IYIWK[IYIYK[IYK[Su@KYIYSu@Us@Us@I[IYIYIYM]IYIYIYUs@I[K[IYIYK[IYIWI[K[IYK[IYIYK[IYIWK[I[IYIWK]IYIYK[IYSs@K[IYK[CIOi@K[IYIYIYK[IWK]IYK[g@gBa@qA[cA_@qAc@wAu@cCa@qASs@Ww@GQQm@m@oB}@yC[aAg@cBw@gCK[IWIYK[I[IW?AIWK[Ss@K[I[K[GWKYI[IYIYKYI[I[KYSs@I[IYK[IWI[I[IYK[Su@K[GWEKEOI[Ss@KYI[IYIWK_@IYIYI[IWIWK]I[KYIYI[Su@Ss@Wy@]mAIYIYSu@Uu@Uw@IYIWUu@IYK]IYSs@IYEKOi@Ss@Uu@IYKYI[IYK[IYIYIYK[IYIYK[IYSs@Uu@Us@I[KYSq@?AK[Sq@Uw@Us@Ss@Uw@IYUw@CKEMIWIYK[IYUu@IYIYI[KYSs@K]Ss@Ss@Uu@I[Uu@Su@Ss@KYSu@Su@K[Ss@Ss@Uu@Ss@Uw@I[Sq@K[Su@Uu@IYSu@Uu@Ss@EKOi@Su@IYKYI[K[GWK[IWsGsT}N}f@K[GUK]KYIYIYI[Uu@IYK[IYKYIYIYIYK[I[IWIYCIGQI[KYIYI[IYKYI[KYIYI[K[IYIWI[K[IYIYUu@Us@IYIYI[KYI[IYKYI[IYKYIYIYK[Su@IYKYIYI[KYIYIYK[IYIYQk@CIIWK]GWK[I[KYIYK[IWI]IYK[Sq@KYSu@KYIYI[I[KYI[K[IYIYKYI[Us@IYUu@Ss@I[IYKYI[IWK]IWIYK[I[KYIYIYI[KYI[IYIWK[I[K[IWI[KYSs@Uu@Uu@IYI[IYKYSs@K[IY?AIYUu@IYUu@IYKWI[IYUu@Us@IYKYI[KYIYIYK[IYK[IWK[IWI[KYI[K[Sq@Uu@IUAC_@mAI[KYI[KY_@mAI[Us@Uu@Ss@Us@Uu@Sq@Uw@Us@Su@KYI[IYKYSu@Ss@Us@AESo@IYUu@Uu@Ss@Su@KYI[IYUs@Uu@Su@EMCKKYI[IYIWK]Us@_@oAI[Ss@Og@EMSq@Uw@Uu@IYIYK[IYK]GSK[I[Us@I[IYKYIYI[IYK[IYUq@I[Uu@Ss@K[IYI[KYIYSu@Us@I[Uu@Sq@K[I[CGQk@IYIYUu@Ss@Uu@Ss@Uw@Sq@K[EQMa@K[Uu@IYI[KYIYIYI[IWKYI]IYUu@Us@Uu@IYIYI[IYGOCISu@KYSs@Uu@IYI[KYI[IWK[K[GYIWK[Uu@EOCIMa@EQK[Su@KYSu@IWUu@IYKYI[IYKYI[I[IWK[IWUw@I[IWK[IYSs@Uw@KWI[IWI]A?IYIYI[KYIYI[IYI[IYIY?AIYIYI[I[IYIYG[IYI[I]I[IYI]I]IYGYSw@I[IYG[I[GUmA}EqAgFCMIYI[Kg@Og@[qAI[Qu@IWEUMe@Su@GY_@yAGWIYGYSw@o@gCGYU{@GWGWI[K_@S}@c@aBw@aDCIEOI[a@aBe@mBMe@GYI[IYI[G[IYI[GUI_@I[IYI[I[GYI[IYI][oAIY[qAI[a@_BKa@I_@I[I[IYI[I[GYIY?AIYI[G[EOYeAQw@YgAU_Ac@eBU_Aa@}AOq@YgAQs@I[[mASy@Qq@Mg@Qs@Oo@AGK_@Mi@Om@U{@Su@Qw@Ok@Ok@Mk@Mc@Oq@Qq@Om@Qm@Oo@Qu@K_@EMOm@Mi@Mi@Oi@Ke@Ok@I_@Ss@Qw@Qs@WaASu@Qu@Qu@Ok@Sw@a@aBMg@AEOk@S{@Qq@Sw@Sy@Qs@Qq@S{@Sw@EOKc@]qAQu@Qq@U}@UaASy@U}@WaASy@I]U_ASw@Sy@Sy@U}@CIQu@Su@Sy@Sw@Qu@YeAMi@GWQs@Qs@Ok@EMWgA_@yA[qA_@wAa@aBIYMk@[kAU}@ESYmAYeAOk@EOS}@a@{AG]Ka@_@yAm@aCWcAMi@I][mASw@Sy@S{@UeAU_AQu@Q}@UcAScASgAAESeAWuAQeASmAQ_AOcAQoAQgAKy@O}@WgBSwAS}A_@iCcAkHkCaRIg@Gi@Mw@OkAQkAKw@QoAQsASuASuAYqBKu@EYSoAOeAQoAQoAM}@M_AOeAWcBOgAM_AQoAOaAOgAMy@Ku@Io@Ig@Gg@QmAKs@Mu@M_AM}@OiAOgAKw@K_AOqACWEa@G}@OoBEaAGeAEkACw@Cu@?CAu@Au@Au@Am@?_A?y@@oA@}@@m@Bw@Bs@Bw@Bq@Bk@F{@@_@De@@QBSB]H_AJmAN{AJ{@NeADWF_@N}@Hg@N}@Nu@P}@R_ARy@Pu@Rs@V}@^qA@IFQ\\kAVy@Ru@Tu@Pm@Ne@Rq@Ru@Rs@Pg@Ng@Le@Le@L_@Lc@Tu@Tw@Vy@ZgAX_ALa@Pm@ZgA\\iAX_AXcAV_ADKXaAJ[J_@V}@`@sA^oAV}@^mAXaAXaAPk@Ty@`@sAZeAPm@Pm@Rq@\\iAV{@V_AX}@Ru@Ng@Pk@Pm@`@wAV}@Ts@ZgARo@?CTs@Tw@Nk@X_ATu@Tu@@EZeAZgATw@XcATw@Ts@\\kAXcAVy@Nk@Pg@BMHYJYHYHYH[JYHYHYH[JYHYHYHYJ[HYHYJ[HYHYH[H[HYH[J[H]HYH[FYJ]FYH]HWF[HYF[H[F[HYF[H[F[H]\\aBp@iDn@gDj@iDRsAL{@`AcHh@kEXsCD]XsCZqDPaCJiA@OHsA@YR_DD_ALsCJgCJuCJqE@_@D}ADmB@a@N{FDmBBeA@m@DwAByAHsCV}LNwFL}FFeCFkCDaBXiMD}@N_ILmFToIFyADcBFiCHqCDaEAuAE_GEgD_@_PC}GAsACuAKeG?A?QMyIMmHEoCE_CAYCcBCsBAw@EeCAw@Ag@MyHMiIEaCEgCEwCEaCEiDOoIGiDAoAA_AE_CAg@EcBAOE_ACk@Eu@Cg@Ei@Cm@Ca@C]Ca@Gq@Ea@I{@CUEe@MqAG_@E_@C[G]E[CWAEE]G_@E[G[Mw@Mu@G_@GYG]G[G[G[G[G[I]GYI[G[IYGWKa@GWIYIYI[IYI[K[IWIYI[KYIWI[K[K[I[IWK[GWKYIYIYIYKYI[KYIYKYI[IWIYIYK[IYKYK[GWKYIYI[KWI[IYK[IWIYIYK[KYIYI[IWKYI[K[IWK[GWKYI[k@iBIYIYa@oAIYIYIYKYIYIYK[IYK[IWIYIYK[IYIYKYIYIYK[IWI[K[IYIYKYIYIYIYKYK[IYIYIYKYI[KYIYIYKYIYIYKYI[IWK[IYIYKYIYK[I[IWIYKYIYK[IYIYK[IWI[KYIYIYKYI[IYKYIYI[IWK[IYIYK]IWI[KYCOK_@Ka@I[G[I[GYQy@Mw@GW?EG[Mw@G_@E[QuAE]E_@MwAE]C]C]C[Ca@C[A]C_@A[C]A_@Ai@Cq@?]A]A]?[A_@?]M{LCyB?QA}@?]C_A?[?]Aa@?[A_@A}@?YAa@?_@Ay@A]?a@A]?W?[A[?]A}@?KCoBA[?_@A[?]A_@?[A_A?YA]?a@A]?[Aa@?YA_@?]A]A_BAqAAC?]?[AS?k@A]?]A]?]A_@?[?]A_@?]A]?_@A[?_@AY?E?[A]?_@Ay@A_@?]A]?]?]A]?]A_@?_@A]?[A_@?]A]?]?GAu@A]?_@A[?{@A{@A]?_@A]?]A]?_@Ak@?OA]?]A]?_@?]A]?_@A]?[AY?a@A_@AyAA_@?[?]A_AAY?a@A[?]A_@?]A]?]A]?_@A]?]A[?_@?_@A_@?[A[?_@A]?]A_@?YA_@?_@A[?_@CyA?]?]A_@A]?]?]A]?c@A]?[A_@?]A]?q@Ai@?]A]?]A]?]A]?[Aa@?W?EA]?]A[A}@?WAe@?]A]A]A]A]A[E{@C_@C]C]C]C[E_@C]E[C]E]E_@CYE]C[Ea@CWE_@E_@C[E[C[E]C[COAOIy@Gk@E[AOE]C]E[E_@C[E]Iy@I{@Iy@E]C]E[C]E]CQC_@E[E_@C]E_@EYCa@E[?ACWE_@E]C[E_@E]C]Is@AKC_@Ga@C[Gq@AIE[E_@C[E]E_@CY?AI{@E]E_@C[E_@C]E]E[C]E]Ea@CYE]C[Gk@AOE]E]C]E_@CYE[E_@C[E[AQAKE]E_@C[E]C]EYC_@E[E_@C[E]E_@CYE_@Ea@CYCYE_@E]CYE_@C[E]C[E]E[E_@E[G_@EYE]G[E[G[G]G[I[GYGYI[Sw@IWI]K[I[IUIYK[IYGUM]IYI[KY_@mAI[IWK[K[IWIYIYKYIYK[IYIWK[GUWy@Uu@Sq@Uu@Sq@Wu@I[K[IWI[IWK[Ss@Us@IYK[IYk@iBI[KYIWIYK[EQMa@IWK]IYUs@Us@Uu@IWI[IWK[IYKYIYK[IYUs@IYI[KWI]KYIYKYIYIYK[GWKYK[GWK[KYGWWw@Sq@Uw@Uq@Ss@Sq@ACIYUu@Us@Us@CMQg@Sq@Me@Qg@Uu@Ss@Ww@Sq@K[Ss@Us@IYa@oAOk@K]IWKYI[IWK[Sq@K[GUACUu@Us@IYIYIWUw@Us@Ss@Uu@K[So@K[Us@Su@CGGQIYUu@Ma@EQKYIWGSMc@EKMe@Uu@K[IYIYK[IYUq@K]Sq@Ss@Uu@Uu@Sq@Ww@Ss@IWK[GSIYIYKYIYIYWw@GWK]IWKYIYI[IWK[IYIYK[IUSu@AAIYKYIYK[IWI[KYIYCKEOKYIYIYKYSq@I[Us@Ss@Uu@Uq@I[KYIYK[IYUs@IW?AIWUw@IYKYI[IYCGEQK[Uu@CKOe@IWIYK[I[IWKY?AKYEQCIIYKYGWKYK[I[IUK]IYKYSs@K]GUM]Qo@K[Uu@Uu@Ss@Uq@Ss@K[Uu@Su@Us@Y_AIY[cAEKW_AW{@e@{AOg@cFqPeAmDM_@eAmDq@yB{@sCqAiEWy@g@{AOc@M]i@uAe@mAuAeDe@mAe@iAgCmGu@mBg@oA_A{BqBcFw@oBa@aAeAkC_F}LoC{G_@_A_@_A}@}B}BuFWs@eGgOYq@_A_C}@yBISO_@cCeGyBsFi@sAq@cB}@yBe@kAWo@e@kAKYMWWq@Wo@e@iAKYMYWo@Wq@Yq@AAo@_Bq@cBq@aBWq@q@cBWo@g@mAo@_BYq@Wq@Yq@Wo@Wo@?AYo@M[IWMYIUYo@KYYs@Wo@Yo@Wq@Wq@Yq@Yq@Wq@Wo@Ys@CESi@q@aBKWMYWq@KYq@_BM[KWKWKYMYKWKWKYKWYq@Wq@KWKYKYKWIYWq@KWM[c@kAIWM[Uo@KYKWK[Wq@KYIWWs@KYKYEKEMc@kAKWKYKYIWWs@o@eBKWc@kAa@kAKWK[KWKYK[KUa@mAKWKYWs@Wq@KYKYKWKYUs@KWKYAAIUKWKYKYWq@Wq@IYKYKU]aA]_AKYWq@m@eBKYKWK[KWKWKYIWKYKYSi@Oa@Uq@MYUs@]}@y@}BWs@cAsCe@oAOa@[y@IYKWM[Uq@Wq@Uq@_@eAMYWu@ISq@mBKWKYK[Wq@Yw@Uq@M[Ws@KWWs@K[Wq@M]KWWs@Ws@Wu@Wq@GQ[}@KYMYUq@Ys@Uq@Um@Oc@Wq@Ws@M[KYKYKYKYKYGQ[{@Ws@Ws@c@mAYu@c@mAWu@Wq@Ws@M[Uq@AAa@iAM_@c@kAWs@M[K[KWOc@Si@Qg@Qc@IWYw@Ws@Ws@KWWq@M]IYSi@Oa@Yu@KYWs@c@oAWq@Ws@Yu@Ws@KYWu@Uk@Oa@Uo@Wu@e@mAK[c@mAKYYu@a@iAK[Ys@Ws@sAuDWs@M[Wq@Ws@Wu@KWWs@K[Wq@KYWs@Ws@Yu@Uq@Ys@KYe@qAc@mAy@}BGQQe@KWWs@K[Qg@]_Ae@oAWu@o@eBo@gB]}@Si@c@oAc@mAWs@[}@Si@[{@c@mAUm@CGWs@KYO_@]cAa@gAAEu@sB[}@c@iAKYKYISAEWq@Uq@Yu@a@iAm@eBA?Ws@a@iAK[KWIU{AcEc@mAY{@M[Oc@i@yAM[Um@K[M[EMCIKWMYKYKWGQACMYKYKUMYMYGMCIMUKWMWMUACYk@KUMU]o@MUOWMSMU_@o@KOOWOSOUGKU]OUOS_@g@]g@AAOSOQa@g@OSMQa@e@QSQSOQOQOSQQOSQSOQOQQSa@e@OSa@e@SUMOa@e@Y]EEOSQSa@e@OQOQc@g@OSQSMOQSOQQSOQOSQSOQQS_@e@OQQSOQQSOQQSQSOSOQOQQSQS]e@CCMOOSOQa@i@OSMQQUOUOSQWIMa@o@]m@o@gAMSe@}@Sa@MSa@y@Q_@Wk@Q_@Ug@[w@Wo@Wo@KWGQYw@AAUs@KYk@eBGQu@cCCIYaA_DeKQi@wBeHUs@]kA}BsHmBkG]iAQm@?AWu@q@yBa@sAg@gBa@sA}@yCo@}BSo@sBcH_AaD_DqKqDaMsWg}@iDiLQo@_@oAOi@EI}@}CQo@k@qBA?_@sA_@qAm@oBMg@Us@Su@a@qAEOW_As@cC{@sCWaA_BoFkAeEeB_G[eAIWIWsBkHeAoDMc@e@}AOm@EMIWK_@m@qBSu@mCeJQo@sBaHoAmE_@qAu@gCiA{D]iA_DyKSs@IWg@gB[iAMa@IYIWqBcHSu@Ss@qAqEK]Ss@Uw@Sq@Ss@Uu@Ss@K]]mAa@wAGQUw@]mASu@Uu@[gAOe@kAgEgC}IqDeMK]{AkFq@eC_BcG_AgDuAkFMc@aGyTKc@IYIYI[I[Ss@Su@Su@IYSu@Su@Sw@Ss@e@kB]oA]qA_@sAQq@Sw@Su@Su@Ss@]qASu@]qAIYSu@Su@Su@Qu@Su@IY]qASu@Su@Su@]qASs@Su@Su@Sw@Sq@Wu@Uo@KYKWMWYo@O[Yg@QYMSMQQW]e@QSOQQQOQQOQQc@_@SOUSa@Wc@Wg@Yg@Wa@UEA{@e@QKMGqE_CCAg@WOI}@e@gAk@eAk@k@[SKQKoAo@g@YUOOKe@]e@_@c@c@m@o@EG]c@QUOSQ[KOEKGIMUMWMW[o@Q_@EOYq@Wq@Qc@EOWq@Wo@Oa@gAqCUm@?Ao@cBe@iAo@cBM]oAeD[w@o@cBa@gAUi@M]Uo@O_@Ys@Wq@Wq@Wq@Ys@GQO]M_@Uk@c@kAKYKWMYYu@c@iAw@sBgAwCO]M]IQSk@CGWq@Qa@EMYs@]_A]}@Oa@Sg@e@kAWq@Wq@Si@sAoDoBgFeCoGSi@s@kB[y@Qc@c@kAq@eBCIYs@GQM[e@mAWq@Wo@Ws@Yq@Sk@CEWq@KWKYOa@Si@Ys@Uo@KYYs@]{@Qe@IS[y@O_@GQWq@ISM]Yq@c@mAUm@M[Sg@M]KYk@yAEK]}@GOMYYu@Uo@m@}AO]Sk@Ys@e@gACGQe@_@y@g@gAi@kA"
                     },
                     "start_location" : {
                        "lat" : 44.6520601,
                        "lng" : -75.6252331
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "67.2 km",
                        "value" : 67237
                     },
                     "duration" : {
                        "text" : "45 mins",
                        "value" : 2724
                     },
                     "end_location" : {
                        "lat" : 45.4627921,
                        "lng" : -73.6111006
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eAutoroute du Souvenir\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eA 20\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eParts of this road may be closed at certain times or days\u003c/div\u003e",
                     "polyline" : {
                        "points" : "gw|rGvcxdMWk@CECGEIKUm@oAUg@[o@a@y@MY_@w@q@yAQ_@Uc@Q_@k@kACGa@}@e@cAgA}BWi@Q]Wk@S_@KWc@_AACqAmCMYO]KS}@mBw@aBEISc@[q@KSISWi@Ym@_AmBg@iAw@aB]u@OW[u@Uc@k@kA[u@Yi@[q@AEa@{@MWg@eAKSSc@Ue@k@mAWk@MUO]}@mBs@yA]u@]u@}@kBa@y@GMWi@O]IOQa@Ue@]s@KS_@u@Uc@O[g@aAYm@KQYm@g@_AO[a@y@Sa@Sc@Sc@Se@Se@Qe@Oc@GSSk@Oe@Oe@Mg@GQGYMe@GUESCOG[Mk@O_AGYAIIc@CO]mBY{A?CCOG[_@{BOcAKk@ES?AESCSEUEWO}@a@cCa@eC]qBW{AWyA_@{BGc@Ia@a@}BQeAKk@EUOy@SkAEUCSEUACCSEUESEUEUEUCQ?CGWCSEUGYCSEUQaAa@{BYaBKi@[mBWwAI_@YaBKk@EUEWES?AESEYKi@Ii@Ki@Km@EUQaAAAEUOy@SgAGWEQEWMg@Mi@Mm@Me@GUGUMg@GSGUGUOg@Y{@Oe@Qk@GSIU_@kASi@[u@[{@KSGQISm@yAUi@KSQe@e@iAy@mBKWIQGQISKSQa@ISIUIQAAGQe@kAIOa@cAa@aAsAcDSe@Sg@{@qBwAgDiAoCm@wA[u@g@mAIQISSe@ISUk@_@_ASg@MW{@sBs@eBi@qAISCEUk@M[GOISIOGQUg@Qc@Sg@Se@KUGQIQIQGQIQIQQc@ISEIEKGQIQIQISISISGQA?[{@IQISEO{@yBGQGOKUIUISEOKUGQIQIUGQIUe@kAGSIQIUQe@IQ?CGOQe@Se@Qg@Qe@Si@KUEMSg@ISGQGQKUISIUGQYw@ISo@cBQe@Sg@GQIUIQQe@Qg@IQQg@Si@GMIWIUIOGSCEEOGMISIUIQGQGSIQAGQc@IQISGSc@kAIS?AISe@kAQg@Qe@GOKWIUGOGQIUEKCEISEOi@sAOc@Qe@Si@Qc@KWQc@IUGOSi@Qg@Qe@Se@GQIUIQISGQISQg@IQSi@GSGOISIUGOACGOQe@IUIQISGUSe@GSIQGQKWGOISIUGOISGSIQISGSIUQe@Qe@IQQg@IQ[{@Qe@ISIQGSEICIIUIUQc@Qe@IS?AIQISIUGQISISGSISGOISISQg@Qe@KUOc@KUOc@]}@GQSi@Qe@Qc@IUQc@IWQa@IUGOQg@ISQc@ISISGQISISGOGSQc@Qa@ISGQUg@Qc@IQQc@Se@Sc@KSQa@Sc@Sa@M[EIIQKUGISe@KSIOIQKSGMIQIQIQKSS_@KUIQSa@IQUa@Sc@IOIQKSGOIOKQISIOKSIOIQSc@S_@KSSc@_@u@ISS_@IQIOKSQa@_@u@IQKQIQIQIQS_@Ue@KSKQ[q@[o@Ue@m@oAy@cBEMMUu@_BSe@KW_@{@c@cAc@iASg@O_@Uk@c@kAWs@[{@Yw@M]IYWu@m@gBWw@Uu@Ma@Ww@[aAc@sAI[Yw@Sq@iAkDi@cBWw@Oe@Qi@iAoD]eAoA_EqA}Dy@gCyAwEq@uB{AyEk@cBo@sBY{@i@aBGQW{@}BgHqAcEsAeEiAkDIWcAeDGQGQGQOg@ISGQEQAAQi@GSGQGUGQGSAAEOGSCGEKGSGUGQOa@IWOi@Qg@_@kAGSGSOe@ISGUGQGQGSIUGQGUGQISOg@GSGQQg@Qe@GSOa@IYISQe@GOISISGQIQIQIQGQISIO?AIQISKSGOIQS_@?AIOIO?Ai@eAKOIQKQIOKQKQIOIOKOIOKQKOIOKMKQIMKOKOKOKOKMKOIOMOc@k@MOKMKOKMKMo@w@MQMOKMKMW]MOKMIKQSGKW[KMAAKMMOIKW[MOKMMOKOIKA?W]AAKMKMKMKOKMKMMOKMMOIKMOACIIIKMOKMKMKOMOW[CCGIMOKMKMKOMMKOKMKMKMKOKMMMKOKMKMMOKMAAIMe@k@KKKOMOKMKMKOMMAAU[KMKMKOKMMMKOKMMMKMCEGIKMMOKMW]KMMOKMKOMMKMKMIMKMW[MOKMKOKIACKMKMKOMOKMKMY]MOKMW]KMMOIKMOMOKMKOMMW]Y]KOMMKOKMKMY]KMMOe@m@SUOSe@k@MOKMKMKOY]KMMOKOKKc@k@g@m@MOKMKMKOMMKOKMe@k@KOKMMMKOKOMMKOq@y@MOKMKOMMKOKMKMMOKMKOKMMOKMKOMMKOKMKMMOKMKOMMKMMOKMKOKMKMMOKMKOMMSWOUMMIMAAKMMOCCGIKMMOKMKOKMAAW[?AW[MOKMKMMOEEEGKMKMMOq@{@W[Y_@e@k@W[s@{@?AW[Y]Y]e@k@W[MOW]MOKMKMKOY[Y_@c@k@MMKMKOMMKOKMMOKOKMMMKOKMKOMMKOKMKOMMKMKOY]Y[KOKMKMY]KOKMKMMOKMMOY]KOMMIKMQKMMMIMMQKMY[KOMMKMU[ACY[W]Y_@KMMMKMY_@W[Y]KOKMY]KOY]KMMOW[Y]KOKMMMKOKOMMKMKMKOMOKMKOGGEEKMKOKMKMKMMOKMIMMMMQKKY]W]MOKMKMKOKMMOKMKOMMKOKMe@m@KMKOKMW_@MMKOKOKOKMKOKMMQKOIMKOMQIMMQIMc@q@EGEGU_@W_@KMKQKOGICEIOKOCCGKKOQYCEOUYc@EGIMWa@SYOUKQKOKOU_@KOKQKMKOKQKOIOKOKOKQKOIMKOKOWc@W_@q@eAGIKQKM?AIMKOCEGK[c@S[KOIOEGEGIMMSKMKOKOKSOSIMKQKOKOWa@KOKOIMKQKOIOKMKQKOKOKOKQKO?AIMKOKOKOIQMOKQIMIQKOKOIQKQIMKQKSIOIQUa@KQIQIQIQIQIOIQIO?CIQKQGQIQISIQISIQGQISIQISGQISGQISGQIUGQISGSGSIQGSGSISGQGSc@oAGSGQISGSGSIQGSGSISY}@GOISGUGOIUIUOe@GQGSQg@GSIQGUGQGSISY{@GQISGSGSISGSGQIUGQGSY{@IQGSGSISGSGQIUGQISIWQg@GSGSGQISGSGSGQISGSISGQGSGSGQISGSGSGQc@mAGSGSISOe@IUGSGQGSISGQIUGQGQGS?AGQISGQOe@IUK[CKIQCICIGSEICGGUEKAEGQISGSEKSm@GSISGQGSISGSGQCIGSM_@GOGQISGSGSISGQGSGSGQISGQGSISGQIUEQISGQIUGQGSGQIUGSISMc@KYEOGQGSISGQGUGQGSISGSGSGQGUOe@GSGSIUGSGSGQGQGSGSGUISGSGSCKCGW{@ACEOGQGSACEOIUEMAEGSGQIYMa@GSGSGSIUEOIWGSGQGSAEEMOg@ISGSGSGSGQGSGSGSGQGUISGSGSGSGSGSGSGQGSISGSEQIUGSGQGSGSIWEOGSGSISGSGSGUGQGQGSGUGQIUGQGUGQGUGQGSGUOe@ISGSGSGSGSACEOGSGSISGSGSGSGSIUEQGSISGSGQGSEQISGUGSGSGSOe@GSISGSGSGSGSGSGSGSGSISGSGSEQISGSGSGSGUGQGSGQIUGSGSGSGQGUGQGSGSGSGSGQGSISGSGSGSGSGSGSGSGSISGSGSGSGSGSGSGQGSGSISGUGQGSGSOg@GSISGSGUOe@Og@Qg@GSOg@_@mAOi@Y}@ACu@cCq@uBg@cBGOY_A]gAs@}Bg@_B_@qAY}@K[Y}@y@kCc@wAOc@W{@GSM_@Ss@K]i@eBKY_BiF{A}EyBiHcAcD_@mA_@iAMc@AEc@wAk@iBUs@[eAe@uAm@uBg@_B]gAWw@]iAcAcD{@qCM_@_@oA[eAcAaD[cA[cAiAsDu@cCQk@s@}Be@{AaEuMoAaEs@_CWy@Sm@e@{Ae@{AI[o@qBGUa@qAcAgD}@qCa@sAo@sBGSs@{BAEW}@o@sBi@cBg@cBqAcEi@cBg@cBOe@e@{ACGq@yB]gASs@_@oAe@yAq@wBqAgEW{@Wy@a@qAk@iBY}@[eAY}@a@sAIWQi@AEo@oBOi@a@oAkAyDMe@iAoDWy@Oi@So@a@oA_@oA_AyCc@wAIWY_AGQ[cAK[Qk@a@sA]gAYaAEKW{@qBsGW{@a@oAaC}HWw@c@wAe@}AEIK]_@mAcE}M{@sCu@_COi@{@oCm@qBISc@uA[gAOc@Y}@GU]gASo@GU[}@a@oAW{@{@mCs@yBw@cC{@mC_@mAe@_Bk@iB_@mAmA{DoAcEi@cBSo@W}@g@cBM]EMIYGQIYQm@Oe@w@gCIS]kAa@oA?AGQKWGSi@yA[y@]}@a@eA]{@AEQ][u@GMGMEMkAgCKSg@cAMW[m@u@uAc@w@OWg@{@CEWa@a@o@GKsB}Cm@}@KOU]KOCCg@u@MOIOs@eAEEKOKOKOIOW]W]IMKQcAyAKQKMKOKOMQS[KOIMKMMSIMKOKOKOKOKO_@i@MQKOIMKOKOGKAAKOIKKQKMKOAAIMKOKOIMKQIKACIMKOKOKMIMKOIMCCIMKQKMIMMQIOA?IMKOKQCEGIKOEIEEIO]g@a@o@u@iA?As@iA[g@w@qAKOcAcB_@k@OWUa@KOKOKQYg@Yc@OWQYOWGK{@wAU_@KOKQKOIOKMEIEIIOKOACIMKOIOKQKOAAGOKOKOKOACIMIOKOEI[g@IOGKCEKQKQIOKOACs@iAg@{@g@y@o@gAi@{@IOs@iACGU]KQKQAAGMKOIOW_@a@q@IQi@{@OUGMKQKOEICEKQIMMQIQKQIMIMKSKOU_@U_@MQGMAAIOKOU_@q@iA]i@a@o@GIYa@e@m@Y]EG_@]g@i@IIOQu@o@KIw@q@e@_@m@e@YUsBcBc@]{@s@sAmAs@q@USUWQOwBwCU_@[i@S_@q@sAACa@cAUi@ACIS]y@AEKWEMcBmEkBeFi@yAKYUm@g@wAMYm@{AcAkCw@oB_@aACEa@eAYo@eDqIu@qBSk@Uk@a@aAa@iAcAmCk@}Aw@kBe@kA_@y@g@kAWo@a@}@i@mAi@kAWm@e@gA[y@o@yAeAiCcAiCgAqCa@}AQ}@QoAEi@ASG}ACyAAs@?OUiOEqBGgEMiHE_BCaDSwKMqHAm@?CAi@AuACaA?OI{D?OASIsBEmAIgBIqAMeBQkCC[_@cE?Ai@wFmAoMUqBKy@OyAIi@Ku@SuAGWWgB]qBg@mCc@sBYkAo@qCu@sCa@_B{BcJwHwZq@kCaAyDi@sBG[uAsF[mAW{@W_AWq@IUq@}Ag@gAk@eAMWw@qAEGg@u@Yc@[_@g@k@]e@}AsAu@o@}E_E}AoA{@s@oA}@YSa@]OMECQOMIMKOMWUKGCCKKMKQMKKMKCCIIECAAEEMKMKKKMKKKKK[WMMKIKMMKMMMKMKMMMKKKMIMMKIOMMKMKKKKIQMYWMKMKMKMKKICEIEKKOMMKMMMIKKCAIIIGOMMKIGCCMKMKMK[YOKKIMMOKMMKIOMMKMKMKIICCKIOMMKMIKKOMSOGGOMKKMKMMECIIKMMMCCGIMOGICCMOKMKOKOIKACWa@IOGICEKSIOKQCGEIIQIQIOACGMISIQIOIUEMACIQGQISGSGQISGSGSGSGSGQGWGUEQGUGSESCOAEESGWESEUCSAACUEUCUESAIAKEWCUEUCWEUCWEYCOEYCSEWGg@EYCQCSEUEWCSEWCSEUCUEUCUACAMEWEUCWEUCSEUEWCSCWEUCSEUCSEUCKAIEUEUCSGU?CEQESESGUESESGUGSESGUGSACEMGUEOACGQGQIU?AGQGSGSGQIQGUIQGSGQCICIGSGQCGCKISGSAEEKGUGQGUGQGUGQEUGSGQGUGUEQGSEUAAEQGSMg@ESIWESEQGSGUGUEQGWGSESEQGSESGUGUGSESGSESGUEQGUGUEQGUESGSGSEUGSGSESGUGSESGUESGSGSESGUESGSESGSCICKEQGWEOGUESAAEQESGSESGUESGSESAEEOGSEUGSEQGSGYEOGWI]CIEUGSESESGUEQGWGSESGUEUAAg@uBo@kCIU]uAESGSKc@[mAOk@U_AUy@e@iBYiAQm@Mi@e@eBMi@k@{Ba@{Ao@_Ce@eBU}@Wy@Sw@k@qBw@wCUy@m@}Bk@uBU}@Oi@?C[kAmA{ESq@Qq@Mi@IYESK_@Me@U}@Og@Oo@Ss@Om@a@aBq@mCMi@y@iDKc@Ok@k@{BS{@U_AMg@U}@y@_DOi@c@cB?Ck@wBc@cBiAiEUaA[kAOg@GWU{@S{@AEMe@Sy@a@mBc@oB]_BQ}@Ki@WsAKk@WuAKk@O_AESUwAO_AEYWeBOkA[}BGg@Ge@AGGi@MeAGg@YmCMoAMwAO_BEe@SqBGk@QoBKcAIaAGk@SoBE]QeBMuAc@wEEk@I}@YcDY}CWwCCWC_@QgBEi@Iy@G_AQmBUgCCYGo@Gk@Ek@M{AUcCQoBOkBGs@CWCUEm@QcCIcASkCEi@Eo@E_@Ca@KkAEg@OoBCYQoBQmBWqCEm@YaDEe@MwAI{@CQKqAGm@I_AKgAEk@CYI_A_@gEGq@QmBOkBa@iEQuBMwAW}CMwAGm@MsA[uDGo@Gm@OoBGo@I_AKaAEa@C[Gk@Gm@AGIy@KcAMaAE]Gc@Is@CMMaACQIo@Ik@CUEUIi@Im@Ii@Kk@Ik@Kk@Ii@EUEUCUESEUEUESEUEUIi@Kk@EUESEUEUEUCMAEEUEUKi@G[CMKk@Ki@EUESEUCIGa@GYESKm@EQCOEUESWwACOOw@CMOaAMq@AGIe@Q_AG[Ic@Ii@G[EWUkACOKq@Q{@EYSgAO}@Mu@Os@EWMy@Mm@Ig@Ki@Ko@COMq@Ic@W{AEUEUKi@CMMs@Ki@SmAWsAKq@EUKk@Kk@ESEUGa@Ms@Mm@CQKk@Ie@ACKk@CS?AKg@ES[eBQ}@Q_AWuAKk@Q_A?AMk@WyAKi@Ic@GYCQQ}@G]Ia@Kk@Ki@QaAG[Ki@Ia@G]AEG[G_@I_@Kk@AEIc@EUSgAe@aCOw@Q_AKk@Kk@SgAKm@G]ESKk@[kBQ_AIk@Ik@Ki@Ik@Kk@Ik@Ii@Ik@Ik@UwAM_AO_AEUCUCUEUEUIi@CWESCUESAKCIIk@Ik@Ik@Ii@Ik@CUIk@Im@Ii@Ik@Gk@Ik@Ik@Gi@G]Ge@Gk@Ik@Gk@CUE]K{@Gk@Ik@Gk@Gk@Im@Gk@Gk@MaAGk@Gk@E_@Ky@Gk@Gk@EWGi@Gm@Gk@G_@Iu@Gm@COC[Ik@Gk@CQKeAGc@AGGm@Gk@Ik@Gk@CSIw@Gi@CUIo@AKOeAIq@O}@Ii@Kk@OaAQ_AKi@EUKi@AAKi@I]G]GUMi@Mg@?CMg@]qAOg@Og@AGM_@Og@Og@GSGSISOg@GSOg@GSOe@IUOe@Og@Og@GSGSQe@GUOe@Mc@ACOg@Oe@Qi@Oe@GSOg@Og@Qg@GUGSOg@Yy@Og@IYEMGSGSOe@So@M_@Og@Oi@Mc@GWOg@GWEOOi@Mg@EUOm@Kc@Mk@I_@G_@ESMi@Ik@UmAKs@Ki@Ii@SuAS}AMaAGk@KaAGi@Gm@Gm@Ek@Gm@Ek@Em@Em@?CEg@Em@GcACe@Eq@Cm@AUEk@AWCk@EeAGcAAWGyAEiAAg@Cm@Cm@Ae@Cs@Ao@Ck@Am@Am@Am@Am@?m@Ai@?[?WAk@?o@?k@?m@?U?a@?qA?cA@cA?U?U@cA?_B@eA@m@?cA@m@@qB?E?Q@k@?m@@qB@yA?A@cA?W@cA?o@@k@@{A?m@@cA?U?m@@U?W?U@m@?m@@aA?q@?]@u@?m@@kA@kB@sB@cA?cA@yA@uB@aA?m@@cA?W?m@@q@@_A?m@?m@@k@@mA?Q?k@@m@?s@@}@?k@?C@i@?eA@o@?m@@cA?m@@eA@eA?gA@aA?i@?A@o@@eA?cA@o@?cA@}A@m@?k@@o@?W?m@@wA@eA?m@@q@@yA?eA@oB@_A?E@cA?eA@cA@eA?cA@_B@cA?C@gA@kB@yA?m@@_A?C@eA?m@@m@Bm@@m@@m@?CD_A@U@W@WBm@Bk@Bk@Dm@Dm@FcA@GDc@HaAFk@@WBUBUBWHo@Fg@Fk@BQJeANwALcAH{@Hq@Fm@NyADWBUJ_AFi@PgBD_@JaAHk@Fk@BU@UFi@Dk@Bm@@W@U@U@W?U@]?Q?U@WAW?W?U?WAU?UAUAWAWAUCUAWC[AOCUCWCUCUCUEUCUEUEUCSEUEWEQEWESCUEWESEUKk@CQEWEUESEUESE[Ig@ESKi@a@aCEWEWE[CQCSEW?ECOCUCUCUAUCS?ACUAWAW?CAQAWAWASAY?W?UAW?Y@U?U?W?U@U?W?S?e@@U?U?S@S?U?Q@U?S?Q@W?S?S?S@U?S?S?S@S?U?g@@k@?S?U@S?S?U?S?U@S?S?S?U?Q@U?S?U?S?]?K?S@cA?W?U?U@Y?U?W?W?W?U?W@U?W?U?W?W@W?I?K?U?S?[?U@W?W?U?U@W?W?c@@a@?W?U?U?U@Y?a@?]@k@?W?U?U@U?U?U?W@U?a@?_@@cA?g@@k@?m@?U?Q@U?W?S?W@Y?S?]?Y@W?W?U?W@W?U?U?UBuDBgABsB@oB@yD@c@BiD@sC?I@cA@qA?aA@yA@}A@sA@i@?c@@cB@_B?y@B{B?mABwCBsD@yA?mA@aA@wA?]@aB?aA@s@@kB@wA@iC@{@@aB?]@sA?I@oA?I@qBBiB@{C@m@@o@?_@@cA?mA?E@g@?q@?[BiC@{@@yA?iA@uBBaD?U@k@@sA@_BBqB@}@@k@BiB@Q?Q?EBq@B_ABgAFmB@q@FuBDwAFaB?KDyAB{AD{A@o@DqDBeF@cBBcD@yC@s@?e@@s@?q@@}B@mABcC?K@_C@aA@aD@g@?u@@{B@eCBwH?_@@eB?_@?S?C@iABm@@k@Bc@?A@a@Dc@@YBYD[B[BSBWLaALu@@IJo@Nu@BG@GJi@DQFSHYH]b@uAZcAHYj@iB\\kAZaATu@HY|@uCfBiHb@iBH_@Pu@ZuAv@uD\\aBZwAh@aCr@aDP}@RaA\\sBVeBNcATiBFq@NeBHiDBo@LkEToH?CDmABmA@U?S?WAmAA}@Cs@Ek@Cc@?IWsBO_AQy@]wASq@Mc@GOGQQc@CGGOCGUg@_@}@Qe@KYM_@Qe@gC}Gs@sBGM[y@s@uBw@mBwBcFSe@yF{Lo@mAM_@i@sAMY]{@[w@uAqCCGe@cA[w@s@}Ak@oAm@oAUg@Ug@Wg@k@oAUe@Sa@Wm@OYw@gBsCqF[i@U_@QWGMS]e@w@Wc@a@s@gC_Es@gACEU]aAyAaAsAiCiEq@iAi@}@GKYc@eAgBCEeBqCuAaCWc@cBuCwAcC}BeEaAsBAAUe@Ug@MUGQwAcD?AUi@KSACEMSk@Qe@O_@Yy@CIO_@Sm@c@sAM]EMAAc@{A}@_DgEkOACQk@?AQi@Og@Qi@c@wAQu@"
                     },
                     "start_location" : {
                        "lat" : 45.2083611,
                        "lng" : -74.3482758
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.4 km",
                        "value" : 4350
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 184
                     },
                     "end_location" : {
                        "lat" : 45.4910163,
                        "lng" : -73.57464349999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to continue on \u003cb\u003eQC-136\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "mmntGjdh`MyBqHCEQk@kBaGEMs@{Bw@_CSk@kAmDQk@CGMc@kAmDy@cC_AaCe@mAiAsC_@y@c@y@Q]EG?AAAWc@GGQYm@_A]c@EGSY[_@AAQSEGIKQQ_@c@c@[YScBoAMMq@m@iAw@aAo@m@YMI_Aa@UKa@Q[_@QU]]a@[a@UIEYM{@]ICWKKEYMQCiBc@iKyCkDcA_@OSIYOKG]Q[Q]SQMIGMIMIMKMKIGCCMKKKMKKMMKIKMMMOW[KMKM[e@U][i@c@w@m@iAo@gAa@w@MUu@oA]i@a@o@U]IO_@k@OUIMKQIQMSS]Ua@_@q@Sa@Ua@_@s@S_@Ua@Sa@KQ_@q@_@s@Sa@Ua@_@s@]o@Ue@_@q@_@q@Uc@We@cCuEKQKSiAwBOWS]?AKQKSm@gAUa@S_@KSSa@S]a@w@k@cAYk@[i@]q@_@q@EGOYKQU_@S_@Ua@KOWc@gAeBo@eAiAeBoBuC_@g@]i@m@y@m@y@cB}BSYy@iAsAoB"
                     },
                     "start_location" : {
                        "lat" : 45.4627921,
                        "lng" : -73.6111006
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 835
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 44
                     },
                     "end_location" : {
                        "lat" : 45.49581389999999,
                        "lng" : -73.56693980000001
                     },
                     "html_instructions" : "Take exit \u003cb\u003e4\u003c/b\u003e toward \u003cb\u003eRue de la Montagne N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRue Saint-Jacques\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "{}stGn`a`MAQAAKOaAyAgCqDaAuAWc@IOCCWe@We@IQs@yAWo@AEQk@Ka@[qAGUs@sBSs@AAYeAs@yCAAMk@AAOk@Ok@K[GKAASUSOICOISE[@QAO?IAGCEACCGCGGEEKM"
                     },
                     "start_location" : {
                        "lat" : 45.4910163,
                        "lng" : -73.57464349999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "78 m",
                        "value" : 78
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 45.49538740000001,
                        "lng" : -73.5661423
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRue Jean d'Estrées\u003c/b\u003e (signs for \u003cb\u003eAutoroute 10\u003c/b\u003e)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "y{ttGjp_`Mh@qARe@Tg@"
                     },
                     "start_location" : {
                        "lat" : 45.49581389999999,
                        "lng" : -73.56693980000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 486
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 119
                     },
                     "end_location" : {
                        "lat" : 45.4990161,
                        "lng" : -73.56267650000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRue Saint-Jacques\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "eyttGjk_`MmAkASSc@c@GGUSu@s@MOOKq@w@m@c@OKQQQSSWKMKIMK_@[s@q@SQcA_A_@]QOEEGGIIGEQM"
                     },
                     "start_location" : {
                        "lat" : 45.49538740000001,
                        "lng" : -73.5661423
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 528
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 179
                     },
                     "end_location" : {
                        "lat" : 45.5018696,
                        "lng" : -73.5674191
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBlvd Robert-Bourassa\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{outGvu~_MWWs@pAIN_@l@OTY`@KL[f@EFWd@GJQVS\\o@jAUd@Yf@[l@CFg@hAUf@]`AuArDOXTRDG"
                     },
                     "start_location" : {
                        "lat" : 45.4990161,
                        "lng" : -73.56267650000001
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "218 km",
                  "value" : 218315
               },
               "duration" : {
                  "text" : "2 hours 12 mins",
                  "value" : 7897
               },
               "end_address" : "Kanata, Ottawa, ON, Canada",
               "end_location" : {
                  "lat" : 45.3088008,
                  "lng" : -75.8987118
               },
               "start_address" : "Montreal, QC, Canada",
               "start_location" : {
                  "lat" : 45.5018696,
                  "lng" : -73.5674191
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 397
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 93
                     },
                     "end_location" : {
                        "lat" : 45.4995887,
                        "lng" : -73.56352369999999
                     },
                     "html_instructions" : "Head \u003cb\u003esoutheast\u003c/b\u003e on \u003cb\u003eBlvd Robert-Bourassa\u003c/b\u003e toward \u003cb\u003eBoulevard René-Lévesque O\u003c/b\u003e",
                     "polyline" : {
                        "points" : "uavtGjs_`MJOV]Vk@fA_CLYRi@f@sAXu@Na@Xq@JUJUPYNUp@iAhAiB"
                     },
                     "start_location" : {
                        "lat" : 45.5018696,
                        "lng" : -73.5674191
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 789
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 179
                     },
                     "end_location" : {
                        "lat" : 45.494241,
                        "lng" : -73.57016299999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRue Saint-Antoine O\u003c/b\u003e (signs for \u003cb\u003eA. 720 O\u003c/b\u003e)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "msutG~z~_M^d@JLbC`DVZdAxAbAjAfAvAj@t@RXf@n@Nb@JRzBxCTPHHV\\xAvBTXj@v@VZ~CdEFF"
                     },
                     "start_location" : {
                        "lat" : 45.4995887,
                        "lng" : -73.56352369999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.4 km",
                        "value" : 2415
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 123
                     },
                     "end_location" : {
                        "lat" : 45.47937650000001,
                        "lng" : -73.5926183
                     },
                     "html_instructions" : "Take the ramp onto \u003cb\u003eQC-136\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "_rttGnd``MH\\BJFLh@~@Rh@Tn@d@rA\\z@Rb@Tf@N\\DHTd@BDT^Xb@PXFHvBxCbArApAbBdAzAv@fAnA`B|@lA^f@V\\v@bAJLJLbAlA@@NDTXT^\\f@FHj@z@b@p@`@n@T^Vb@\\l@^n@V`@Vb@^r@T^HPZh@Xj@Zj@NV\\p@h@bAVb@R`@R^LT~@fBp@nA^r@^p@@BTb@Vf@n@jA\\p@h@bAh@dA^p@T`@Rb@Vb@|JdRtAfCrAfChBhD`AhB"
                     },
                     "start_location" : {
                        "lat" : 45.494241,
                        "lng" : -73.57016299999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 899
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 41
                     },
                     "end_location" : {
                        "lat" : 45.4720941,
                        "lng" : -73.5972634
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eQC-136\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "cuqtGzpd`Md@v@\\d@Zb@b@n@NRb@f@PPNLfAbA@@|@n@bC|A~@b@^NVHLD@@JDD@HBNFh@Pb@N`@Lb@NZJD@`@Nb@ND@ZJPHNDdA\\RHn@RDBZHl@VHD@@HBTHjC`A`@Lb@N"
                     },
                     "start_location" : {
                        "lat" : 45.47937650000001,
                        "lng" : -73.5926183
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "6.5 km",
                        "value" : 6479
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 339
                     },
                     "end_location" : {
                        "lat" : 45.501531,
                        "lng" : -73.66346469999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e1-N\u003c/b\u003e to merge onto \u003cb\u003eAutoroute 15 N\u003c/b\u003e toward \u003cb\u003eMirabel Arpt\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eLaval\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "qgptGzme`MHP@@HBHDb@T^X\\VZV\\\\TX@@VZBBPRLTZn@Xp@Vp@Pl@Ld@?@Nr@Lp@@FFl@Fj@B`@B`@BdABv@?ZAt@?P?BAb@AHEd@Eh@ObACTGVMl@GROl@AHO`@g@~Aa@nA_@lACF{@hCCFy@dCGLy@bCM`@c@jAe@nAu@pB]`AKZCHUr@]hAABYTq@xBYt@GPENCHA@kAfDGRyBlG]~@[x@O`@Sd@Qd@Sb@]v@]r@e@lAe@|@e@|@i@lAs@vAc@z@]n@[h@_@h@QTY^q@v@WTYV}@t@[VYTIHEBc@^OLQNURMLMJWXST[^Y^MRW^OTYf@U`@a@z@Q`@Sh@CFSh@?@Qh@A?GPIVGRITITITWr@M`@CHKXQf@Sh@IVWr@CJSh@KXM`@Wt@[z@]bASh@GPKXsB`GGRu@vBu@vBq@nBM\\c@rAM\\O`@[~@Qf@Ob@ITUn@Yz@m@dBQf@Un@Qf@y@`Cq@nBABy@~BcAxCWz@i@|ASl@Qd@mAjDi@|Aq@nBoC`IgA`Dk@`B{BrGGPq@pBw@zBi@~Ac@nAa@lAYv@c@tAWt@Uv@o@nBc@tAg@|ASn@Yz@ERKZc@tAIXc@tAOf@c@nASj@Yv@KXKXABKTQb@MVKXQZGNS`@OX[j@w@xAWd@CDU^Yh@Q^[h@CDWf@[h@Yf@c@z@Wb@ABUb@k@dAU`@?@s@nAA@Wf@eAlBs@pAKReApBQXIPOX[j@OVm@hAq@pA_@n@[n@MRc@x@S^[d@k@~@Y`@W^U\\[`@STQTUXWXUTMNIJ]\\UT[X]X"
                     },
                     "start_location" : {
                        "lat" : 45.4720941,
                        "lng" : -73.5972634
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "34.3 km",
                        "value" : 34323
                     },
                     "duration" : {
                        "text" : "21 mins",
                        "value" : 1276
                     },
                     "end_location" : {
                        "lat" : 45.4012119,
                        "lng" : -74.05738029999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e70-0\u003c/b\u003e on the \u003cb\u003eleft\u003c/b\u003e to merge onto \u003cb\u003eRoute Transcanadienne O\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eAutoroute 40 O\u003c/b\u003e toward \u003cb\u003eOttawa\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eGatineau\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "q_vtGrkr`MET?@A?w@r@m@h@YTWPw@d@mAr@GD_@R_@TOJMJMJIJMLILKLINOXGPERERAHANAP?P?J?R?J@J@H@PBLDPH\\DJFNFJHJFHHHHHHDJFJDLDJDz@T~@T@?@?PEPFHDLFXP\\RLHZV@@LLVVXZXb@`@h@FH`ApA~@pAb@l@Z^^f@NRb@j@b@l@\\d@h@r@p@|@r@bA\\d@HJRV^h@b@l@n@|@`@h@tAjBp@~@Zd@`@n@T^LTNXNZP\\LVLXLZJVRj@L^Pf@Nj@J\\J`@H^J^Hb@Hd@H`@Hj@Lv@Fn@JbABVDb@?@@VBVBb@@^Bf@@f@?LBt@@x@@x@BrD@|A@tABpC@zCDdCBrB@z@BtBBrBB`BBbBBnABn@DbABh@B^Dx@Dl@Dj@Dj@BXBRBVBX@LBXBPBVBTBVBRBTDTBTDVBVDRBTBTDRDTBTDVDRDTDTDRDTDTDRDTDRFT?BDNDTDRFTDRDRFVDPDRLh@DTFTDPDTDRFXFRj@lCH^Np@H`@Rz@R`AJd@Nr@h@~Bd@zBTbADPJd@FVJd@^fBXrAHZBJJh@FTXpALh@H`@Jf@ZtAR|@FXBPRz@R~@FTJh@Jd@Lh@Lh@Lj@Jh@DRLf@DVDPDVDRDRFXHf@DRBVJj@Hf@BTBTBRDVBTBTBTBVBTBTBR?@@TBVBTDj@@VDj@@VBV@Z@T@T@T@X@V?V@T@V@x@@t@@V?T?Z?L?D?j@?T?F?N?T?VAV?B?F?H?TAV?TAXC`AAV?RAVAl@AF?LAT?VATAV?TATAV?TAVAV?TCl@AV?VCl@A`@?RADAj@Cl@?TAD?NAVAT?TCl@Al@Cl@Aj@Al@Cl@?VATATAl@Al@CbACl@CfAEnBGpBChAOxFIfDEfBIhDM`FWpLCl@KfEAj@GvBGzCC`AC`AKzBMrFGlDCv@?@?B?DCx@IhEI|CEnBGbCGpB?BErBExACv@IhEKjEAn@Cx@CbBAx@Ct@CfCAV?r@AhBAt@?P?j@?t@?~@@~A?d@@R?X?P?b@@n@@j@@x@@n@@z@BpA@|@DhARvIFhBHxDPdHH|CHnCBrADjADxADzAD~ABlAJbDDzADpBBjABx@DdBD~ADxA?LDxAH|CBfAB|@BdADhA@\\B`BFzBBfABnAFrBDfAFzAJpBDh@F`AH|@JvAJ~@Fn@DZFn@PxANdADVNfARnALr@Lv@H^zBvJNj@FTNf@Nf@Nf@^lANf@Xx@Xx@Pb@JXN^Xv@BDDJPd@Pd@Rf@Nb@Rf@Pd@Zv@Pb@Pd@Pd@Zv@Pd@Pd@LZn@`Bd@nAZx@N`@\\z@Pb@Pd@Zv@Pf@L\\Pd@Rd@Pd@Pd@Pb@HPFRPd@Pb@Zx@Pd@N`@Rf@Rd@Pd@FPHPFRPd@Pd@Rd@Pb@Pd@Pd@Pd@Pb@Pd@Pd@Pd@Rd@Xv@Pd@Pb@Rd@Pd@FPPd@Zv@Pd@Pd@Pb@Zx@j@zAFPHRHRPb@Pd@N\\Tl@Pd@Pb@Pd@FPPd@HTPb@Pd@Pd@Pd@Pb@Pf@Pb@FRPb@Pf@Pb@Zv@Pf@Pd@Xv@Pd@Pb@Pd@HRXv@Pb@Zx@Nd@Rd@`@jAPb@`@bARl@Pd@Pd@Rd@Nb@HRPd@FPP`@l@bBFNRf@Nb@HRFPPd@Pd@Pd@Pd@Pb@FP@@Pb@Pf@Pb@FRHPPd@Pd@FPHRPd@Pd@Pb@Pd@DLJVFPRf@Zv@Vp@JTPf@Vj@@BPd@N\\L\\Rd@JXJVzDpJ\\z@Zv@HRPb@Zt@HPZx@Xp@n@`Bd@hAd@fAb@hAf@jAb@hAd@fAl@|Ad@hAb@hAn@zAd@hAl@zAl@zAXr@@B\\v@b@hAZv@d@fAb@jA\\v@l@zAZt@Zv@d@hAf@pAd@hAd@hAXr@Th@Pd@JVLZRd@Pb@LZLZPb@P`@@BPb@Rd@d@jAPb@Zt@JVN^Pb@Rd@Zv@DLJTBHLXPd@Rb@Zv@Pb@FLJVRf@FNPb@HRRd@P`@N`@BFN^Rd@Pb@Pb@Pb@@@Xt@\\v@Xt@d@hARd@Zv@Pd@Zt@BDVp@Zr@Rh@P`@JVHRXp@Zv@Xp@JXN\\P`@Zx@\\x@Zv@\\v@`@bATj@Xv@JRTp@Z~@b@pAVx@Lf@Vz@Lf@Lh@ZrAXpAP~@VzANz@T|AJt@LbAThBR|AXxBJp@@LnAxJPpAHl@?BDVFd@D\\Hj@TdBD^NjAD\\Hj@@FDXR|AD`@L|@@H^xCbBvMHl@Hl@BPBRDTBTBTBTDTBRBTDVBRDVBTBRDTBRDTBTDTDVBRDRDRDVDRDTFVDPDTDRFTFZFTDPFTDPFTFTDN@BFRDRHTFPFPFTBFBJFRDJ\\~@HRFRPb@HRBFDJHPFPHRFRHPDL@BHRHPFPHRHRHPFRFNRf@FL@BFPHRFPHPHRFPHPFRHPHPFR?@HNHRFPHRFPHPHRFPHPFPFPBFDJHPPd@Pd@HPPd@Pd@Rd@Pb@Pd@Pd@Pd@Rb@Pd@Pd@@@N`@Pd@Rd@Pd@HRFPHRFNZx@Pb@Rd@fCvGHRHPFRHPHRPd@FPHRHPFPHPFN@DFNHRFPHRHPFPHPHRFRHNFRHPFPHRHPFRHRHPFRHNHRFPHPFPHRFNHRFRHPHRFPHPFPHRFPHRHPFRHPHPFPHRHRFPFNHRHPHRFRFNHRHPHTFNFPPb@HTHNb@jAN^BDb@lAl@zAtBnFt@nBTj@j@vAf@nAXv@pAdDt@lB\\|@z@zB@@~@jCz@dC`AxCb@xARl@n@zBr@hCr@lCJ`@XjAb@jBTbAd@zBl@rCRbAt@|Df@zCHf@`@nC`@pC^fCHl@d@~Cl@fELz@^fC\\nBl@jD`@rB\\lBd@vBVnA\\zA\\vAXbAb@`B^pAPj@h@bBj@`BhAzCN^Vl@x@lBh@pAvCtG~ArDVn@rFhMhDxHXn@xAdDpAxCn@nAhAhCLZDJLXFN\\r@Rb@LZt@bBFNRd@Tf@N\\f@hAf@jAR`@f@jAFPZr@j@lAVn@^v@d@dAd@fAxAfDFN\\v@d@dAHPp@|AZt@n@vAVl@Xl@r@`B`AxB\\v@Xp@Vl@Xl@Rf@HPjAlC\\v@P`@Zr@JVRf@JVTp@HRNd@Lb@Nj@J`@Nl@J^TjADPHb@Hf@Fb@Lx@DVFj@JbAH|@Dj@Dr@@NBf@B^@\\DnA?Z@x@@d@?d@A\\?x@AbACp@EbAC|@Cl@IhCGzAA\\E~@IbCKdCCfAGvAEdAGxACbAEbAKzCCl@G|AAf@?BAL?DAHAf@Cj@IpBC`ACl@InBCbACp@Ch@E`AEdASzFATIjBCf@K~BIjBQ`FAPA`@ANCl@Ad@Cf@E~@KjDCd@?DIlCCh@?Bo@fRCj@?@Ad@MdD?JCf@?JYzFI|BAj@AVAX?FA^APG~ACzBAnB@jABpAF`BD~@JxCNvEHvBJtBVtFn@dQ@R?@`@tKBr@RfFP`F@PFlAJ|CBl@Bx@PlEJpCLhDNzDFbBJ`CH~BJrC?BBp@HdBBp@RzF@BBn@?@RzFBr@@H@d@Dp@@j@Dx@?LBj@Bj@?FDr@?PBd@DdABn@@V?N@ZBh@@ZDbAFxAHnBRpFH~BTdGJtCJjBDbAF`AF~@HpA@TFt@Dt@@BHjADr@T`DBPLjBDh@?FDj@Fn@LdBJlAF|@Fz@Fr@HhAHdADj@Dj@BZDh@PfC@RJnBR|C@VLhCHxABV@PBZNfC@THbA@XBRBj@Df@T~CDn@H~@F~@BRVjDJvAFv@D`@PbC\\nE@VFn@BZVlDf@zGNrBL|ALhBXpDTbCFl@Fl@DV@LHl@Ff@D^F`@L|@DXBJ?BJl@^xBF\\FXDRJh@FZBHJf@Ll@DNDRFTR|@Lb@Ld@?@Rv@FTPh@Vz@HVBFH\\Nb@J\\Zv@JZDL@BN^DLHRJXHRJV\\|@JVZx@Xr@JX~@~BVr@L\\z@tB^`Ab@jABFTl@HRP`@Vr@HRFNPb@Pd@HTDJHPTn@BDHTRh@Rd@^~@Rj@Rh@Vp@lBdFh@zARh@HRFPHRPd@DFBHHRFRHPJXN^HTHNFRDJBDFRHRHPHRFPHPFRHPHRFRHRHPHRFPHRFPHPFRJTHRFPHRFPHRHPHTFPHPHRFNHRFPHPHTFNHRFPHRFNHP?@FPHRHRHPFRHRFPHPFPHPFPHRHRFPHRHPHRFRHPHRFPFPHPHRHRFPHRHPFPFPFN@BHRLZBHHPFRHPBHBFHPHRFPHRFPHPHRFPHPn@dBHNFR@@DLHRHRHPFRFNFNJTFPHR?BFJHVHRFPHPFRFPFNJXVv@Nf@Nf@FPFRFRDNDNBFDNFVFRLd@FTFRLf@Lj@FRb@dBFTDPR|@HXLh@DPTz@FTDRFVDPFVDPHXDPDR"
                     },
                     "start_location" : {
                        "lat" : 45.501531,
                        "lng" : -73.66346469999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 1024
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 37
                     },
                     "end_location" : {
                        "lat" : 45.4048768,
                        "lng" : -74.06790869999999
                     },
                     "html_instructions" : "Take the exit toward \u003cb\u003eQC-417\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eOttawa\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eGatineau\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eHudson\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eOka\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSaisonnier\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "qlbtGri_cMFXDVBRDRBRDTBVBR?BBRBRBV@RBV?F@J?@BV@T@V@V@R?V@T?V@R?V?V?B?h@?XAT?D?LARA^ALAZAZAPCTAPCXAPCPCZ?@ETALCPG`@CVERIb@?@GVETETGRERGVENGTKXEJGRGRIR?@IR?@GNKXOZKRIPGLKRILKRINKPEHQTILGJY\\KPKJQREFGFIHIHONIFMLMJMJQLOLQNMLu@j@IHm@d@WTKHOJ{@r@EB"
                     },
                     "start_location" : {
                        "lat" : 45.4012119,
                        "lng" : -74.05738029999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "31.8 km",
                        "value" : 31795
                     },
                     "duration" : {
                        "text" : "18 mins",
                        "value" : 1067
                     },
                     "end_location" : {
                        "lat" : 45.5390014,
                        "lng" : -74.38889929999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eAutoroute 40 O\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eEntering Ontario\u003c/div\u003e",
                     "polyline" : {
                        "points" : "occtGlkacMu@l@IFMJYVm@d@g@^MJ[VMLYRON[TWTQLYVw@n@E@c@^KHA@i@b@i@b@_@ZWP[V[V[VKHy@p@[TGFa@ZMJYVKFKJOLk@b@o@h@GFKHKHMJC@KJOLIFWRABc@\\UTMJ]ZMJYXQPUR[XKJURQRKHCBKLGFQNMLIJONWX[\\MJABIJMJWZQPEDOPWV[\\MNKLUTQPQRa@b@KLo@r@[\\MLKLg@h@[ZIJMNKJMLMLY\\WVi@l@YXYZe@j@s@t@g@h@YZc@f@u@v@e@h@g@h@CBUVYZMLKLGD{@`Aa@b@YZs@t@YZs@v@YZu@v@gBnBq@t@a@b@CBs@v@s@v@WXi@j@WXg@j@YXMNKLMNIJMNU\\Y^U^MRS^KRS\\Ub@IRIRGLKTITQ`@GRITO`@IXGRMd@Mb@Op@Mh@ETEVCNA@EVCPEVERCTEVCTCPEZEh@Gh@CZARARC^Ez@?NCTOxDGbBMzCGpAIvBI`B?@G|AKzBInBGfBIpBEvAGtBEtB?TEnBA~@Ap@CnCGtF?l@AvAM`KAlBAbAAp@AdAAz@CpBCpBClDCbCAdACxBEnCCxCEbD?T?JE~CCtCCrBAxAAj@?ZClAAd@Ad@ADAV?RCXARAVEl@El@CZIz@Il@ALEZCTEVIf@Kp@Ih@ERERETMh@[rAMd@Oh@Wz@Od@Ql@ENUv@Qh@Sn@c@vAY`A{@pCEJw@jCWx@Of@Wz@i@dB_@lAa@nAGVUr@Ql@Wv@Qj@Uv@Y~@GPq@vBUx@Od@Yz@Of@Of@Y|@Mb@GRY|@Of@Wx@Oh@GRUt@A@W|@Od@a@pAOd@Wz@Wx@W|@Yz@_@nAo@tBWz@Yz@_@nAkBhGGNUv@Wx@Of@Qh@_@lAQj@Wx@w@hCo@xBWx@Od@IXGRK`@?@Oh@Mh@U`AEPId@I\\If@EPIh@EXIf@Gf@Kp@Il@Gh@Gl@Gl@Ef@Gl@CZEh@AVEj@EbACh@Cr@EdA?TAh@Al@AhA?nA@dB@j@@n@?DB|@BdAFzAFxADbADdABj@BbAL|CFxAHvBB`AHtBJdCDdAFzABbAFxADfAFdBDv@HxB?J@LJrCHpBBdABb@Bx@B`ADrB@r@@b@?r@@dA?dA?`A?n@?^?|@?TAfCAjFAlG?~@AtB?bAAhA?nB?h@AhC?`AA`A?LAb@Al@Al@Al@Al@Ch@Ap@Cn@APA\\ARG|@Cj@IhAEf@?JE`@En@AVCTCRCVKdACPATCTCTCTCN?DETCTCTCTERCTEXCRETCRADCNETCREVERETCTETCLAFEREVERCTERETCRCNGXEVETCRCHAJEVERCRETERAFCNEREXCRERETCRETETEPCTEVERETETCREVERETADCNETCPEVERETCTETETERET?DENCTKh@CTERETETETCPCNAFETERCTETETAFCLETCRKh@Ij@ETETCRETER?@ETETCRAFCNERERETETER?@GZCLETERETMh@ERERCPADEPKf@IXCPGPETGRERGTERGRETGREPU|@Od@GVENIVENIVGRGPGRGRGRGRITEPGPIRIVITCJIRGRGPQd@Qf@GPIPGPQb@IRSf@IPGPIPIRIPKTELIPIPIPIPIPIPIPIPIPS`@IPCDEJMVEJMTEHIPKPIPGJADMTGJIPMVEHKNIRININIPKPINIPKPINIPEHEFINIPINIPUb@INOVCFKPGL[n@KRKPIPINIPINKPIPEHCDIPINKPIPIPKNKRQ^INIPKPINIPKPINIPIPKPIPINKPIPINIPKPINIPKPINIPIPKPINIPIPKPINIPINKPIRILIPIPKPININIPKPIPIPINIPKNIRININKPIPINIPKPGJABIPKPIPIPINKPS`@KPIPINABGLILIRKNIPIPIPINKPIPKPININIPIPKNIPIPINIPKPIPINKPIPILKPIPIPKNIPINKPININKPIPKNA@GLKNIPINKNIPKNININKPKPILINKPKNIPKNIPKNINKPINKNINKPINKNININKPKPINKNIPKNINKPINKNIPKLINKPININKPKNIPKNIPKNINKPINKNIPKNININKPKPININKPKNININKNKPGLABKNKPMRwEdIKRINKNINKPKPININKPINKPINKNKPININKPKNIPIPKNIPINIPKPIPINIPIPIPIPUd@O^Uf@IPQb@GLCDQf@O\\GRIRQd@Qd@GRIPOf@GRQd@K^KZGRGRGRERGRGRGRGRETGRGRGRGTGTGPERGTGPGTGRERGRGTGPGTOh@YdAI\\GTGRGPETA@EPGRGRGRCJAFGTW|@GPGTEPGTGPGTGRGVEPGRGTGPGTGREROh@GTGRGTERGRGRGRGTGRERGRGRGRERGTGRGTGPGRQp@K^GRAFELGRETGPGTGRGRERGRGRSr@s@hCIZe@|AGT[dAGRENABGRGRIRAFEJGRGRGPK\\EJGRGPGRGPIRGRIRGPIRGRIRGPIRGPIRGPIRGPIRGPIRGPIRIPGRIRIPUl@CHIRIRQb@IPGPIRGRIPIPGRIPITGPGNITIRGRGPIRGRGRQf@GRIRGPGRGRGRGRGRGREPABELIVERITERGRGRGRERGTCJCFERGTGRETGTEPGTGRETGRETA@ERERGRERGRETGTCLADGTERGTERGRERGRER?@GRGTERGTETA@EPERGRERGTETGTGRERGRERCLCFERGRETGRERGTERGTGRETEJAFERGRETGTGRERGTERGTERGTERGXENETGTERERGTETERETETERETETERCRA@CTGTCTETETCTERCVETETCTCREVCTCTABARGb@Ip@CVCRCTCVETCTCTAFALCRCXCTCTCTETCVCTE`@AHCT?@CTCTETAPIn@CTCTCTCTCTETCVCTCVGh@CTCT?@ETCTCTCTCVCRCVCRCTEVCTCVCTCTEVGj@CRGl@CVCRCTIl@CRCTCPe@jECVUnBSpBQxAaA~IkBpPGd@Ix@QxAYjCADK|@KdAEZc@~DCXG`@w@lH_@fDS`BMdAWxBIl@ALG\\Ij@Kh@GTGVERGR[jA?BQh@Ob@Qf@Od@O\\MXIRINS`@EHCFKPINKPINKPILSVKP]b@KLSXONoAbBs@`AeB~BgAxAi@r@o@x@WXaD~DSTQV_@b@]b@Y\\CDy@dAa@f@[`@_AjAi@n@GHm@v@UXUXQTMLY^IJMNORSTKP[b@GJW^ILMRGNa@p@S`@KRWh@MZIRQ`@IRIPCFK\\IRQf@GPGRMb@A@K`@CJIXI\\Oj@Mn@YzAGZETQ~@CN]xBMv@YdBkAjHI^_@`CSjAG`@c@nCWvA]xB_@vBCNOz@Id@E\\k@nDMv@gAvGMp@Mx@m@rDk@hDUrAKp@ETIf@E^Gd@CRCTCTCVCVEl@Eb@?FEj@AVAVARAVARAXATA\\?d@AV?j@A|@@dA@z@?F@`@Bn@Bj@DbA?FBb@@VDfABh@Dn@Bh@FpAB`@Bb@@ZD`AHrAJzB@\\B`@Bh@LpCR~DB\\JxBL|CBT@VN|C?@F~A`@lINfD`@tIFdADdANbDD~@FhABj@FlAJ~BDp@FpABj@FbA@`@NvCBh@Bl@Dp@DfA@BRvEPdDHlBJnBF|ADz@JjBBj@H|ADpAH~A@\\?T@P?Z@T?l@?VAz@A^Cn@AXATCXATCVAVCTCTCNARG`@EVCPEZKd@Kl@Kd@Oh@GXGPOd@Qh@Qh@IPSd@Sd@KRU`@INKPMPKPSZMNc@j@g@n@e@l@IJCBo@x@]b@cApAw@`AWZkAxA]`@y@dAOPq@|@}@hAi@n@e@l@e@j@eAtAu@~@CBeBvBm@t@ABsBhCuAdBUXo@x@}AlBW\\}BtCkAxAqBfCIJaAlAsAbBiB`CiC`DMNY^Y^KLW\\C@oBdCe@l@MNIL[^g@n@SVe@l@e@j@e@l@c@j@s@z@Y^s@|@e@j@GHk@t@}@hAc@h@]b@a@h@KNSV[d@ORIJ_AlAY^SZEDSXY`@_ApAc@n@_@f@]d@U\\MNU\\W\\u@dA]d@iA~Ae@n@u@fAu@bAq@~@o@|@q@`AOR_@h@IJUZu@dA}@nAg@r@IJEFaArAW^c@l@ORKNY`@_@f@iA|AQRUXOPa@b@CDKH[XQPONg@`@YTo@b@c@VSNOH[PWLSHi@VOFOF_@LEBg@N]JQFk@Nu@Ru@TG@ODs@RODc@JsA^WHy@TmA\\}@ToA\\_AVE@c@LWHMBOFG@GB]HODYHs@RMBOD]LODOBOFODODo@PWHE@m@NSF[Hc@LIBODODMDm@NQF_@JgAZUFQD]JMBGBGBODOB]J[Hq@Ro@PKBE@[JQDODMD_@JOBOD_@Jm@PSFMB]J]J_@J]JE@C@g@LMD_@Jo@Pm@P_@JODWFE@_@Lo@N]J_@J_@J[Ha@LOD]JOD_@J_@J]JQD]J_@JODA?[JQDKBo@P_@L_@H]J_@JODOBODSBKBOBMBA?OBO@OBc@B[@Q@a@@_@?]A]?QAOAa@COCKAQCKAC?o@G_@EQC_@C_@COA[AE?_@?M?c@@]B_@BOB_@DI@KBYF_@HMD_@JOF_@LKDQHMFQHMH[PYPOLUNGFMJMJKHOLA@KJKJMNKJKJMNA@KLKNIJKNABKLSXOVEFMTKRGLIPCDGNINIRIPGPIRADEJGRIRGTGRGRCLENK^ETGRETETEREPEXETCPETCPADCREREVIh@CPEVUvAIl@Kl@Gb@_@dCMp@If@CVAFCJIf@EVEXCNMx@"
                     },
                     "start_location" : {
                        "lat" : 45.4048768,
                        "lng" : -74.06790869999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "116 km",
                        "value" : 115824
                     },
                     "duration" : {
                        "text" : "1 hour 4 mins",
                        "value" : 3820
                     },
                     "end_location" : {
                        "lat" : 45.4193489,
                        "lng" : -75.6497112
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-417 W\u003c/b\u003e",
                     "polyline" : {
                        "points" : "wi}tGra`eMQjAUvAc@nCW~AIn@Kj@uB`NE\\a@hC[rBMt@G\\Mv@Mx@If@QjASlAGd@UtAGZG^E\\GZEXG\\YfBQ~@Mz@O|@WtAUrAe@rCOz@mAbHQhAGVG^Mv@G\\G\\Ov@Mv@G\\UrAG\\G\\Ov@GZG\\CPIf@GXG\\G\\EZG\\GXG\\EZG\\GZQ~@Kn@G^GZGZMx@GZG\\Mr@G^Ov@EVO|@G\\GZET?@Ox@EZG\\I`@Mv@GXEXI^G\\?DCNMl@AJADGZEZGZERAHEVCLETEVId@EVGXGZEXABMv@ETAFGZKp@A@G^G\\EXGXMx@A@Oz@Mx@GZId@Kn@Ib@Kl@GZ[fB?DYzAQbAG`@G^G^G^O|@Kr@WxAWdBWjBIj@UzA_@nCGb@Ir@G`@EZSvAKz@CXABE\\EZE\\EZCPALEX?@E\\EXE`@EZEVGd@CVEXE`@CTG^CXGf@EXE\\CNALEZEZE\\E\\E^Kv@iAhJOjAQtAsFnd@{@bH]pCeArIc@fD]vCOlASrAUjBM|@O~@Ir@UtAU`BMz@Mx@UtA]tBUtAW`BCHQ`AUpAQfAKf@Ov@a@xBi@pCg@jCe@|BGZWrAa@nBWrAQx@Q~@I`@]dB[zAShAYvA[|A_@dBKn@Qz@YrAa@rBAHUjAADWlAWtASbAUlAQ`ASbAO~@UlAOz@O~@[lB[jBOx@StAUzAMt@Kt@M|@_@jCa@tCYxBSpAKz@Mz@YrBWrBk@fEa@pC_@tCm@jEYtBQrAg@pDk@lE{@jG]hCYtB_AbH_AbHgCdRy@jG_@jCWpB[tBWnBkBjNe@jDc@dD_BpLOfAOlAMv@E`@It@Gn@Eh@?@E\\C^AZAFARCb@A\\ANAVCn@A^?\\ATAh@?H?R?^?\\?\\?^@\\?\\@^@\\@\\@b@@T@`@@T@D@\\B\\B^BZB\\D^B\\DXD\\D^Ff@?@BRDZDRD\\FZHb@F`@FVF\\FRFXDPDRHXH\\FVHVJZHZL^FRHVLZJVJZLXHRN\\JVJTJTP\\JRLTLTLTNVNTLTPTNTLRLPPTFHFHNPPRRTNPLNPPRRPRNNNPPP`@`@PRTTZZd@f@PRRRNN@?NPNNNPPPNNPRRPNPRR^`@\\\\VXb@b@^`@PPNNr@t@b@b@RT`@`@vAzA~@`Ad@d@r@t@h@j@\\^PP`@b@`@`@NNb@d@f@h@XZb@d@`@f@`@f@`@d@`@h@VZX^PTt@dA\\f@\\f@d@t@\\f@Vd@RZ\\j@NVHLPZn@jATb@l@hAj@jAVh@Zp@Xp@n@vAf@lAXv@Rf@Xv@LZTp@^bAPf@Rp@Xx@HVFVVv@@BPp@Tv@ZhA\\pA^rA\\nAXfAV~@Rp@Rx@Tv@V|@d@bBl@|Bh@pBLb@FPLf@Nj@ZhAJ^Tt@b@tA^lATn@^fALb@l@|AZz@b@dALXRh@N\\Vl@LXJTLXJRNXLVLXJTLVNXNVJTLVLTLTPZJPLTNVNVJRNTLTNTNTLRNTPXJPNTNRNRNTNTNRNRLPPTNRLPPTNPPTNRNPPTNPPPPTNRNNNPPRNRPPNRPPLRRTLNPRNPPRNPNRPRNPNPPRPRNRNPPRNPPRNPPRNPNRPRNRz@bApB`Cb@h@X^^b@HJX\\^`@RVLNb@f@NR`@d@NR`@d@FFX\\^d@b@f@`@f@^`@NRPT~@fAPR^d@RT`@f@`@d@^d@PTPPp@x@`@d@nAzAPTFFX\\PRp@t@NPRT^d@NPPTn@r@PRLNPRLJXZp@t@`@`@b@b@b@b@`@`@d@b@^^PNPPb@`@RPd@`@b@^JJVTb@^b@^NJTRPLNLd@\\BBLJRNl@d@n@b@`@XTNPLRLVPFDXPf@\\x@f@LHXPPJRLf@Xh@Xd@Vz@d@d@VLFXPz@b@BBXLZPj@Zn@\\|Ax@LHNHf@XzAx@l@ZnAp@TLNHHFFBf@XPJh@XRJRJRLPHRLRJRLRJTLNH@?RJRLPJXNJFTJPLRJTJPJRLRJTJLHFDLFRJRLRJb@VTJRLRJf@VRL`@TrAr@TLb@VZN^Rf@VPLTLRJPJRJf@XRJRJNHTLf@XRJd@VRJRLPHTLRJRJRLd@Vz@d@f@Xb@VVNNJVPLHPLZTJHPNVPLJPP`@\\PNRRRRNNNPPPNPNPPRNPPRNRNPNRDHHJJLBFNRNRLRDFJNLTLTNTLTLTNVJTLVLVLVLTLVJXDJDJLVJVJVb@lALZHTJZHXJZ\\lAJZHXHZFXHZFZH\\FVH^FXDXPz@DZNv@Fb@DVDZD\\DZF\\D\\DZF\\D\\DZDZD\\F\\LbAJp@RtAD^XpBL`APnALz@Lz@T`BNjAF\\l@rEF\\DZD\\DZFZD^DZLz@DZ@JJp@Hh@L|@Lv@L|@BPPnAN`ATzALt@F^F\\DXF\\FZF^Nt@Lv@H^FZH^@HTfAXtANt@Pv@Px@BJTdAJ\\FVH\\FXHZH\\Rv@Pr@HZH\\HVFV\\jAHXNh@Ld@Rr@Vz@Tp@L`@Pl@Vt@h@bBJXJX\\`Ah@vAJZTl@LXJZTh@Rf@Xr@\\x@\\v@Xp@Zr@JVZn@Xn@Vh@@DZn@Xn@d@bANZVl@\\t@Xl@Vh@h@nAXn@r@bBb@hAXp@`@dAJXXr@Vt@Tl@L\\Tr@Rh@Z~@Tt@X|@Tp@Pl@Rp@Tt@Tv@Rp@f@hBXhAXhAf@nBH^ZnAH^Jd@Nr@d@tBFZ@F^~AHd@^`B?@Lj@\\`Bv@pDd@tBd@xBf@zBTdAj@|Bn@hCh@zBLn@ZhARr@h@nBPl@L`@Pn@Lb@HTf@bBb@vATr@Vt@Tt@l@dB?@`@jAVr@Tp@JVLZHV@@JXVr@Vp@LXVp@JXXn@JZXn@JXLVJX~@xBZp@Vn@LVd@dAZn@Vl@P^JTLXLTJVLVTd@N\\LXLXNXHRLVLXXl@f@fAN\\Xn@JVLVJXLTHTXr@LXJVBFHRJVJVJVLZJVJXJVJXJXJVHXJVJZVr@JXJZTp@Tr@Tt@Tp@JZHXPh@V|@ZfAd@bBb@bBf@lB\\tAZpAXpAHXH^XrALj@Pz@^pBFZ^lBFZF\\F^TrALv@F^F\\Lv@Lx@Lz@Jv@F^PvAJz@PtAJz@Ff@Hn@NvAH~@Hv@NvAHt@Dd@BZD^D\\B^Jz@Hz@Hx@Hz@Hx@Hx@Hx@D^NxANpADd@PrAF`@D\\Jt@F^Lz@Lt@Fb@TpAF^Lr@Hb@FXF\\H^VlAZtAPt@ZrAZpARx@Tt@Pp@Tt@Pn@Vx@Vt@J\\HVJVZ~@j@zA`@hADJp@`Bn@|AN\\N\\rAnCxBhEbDtFdAdBdCfE^p@HLLVHLf@z@rFbLpDhIt@nBf@rA~@fCL^Vr@z@bCd@zA`CtHPf@`CnHnArD`@jAvDdJhAdCVj@tAtCnAfCZh@|AtClBfD~AdCtAxBfA|ALRNTPRNRNRNTNRNRNRBDNRRTDFFHNPPRNTNPNRJLDDNPNPPRNPPRNRPRNNFFHJNPPRPPFFFHPPNPPP@?NPPPPPLL@BPNPPPPPNPPPPPPLJBBPNPPPNPNPPPNB@LLPNRPPNLJ@BRNNNRNPNPNDDJJRNNLRPPNPNPNPNPPNL@@PNRNNNPN@@PNPPPNB@LLNNPPPPPPPPLNB@NPPPPRNPPPNRPRNPLP@@PRNRNRBBJNNRNRLP@BNRNTNR@BLPLTNRNTLTNTLTNTLVLTDFHLLTBFHNLVLVLTLVLVBDFPNVJVJTLXLVJXJVLVJXJT?@JXJVLZHVJXBFFPJVJZDJBJJZJXHXHXHXFPBJHXHXTt@FZHX?@HXHXF\\FT@DHZFZHZFZFXFZ?@FZFXBJBPFXF`@FXDZF\\FZBV@DFZD\\?@DXF\\D\\BR@HDZD\\BV@DD\\B\\DZB\\BV@DB\\D\\B\\B\\B\\@@B\\BZ?HBT@\\B\\BT?FB\\@^B\\?J@P@^@T@F@\\@^@\\@\\@X?B@\\@^B\\@\\@^?HDpA@\\@\\@^@\\@T?J@N@Z@\\?@@\\@^@X@`@@\\?@@Z@`@@P@J@^@Z?@@ZB\\@T?HBZ@^B\\?@BZ@\\B\\B\\B`@BXB\\B^BZ@J@RD\\Fx@D\\B\\D^@P@HD\\D\\BZD^@JBND^DZDZD^D\\D\\DZF\\?@DZD\\FZBR@FFZDZF\\DZF\\F\\DX?@H\\FZ?BDVH\\FX?@FXF\\FZDN@HH\\FZBJDNFXHZFZHZHZHZFZHXFV@BHZHXHZHXFPHZ@DJ\\HXHXJXHXJXJZHVHXJZJXJXJXJZHTJXJXJXJVLXJXJVJVLXJVJVJR@DJTBHHLJVLXLVJVLVNXJTJTNXLTLTLVLVLTLTLVNTLTDFFLNVLTNTLRNVLTNRNTLTNT@@LPNTNTNRLRBBJNNRPTNRNRNRJLBBNTNPNRPRNRPPNRNPPRPPNPPRPPNPJLDFLNRRHJDDNP@?NRDDJJNPJJBDPRPRNPLLBBNRPPFHHHNPFHFFNRNPRTLPPRNPNR@@NPLPPTHJDFNPNRNRPTLPPVLPDDJNHLBDNRBDJNNRLRNTNTNRNTLRNTNTLTNRNTLTNTNXLPLTNVLRLTLTNVLTLTNVHNPZLTLT?@NVLTLVLTLVLVJTNVJVLVLVLVLTDJDJLVLXLVFPBDJRLXJVLXLVJV@BHRLXBFFNHTBBJVBHFLJXJXJVLXBHFNJXBDFPJXLXHVBHFNJVJZ@@HTJZJZTn@Tr@Tn@Vt@JXL^FRVp@JZFRBFHVHTJZHTBFHTJXHXJXHV@@HVL\\HV@BHRJXJXJXJXJXJVFPBHLXHRPf@DLLXJVJXJR?@JVNZHVNZJTJTJVLZJPLZLZJR@BJRNZJTLVHRBDXl@JTBBJTLTLVFNDFZl@LTJR@@LTLX@@JPLTLTDFHNJRBDJPLTNVNTJRNVHLBDNVLTNRBFHLNTLTPTLT@BLPNTNRJPBBNTJP@@NTNRNTPThDrEt@~@p@x@h@n@d@l@^`@\\^r@v@h@l@r@t@r@t@h@f@r@r@r@n@|@v@d@b@t@n@x@n@bAx@h@^LJdAr@pA|@VPb@Vh@\\n@\\r@b@r@^l@\\l@Xt@^l@Xh@Tj@Vp@Xv@Z^NVHh@R|@Zz@XrA`@h@NRFTFRFh@Lh@Ld@JVFj@LRDj@Jh@Jf@Hj@Jh@Hj@HF@`@Fh@Fh@Fj@Fh@DTB~@Fh@Dj@FT@H@r@F`AHj@DtAJv@HF?h@Fh@Dj@FRBj@Fh@Fh@Hj@Hh@Jh@Hh@JVDrAVt@Np@Pp@Ph@Ln@Pp@Rz@VbA\\~@\\dC~@b@PFDVJLFlAh@rAn@~Az@dAj@|@h@XPb@Vh@\\p@d@rA|@fAv@^X\\VBB`Av@p@j@t@p@b@\\PPb@`@b@`@b@`@r@r@b@d@`@b@p@r@b@f@NPPPNP`@f@`@d@NRNR`@d@^f@^h@^f@^h@^h@^h@l@|@l@`Al@~@\\j@j@`A\\j@fArBh@dAh@bAt@|Af@fALVLX~@vBXn@d@jAd@hAd@hAXp@b@fALZJXXn@Vn@Xp@p@bBXp@Vn@Xp@Xp@d@hAp@bBVn@p@`BXr@~@xBp@`BVr@Xn@p@bBd@hAp@bBb@lAb@jAl@dB`@lAHXj@hBTt@Tr@\\pA\\lARv@Rt@ZpAPv@ZrAXpAPx@Nt@Px@Nv@VtATtANv@Lz@DXTvAJv@`@rCJv@BP@LJx@D\\B\\DXD^DZB^DXB^DZB^D\\B\\BZD^B\\B\\BZB^D\\@\\BZB^BZB^B^B\\@\\B\\B\\@\\B\\@^@\\B\\@\\B`@@h@BbAF`CFvBDlCBxBFhE?`@@r@BvAF`GDpD@vA@~@F`FFhEFjCDdBD`CHpBH~BJtB?@VnEHvALfBLjBNjBNdBRtBHz@NzAj@~EPpAR~ANhAVdBDVJn@BTZjBV|Af@pCBLN|@H`@VrAj@rC`@jBJb@Nl@H^Rz@Nj@\\rARv@XjAPl@BL^nAr@fCTp@`@tATp@Rl@J\\`@jA\\bAnAfDn@bBb@jAJVJVVr@Vl@d@nAHTLZXv@Pd@Xz@n@dBv@zBl@hBL\\Rn@`@lAj@dB^nAJXVv@Rn@J\\FVJVj@lB\\jATt@h@jB\\nARt@p@dCp@hCFRf@pBRv@ZpAd@lBXnAT|@^bBH\\XpANn@Lj@R~@Ll@ThAJd@XpAJh@Np@Lr@Pz@b@vBTfAP|@R`AVnAd@`C`@jBH\\Jh@d@rBd@vBRz@ZlANp@XnAj@|BRt@H^r@lCf@nBRr@h@nBZjAJ\\J\\ZhARp@`@tAHXt@`CDJbAdDDNpBfGnAtDfAzCtAzDZv@Zz@Pd@rAlDf@tAd@fAp@~Ab@|@d@|@f@`Ab@z@f@z@T`@NXV^`@l@bAvAb@l@f@n@^d@r@x@TXZ\\p@p@xAtATRPNLJNL`@\\b@^~@p@n@b@hAr@|BxANHf@\\LHDBt@b@NJpAv@`@T^TDBf@Xx@f@FDn@^v@d@B@jAr@t@d@jAt@d@X`@Xn@`@n@d@j@`@l@d@d@\\PNnAfAp@j@r@p@h@h@j@h@p@r@dAhArA|A@@nA~Ah@p@v@fA|@pAHLpAlB|@zAhAnBVf@p@pAFL\\n@R`@Td@NZR`@Xr@t@bBp@~Ax@vB`@hAZ|@JXp@vBJX~@zCDNr@|Bx@nCbAfDJXdAlDhAvDZbAb@xAPh@nBpGbEbNHXTr@`A`DTt@h@hBTt@Tr@Tt@Tr@JZHXHXTv@Tt@^nAj@hBTr@Tt@Rr@JZTt@Tr@Rt@Vt@Rr@Tt@Tt@HXJXHXJZJZRr@HXTr@`@pARp@\\jATt@`@nARt@j@hBRr@Tt@v@dCRp@Tt@Rr@Rr@HZHXRr@Rv@Rt@Pt@BFNn@Pt@Pv@FZHXH`@VpAXpAVtAJj@VtARnAN~@RtATxAl@vETvBTrBPbBFr@JpANrBNnBB`@NdCDp@H`BBx@FnAFlB@\\D~A@\\B~A@\\@|@@`@?z@@|@@|@?bA?d@?T?^?`@?z@AhBAp@A`B?`@A^CtC?FE~CAbAAZAzAAz@GxFCzC?xBAvC?tC?zB?tC@|A?x@@|@BvC?T@dABxB@zADxBDxBDvBDxBDzA?\\FtBD|ABt@LbDFpBFzAFvAFxAJzBJtB@LFhAFfA@VJpBB^F`ALrBNxB@NLbBHlADj@TpCJpAHlARfCTdClApMRfBtCrZx@vINrAZ~Cd@~ER`CNtAl@nGXvCbAnKd@dFdAnKLtAJbA\\pDHr@Fx@LjALtARtBNzAHx@v@dIXtCPpBNvA?BTdCfBtPZtC@FVtBLx@Hj@BLRtALz@ZnB\\tBNt@TtAXtAVtAXrAXrAXpAHZZpAXpARv@DPJ`@Rt@\\pARt@Rr@j@rBPl@t@bCTt@z@vC`@rARn@j@hB`BtFvC~J`AhD\\fAb@~A^pARl@Tz@\\nAZhAj@rB\\lAdA|Dn@dCDNLd@d@lBx@`DbA~Dv@`Dv@dDv@bDDTj@`CLf@vApGZvAj@fCVnAv@jD^nBXrA`@nBXrAVpAXtA^pBXrAVtAXrA^nBNx@^lBXrAVvAXpAVtABLRdA`@pBVrALl@P~@XtANz@Nr@VrALl@R`AVtA`@pBBPXvADNb@|BJl@R~@Lr@Nv@XzAl@hD?BTrADT\\vBz@nFBRh@jD`@pCJv@RtAXtBVrBPtAJr@J`AVvBHn@JbANjA@JTvBFn@@HRrB^~E`@xFvBrYl@jIBb@Dz@@HN|CXlHd@hML`DHdCNrDPpEDz@Bx@D|@Dz@@\\@`@B\\Bx@@\\B\\FxA@\\@^FxANlDNxDHtB@`@Bv@B^@^Dz@Bz@B^@Z@\\@\\Bz@@\\@x@@^@^@z@@z@@jA?`A@b@?`A?L?NAtB?t@Ah@An@?FAbAAp@Cr@A^?PEvACn@ATCz@Cd@Cp@GhACXIpA?HEn@Gz@IdAGp@KhAALKdAI|@ADANOrAE\\CPIp@Kz@CRAJEXG^EXKt@QbAKt@Kf@c@hC?@]pBAH_@rBCPKl@Mx@?@WdBIh@Ih@Gf@EXMz@Gd@MdAIp@Iv@Kv@AJOvAAHGn@KhAGt@E`@ALANI|@CZC^AFARC^CZEt@C^IfAMvBK~BKpCGfBCz@EpAGxC?DCpAAvAAvAAT?j@?dA?t@A^?^@p@?r@?n@@x@?^?\\@Z?`@BvB@r@Bx@BfADnA@b@Bz@@h@Bl@D`A@\\Bh@Dx@Bp@Dx@NzB@ZDd@NvB@VFl@Dh@H`ANfBRnB@LD^BXPxABVJ~@D\\DZD\\NnAPtAF`@Fb@@RF\\D^Hn@Fp@Fh@Fh@BRH|@DZD`@Fz@B^BZH`ABj@HpAFxADfADhA?RBv@@X@f@@\\?\\@x@?v@@hA?`@?d@?VA~@AdAAd@ArAC~@C~@C|@Et@A\\A^Gx@A`@El@Ef@En@El@IfACPKdAIx@Gl@Ir@M~@Ij@OfAM|@O`AQ`AUjAOx@SdAWfAS|@St@YjA]lAOj@K\\Wx@Wv@]`A_@fA[x@g@pAe@hAOXEJq@vA_@x@]p@e@|@o@hA]j@i@z@Yb@_@j@e@p@_@j@_@f@_@h@UXc@l@]d@_@h@QV[b@W\\GHQVMPW^SV[b@[d@SXGHIHQXQRY`@g@p@QXSXWZW^Y^Y`@QVMNSXW\\a@j@SZg@p@_@h@UXm@z@KNOROTo@|@QVQXILOTMTOTMTMVMTMVMVMTMVKTMVYn@KVMXWp@Wp@IXWr@KXIZ]lAKZGZSr@Qv@Qv@Ov@I\\GZEXMx@GZMx@EZG`@Ip@K~@Ix@Gz@Gz@Gr@Cd@A\\C\\Cr@G~AA|@Cx@?|A?|A@xA@|@BhADdADz@Dz@Bd@BZDv@HfAL`BFbANtBH`AJ|ANvBNxBJxAJpBN|BHxAHxAHrA@b@RvD@ZDbAB`@@VBZBf@Bv@Dz@FvABp@@^B^@Z@`@@ZNrD@^@\\@\\@\\@\\D|@@\\@`@@b@Bt@Bx@PvHDbA?T@Z@Z@d@@^Br@?P@P@h@@d@Bd@BnABf@@Z@`@@^@^Br@@f@DdADrA@^D`ABp@Dz@HnBDtAD`ADv@Bl@FpADr@Dx@FhADx@Dz@@ZPrCHtA@VDt@Dt@HfAB^LjBDr@VpDDf@TlDHbAXhD^tETnCBRR~BT~BLpA`@lEH|@f@lFLpATdCRzBHbAJnANnBDp@Bh@Bp@Dx@Dz@Dz@Bz@@\\B|@Bz@@^Bz@@x@@`@?Z@|@@j@?P?z@?x@@|AAx@?^Ax@?B?x@A|@C|@Az@A\\AZC|@AVAd@GzAARCd@Cz@CXA`@Gz@Ez@G~@CXGz@Gz@Iz@Gx@Ix@Kx@Iz@K|@Kv@Iv@Mz@Iv@G\\E\\Kx@Kx@QvAKx@Kz@Kx@Kx@Ix@Iz@Iz@C\\C^CXC\\E|@Gz@Ez@Cz@Cx@Ab@AZA|@AZ?\\A\\?z@?\\?Z?^?|@@~@@x@@\\@Z@`@B~@Dx@@R@f@Dx@F|@Dv@B\\F~@Dx@Fx@?DBXF|@Dz@Fx@Dz@F|@Fx@Dz@BTBd@Fz@Dz@Fz@Fz@Dz@Fz@Dz@Fp@J`BDz@BXB`@Dz@Fz@Fz@Dz@JzADx@DbAFdADdA@LBt@@b@@`@D`A@d@@|@@V@p@@f@@pA@dA?hA?R?t@?Z?b@?p@?^?\\A`@?\\CzA?TAh@A\\?XCd@Aj@A\\Af@Cz@Ep@C|@Cd@AH?RC^Eh@Ez@ARK`BIfAGr@UhCO`BMjAS~AE`@G^E`@G^E`@O`AWbBG^CJKt@I`@Y~AI`@G^I`@IZQ~@S~@U~@I\\I\\?@K^I^U~@c@|AIZMb@g@fBQf@Y|@Wx@[z@Yz@[z@Yt@[v@[v@]z@[t@]v@]t@_@v@m@nA_@r@q@nAYh@EHa@p@a@p@QXOVa@p@c@n@a@n@c@n@c@l@W^KNc@l@SXOTc@l@SXe@p@ORSZOTu@dAQTILGHc@l@a@l@SVc@p@c@l@QVQVSVOVe@n@OTQVQVe@n@c@n@a@l@g@p@OTc@l@QVQXu@dAe@n@GHGLKLY`@QVQTQVCDMPs@bAe@n@c@n@a@l@QTSZIJ[d@QTOTQVa@n@a@r@a@r@OXS\\MXOZOXOZOZMZOZMZMZMZMZM\\MZM\\MZK\\M\\K\\K^KZM^Uz@K^K\\I^K^I^I\\I`@I\\I`@I\\G`@I^G`@I^G^G^G`@G`@E^MbAG`@KbAE`@E`@E`@E^IbACb@C`@C`@C`@Cb@C`@AZEbAAb@A`@Ab@A`@A`@A`@AdA?dA?dA?dA?dA?j@?X?`@?`@?dA?dA?dA?j@?z@?dA?b@?`@?b@?`@?dA?b@?`@?`@?b@A`@?b@?h@AXAdAAfACbACdACbACdAC`@Ab@C`@A`@GdAEbAC`@Cb@GbAE`@C`@C`@Ej@CXE^CZ?FKbAKdAEd@E`@E^A@E`@E`@EVE\\Gl@G`@G^E`@G^G^Gb@G^G^G`@O~@I`@G^I^G`@I^G^I^I^I^I^G^K`@I\\S~@K^I\\U|@U|@U|@KZK`@U|@Wz@U|@K^K\\U|@W|@I^Wz@U|@K\\K^a@zAK^U|@K^I\\I\\K^I^I^K^I^GX_@jBS~@QbAW|AMn@Kr@q@xDAFCXObA?DS|AQ`BWjCSbCIfAIdAGdAKfBIfBI`BEjAEbBCt@CzACdBAfAAlA?P?B?D?VApA@jC@fB@z@DtDFhI?N@dA@hB@JBlD?HBxB@nA@fC@j@@lB@d@?r@DzE@`ARvV?Z@f@@pA@|A@bA@xBDxDBvC?`@@lABvB?b@?`@B|B@t@@dA@zA?^@z@?z@?|@?V@bA?t@AdA?pCA|@?v@A|AAxAA^Ad@?VAz@CzACdAATCzAC|@Cz@Ab@AVAd@Ct@C|@Cd@ATC~@Ex@Ad@CVA\\A\\E|@Ez@Gz@Ab@CXEz@KxAEz@Gx@C^C\\G|@Gx@Ed@AVEd@CRG|@Iz@Gz@Ix@Iz@?FIr@Ed@CTIz@Ix@Gd@CTEd@CTKz@Kx@CXG`@Eb@ETKz@Gb@CTGb@CTMz@Kx@Gb@ETGb@CTKz@Ib@CTGb@CTGd@ETKx@Gb@ETGb@Ir@Mz@Gb@Ip@O`ACVGb@ERGb@QpAM`ACTQtAM|@Kx@Kx@Kz@Kz@K|@CZKz@EZE^Gf@Gn@Ix@[tCMvASvBE^[nDOxA]pDg@nFa@pE]rDIz@MvAE^Ix@SvBQvBKz@MxAC\\Iz@OvAIz@MxAStBMxAI|@StBOxAMxAIz@MpA?FIz@Iz@Iz@OvAMxAE\\MxAWtCYrCWtCWtCg@lFE\\o@jHg@lFMzAStBE\\MvAu@hIq@hHWtCOxAC\\c@pEIz@Gx@OxASvBSvBWrCq@jHMxAEZWtCStBMxAI~@MvAMvASvBC^CZIz@QvBI|@Gx@UvCOvBKzAOvBKxAG|@Gz@MvBKzAIvAE~@CZIxAMzBC\\IvAI|AMvBG|@KvBMxBKzASrDM|BAXGz@E|@C^IxAIvAG|@GhAShD[vFKdBKvBSnDGdAIvAKzASvD[pFKtBKzAMxBMxBIzAEz@InAMbCUtDKxBG|@C\\Cb@KhBKdBIzAGhACf@ItAIvAGdAG|@MbCGbAI`AIdAC^KdAE`@K`AEb@E`@M~@MdAM~@Ib@M~@Q`AG^G\\I`@G\\CHGXI`@GXI`@CNGRI\\GXKb@U|@I^a@xAM`@Wx@W|@KZKXO`@Sp@EJM\\IRADi@rAO^[t@i@rAk@rAQ`@MZMZOZMZMZO\\MXM\\MZOZMZMZMZOZMZ]v@k@tA[v@MZOZMZM\\MXO\\[v@]v@]v@y@pBy@pBk@pA_@`AWj@M\\OXMZMZM\\OZMZMZMZOZMZMZOZMZM\\MXO\\MZMZOZMZMZOZO`@O\\MZOZMZMZMZOZM\\MX]x@MXM\\OZCHIPMZMZMZM\\MZM\\M\\KZK\\M^K\\I\\K^K\\I^K^I^I^I^G^I^G`@G^G^G`@G`@E`@G^E`@E`@E`@E`@C`@Eb@C`@C`@C`@C`@A`@Cb@C`@Cb@A`@C`@Cb@c@bKC`@A\\Cb@C`@A`@C`@Cb@C`@Cb@C`@C`@C`@C`@C`@C`@Cb@C`@C`@C`@C`@Cb@E`@C`@Cb@C`@C`@C`@C`@C`@C`@Cb@C`@C`@C`@C`@Cb@A`@C`@C`@Ab@C`@Cb@A^Cb@C\\_@~Ie@hKMjCCp@ShE[bH?JUtEOrD_@nIEz@C\\AZ?@C^AZA\\C^A\\C\\A^C\\A\\A\\C\\A^CZA\\C^A\\C\\A\\A\\C^A\\C\\A\\C\\A\\C\\A^C\\Cz@C^A\\CZA^C\\A^C\\A\\A\\C\\A\\C\\A\\C^C^AZC\\A^CZA\\C\\A^C\\C\\A^?@CZA\\C\\C\\A^CZC\\A\\C\\C^AZC^CZC^A\\C\\Ej@WpEMbBK~AMzB[rEGx@C^CZC\\C^E`@Et@C\\E\\C\\C\\C^CZC\\C\\C\\E\\C\\C\\AJAPC\\E\\C\\C\\C\\E\\C\\C\\C\\E\\C^CZE\\C\\C\\E\\C\\C\\E\\C\\CXADCXC\\C\\E\\CXAFCXC\\E\\C\\E\\C\\EZCXY|COrAI~@[|CMpAGr@QdBWhCy@dIGp@a@fEiA~KWhCm@fGWtCWbCg@fF}@bJIv@Gj@Ix@KhAE\\E\\C\\EZC\\E\\CZE^E\\C\\E\\C\\EZE\\C\\EZC\\E\\C^EZC\\E\\Iz@EZE^CZE\\C\\E\\E\\CZE^CZE\\C\\E\\E\\C\\E\\OxACZE\\C\\EZC\\E\\E\\C\\E\\CZE\\C\\E\\E\\CZE^C\\EZE\\C\\E\\C\\E\\C\\EZE\\CZE^C\\E\\E\\?BCXE\\CZE\\C\\E\\CZE\\E`@CZEZC\\E\\E\\CZE\\CX?BE\\E\\C\\E\\C\\EZC\\E\\E^C\\EZC\\E\\C\\EZE^CZE\\C\\E\\CZE\\CZA@CZE\\C`@EXE\\C`@EZCZE\\Ix@E^E\\It@E`@CRCZEZE^G\\EXEZEZAFETG`@SnAQx@Qx@WnAAB]xASx@Y`Ac@xA]fAUp@MZUr@Yp@ITMV[r@Wl@Ud@EFOZMVKRMXMTS\\_@p@i@|@Yd@OROVm@x@OTQR_@h@_@d@o@|@k@r@g@p@OTo@z@q@z@}@nAi@t@IHMT_@f@_@h@w@nAc@r@y@vAu@pAa@t@]l@[p@MTMVKRg@hACBe@bAi@nAo@~ASd@Qb@eBfEkAtCc@bAOZYp@[n@Yl@OXGLu@rAOZk@~@a@n@MR[h@EDKP_@j@]d@CD[b@SV[`@WZ_@d@QRMNw@|@_@`@UTIHc@`@SRQNYXc@^]XOLOLURSNWRgAt@c@\\e@Z?@MHYPIDcAl@e@Xu@^o@ZC@i@TYLIDKDi@Pc@NMDUJi@Rw@VA?o@Rq@P]Ho@Lk@LUDSBUDUDWBSDUBUBUBi@HC?k@Fi@Dg@Bk@D_AD{@DW@sADsAFiADi@BM@a@B_AF_@BO@g@F_@Do@J_@FYFc@Ho@Pk@N[J}@Z]Jm@Vm@Vs@^k@Xg@XOJMHe@XKHc@Zo@b@g@`@QNiElD_BnAaBjAgAp@m@\\SJ[NwAn@k@Ti@R]Ja@L_@JYHs@Nk@Ng@Je@Lo@Nc@Jc@LKBa@Li@Ps@Vg@Vo@ZULQLa@XUR[VYTSR]^QPQTSTSXCDCDKNQVOVYd@OZOZi@jACHA@GPKRITKXADITIZIXADQr@I\\I\\EXGVG^G\\AHQnAE\\ARGf@CXCb@Gv@Ch@En@GdAIvACTEr@Gp@APCP?@CZIx@Ih@EVEZG`@G\\?BGXG\\Qt@]nA[`A]fAg@hAi@fAMPKTMRILKPGHINY^W\\g@j@A@]\\UTQNONSNQN_@XWNSLc@VQHYLSHUJe@PSFUFUFUDQDa@Ho@Hc@DsANo@D[DG@s@F}@NSDSDYHWFy@XmAn@_@TOJOLSN[Xa@`@]\\[b@]d@U\\Wb@S`@Yl@Q`@Wp@Yv@Md@Qt@Mf@Kf@G`@Ih@Il@Gj@Gr@C^Ev@A`@A^A\\AZ?V?N@l@@x@DdAF|@H~@B^F^DXDZNz@@FBNH`@FXJb@j@|Br@lCRv@Pp@z@hDXrA\\~AZbBb@hCJp@Hh@NhAR|AD^RhB?@R|BDp@L~A@ZJ~A@R@VBZ@^@^RhGBl@FzBBz@@d@Bx@DjAf@tPH~BBz@Bz@B`AJ~C@^JzDDv@RzGDjB@^JbD@^@\\A^?ZB\\@\\@`@@\\@X?@@`@@ZB~@@TFbBFzBFnB?@@d@Bz@Bn@"
                     },
                     "start_location" : {
                        "lat" : 45.5390014,
                        "lng" : -74.38889929999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "23.4 km",
                        "value" : 23380
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 821
                     },
                     "end_location" : {
                        "lat" : 45.3142842,
                        "lng" : -75.897307
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eTrans-Canada Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-417 W\u003c/b\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "}}etGtivlMHdCB|@@\\@\\B^@Z@^B^B\\BXD`@B\\DZD^DZF\\F\\FZBLHf@J`@FXHXHXHZHVVz@FVJZHXHXHZHZHXHZFZHXF\\FZF\\FZHj@Fh@F^Df@BTBXB\\B^BZ@N@\\Bl@BZ@\\DdANrDNpD@f@JhCD`ABf@Bt@@\\B\\@\\@\\Dz@D|@Bp@Bp@@T@\\@^?F?T@b@?X?V?LAX?ZA\\A^A^AZADATCd@CVC\\C\\C\\C\\Gl@ALC^C\\CZC`@GbACb@Ah@E|A?\\?\\?\\@d@?^@Z@^@^@ZB\\@RDh@BZB\\BZD^Fb@Hn@Lv@DTLj@FXFZHZH\\HXH\\Z`AL^JVHXFLBFJXNd@Rd@HTL^~@fCDLJVRl@Zv@JZJVFTLZL\\L\\FPBFFPLXHXLZDJPd@HVPd@DJJZJXJV?@Tl@JZDHDLJXRh@Vx@BHDJL`@HXNf@Nh@HXRt@HZLd@VhAZpAFX@BXlAHZPt@Px@Pr@@DFVHZPt@Lb@XhAJb@Pn@HXH\\HVHZHXJZHXHXH\\Nb@Pn@Rn@@B^lAHVJXJZHXJXJXHXJTJ\\JXNb@Rh@Vp@Vr@LXFRN\\HVLXJVJXJXJVLZVp@HVLXJX@BHRJXLZJV@DN^n@`BJZVp@LZJXTp@JVJZPh@Nb@JXJZJXHXL^Rl@Z`Ab@|AZdABHHVHXH\\JZRr@HZFVHZLf@Nh@BNHXFVNl@H\\FXHZH\\FZH\\FXH\\Nr@H^FXH\\Nt@RdAJh@F^TfAHf@F\\FXHb@DVF\\DZFXLz@Jp@DTHj@RvABPLbALx@NfAHn@D\\D\\BPHf@LbAFh@DTFh@D^DZ@HVzBFl@DXD`@D\\DZBZD^D\\Jx@NlALnADZFb@PtAFj@D\\F\\Hn@Jt@Lz@DXDZFZBTBJF\\DZDXF^Hd@Hd@P~@FZF^Nv@F\\FZH`@DVFZH\\FXNt@BNLf@F\\FXBLLf@Jb@FVPx@HZFVH\\HZZnAH\\FR@BH\\JZPt@Tt@J\\Pn@Pl@Lb@L`@Tv@Ph@HXJXJ\\HVFPBFJZJXHVL^HTJXTp@JXJVd@rARf@L\\HVL^JTHVLXJZHTJZJVJXJXJXJXJVLZ@FFNJXJXJXPb@L^L\\LZJXLXHRLVNXJVJP\\l@t@lARXX^LNTXFHLLLPXXPNTRNLPNRNPLRPv@j@PLPL?@d@\\RNPLPLJHFDPLDBLJPLPNRNPLRNPN\\TXTRNRLNLRNRLPNRLPNRLPLPNRLRNPLPLRNPLRLPNRLPLFF\\TTPv@f@ZVb@Z~BbBRL\\VPLNNJHDBRNv@p@\\XBBPNb@^XVZX^^B@`@`@^^|@`AhAnAh@l@VXFFx@|@NPh@n@\\^\\`@vB`C`BjBPRLNJJ?@HHLNpC|C`GxGr@v@f@l@RRDDHLJJzAbBt@x@l@r@VXbAhAp@t@bBlBzAdBlBvBxHvI`@`@RVRTpKtLp@t@r@v@dAjA`ClCfAnAXZjCnC|@bAjAnAlBrBzBbCdDhDbChC`@`@x@z@hAlAv@x@JLf@l@BB\\d@b@n@^l@`@t@h@fAR`@@DvC|Gp@xAVl@Xl@Xp@Vl@BDb@bAhAfC\\x@`@~@j@nAj@pAd@dAJ\\b@v@p@|AbA|BdAfCNP|AnDrDjI`BxDnE|JfC|Fd@dAjBdEHX~D|IlApC`AxB`BtDd@bAjAlClApCTf@hC|Fn@xAbCtFfAbCn@xAHRNZN^`@|@nAnCxAfDnArCZr@bA|B`BtDpBrElBjE^z@`@`AZ|@b@jA^pAZnAPt@XrANv@DZ?@Lt@Hd@BVDZDXD^@J@LB\\D`@Fz@Bb@Bd@Bh@BXDbAFvBRpFPjELzDHzBFpB@b@FdBB`AH`CF~AJrDFlABv@@JPpDHxA@HJnAFr@N|AD^Jv@Ht@L`AJr@ZxBDXJl@TrAFXDZPfABPFZHl@N|@D^J|@Hn@D^Jz@Hx@Ht@Fl@Dn@Fl@B^TnDJtBDl@?DD|@BfA@FDnB@l@NtG@f@@`@Br@DdAD`AFfAJjBHhAH~@JxAFr@XjCBVBNVtB~@tHFh@r@vFHp@tA|KHj@Hl@NnA@FZdCFf@l@pEBVHl@TbBP~@F\\Jl@H\\FVJd@H\\DRFPJd@X~@ZhA\\hAVx@Pn@l@pBJVbAlDj@`B\\hAZdABH`@nARp@FRp@vBdAjDd@|A~@zCDPNd@Xz@hAtDJZDPt@`Cl@pBf@dBNf@Rn@h@dBj@nBRn@b@xAh@fBX`A\\jA`@pAZdAPl@ZdA\\jARp@b@vAPl@HTx@rCPj@Ph@Pj@Nh@Tp@Nj@d@xA\\hAf@`BPj@FR`@nAf@bB@Bj@hBPj@@Dj@hB^lApAjE@@Tt@tArErAnE?@r@|BNd@J^\\hAVz@lA~DbAbDX`A^nATp@`@vAVz@p@vBDLhAxDZ`AjBjG@Bf@`B~@zCLf@`@pAh@fBb@tA@Bv@hCRp@^nATv@DJNd@j@jBx@nCt@dCHXVx@d@~AHVz@rCrAlEb@tA^pA~@|CBHRn@r@|Bl@tBTr@l@nB^lA^dAJXp@lBPb@b@jAj@vAz@pB|@nB^t@Xl@Zn@f@`Aj@hA^v@x@~AlA~B\\p@pAjC~@hBtAnCh@dAj@hAXh@LXVf@P\\jAzB"
                     },
                     "start_location" : {
                        "lat" : 45.4193489,
                        "lng" : -75.6497112
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 548
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 41
                     },
                     "end_location" : {
                        "lat" : 45.31140509999999,
                        "lng" : -75.90296359999999
                     },
                     "html_instructions" : "Take exit \u003cb\u003e139\u003c/b\u003e for \u003cb\u003eAv. Kanata Ave\u003c/b\u003e toward \u003cb\u003eCh. Castlefrank Rd\u003c/b\u003e",
                     "maneuver" : "ramp-right",
                     "polyline" : {
                        "points" : "gmqsGdufnMFz@@BDJb@`Av@hBn@zA@Bn@zALXvBjFRd@P`@fBbE@Bv@bB`@z@"
                     },
                     "start_location" : {
                        "lat" : 45.3142842,
                        "lng" : -75.897307
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 247
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 36
                     },
                     "end_location" : {
                        "lat" : 45.309993,
                        "lng" : -75.90053970000001
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eKanata Ave.\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "i{psGnxgnMVe@h@iABETg@Tg@Ra@LOHMP]FM^}@p@yAPY"
                     },
                     "start_location" : {
                        "lat" : 45.31140509999999,
                        "lng" : -75.90296359999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 195
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 24
                     },
                     "end_location" : {
                        "lat" : 45.3088008,
                        "lng" : -75.8987118
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eCastlefrank Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "polyline" : {
                        "points" : "mrpsGjignM`AkBN]BELY\\m@@?\\m@n@cARYFI"
                     },
                     "start_location" : {
                        "lat" : 45.309993,
                        "lng" : -75.90053970000001
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "_plfGxytbNL|qE_|B~f@un@diRcObpXivAzjKe`Eb|WygAxlHywAnsAytEd_DkcEtsDkcBxk@eaJpMmfDgvCwuAk|A{`EsdAc{BqiCu`Biw@udB}wBywAls@k{EloHuuApvBmtAsx@}jBctEgwFuaIuzI}hF}}AeOeoAmrBwwBgdGioD{mQ{{AgeFevBgv@ebB}|H{AsrGyx@qvIgiDkvSg\\koBakAmpA_mAmtEowAsiIi~BoqDmrAkaPwWsuHgeDg{Jlx@_oElq@stDqSgmE{uC_pP}yBs}Gix@mjE{aChn@{pAdh@amBamAcwE}hG}iHqqM{oCkrCiwCqfCqqAyzD}hB}gFitEuyE}~A_fIytBfv@u`@frAd_@_iAtcA}f@gk@mrDsxBskM}lFyo[u}@q~FylAilCerCm_CeaBwmFm_Bc{CyAimF}xA_pKuaAyzEmeCecMmiAe_Fgn@afK|GetF{i@y|G{_ByaLweCg~N{yA{qGaRmnJuyA}cH_mHweF{VodDe`E_fG}~CeyJmkEiyIclEatL_q@}wJ}Pi~Kw~AuhK_oBk|Cke@i~B{mCcmMwoD{bYysDqjXkqE{eOjeA_cB}[wsAeJcyG~hA{gKaW{pCoxAawEtyAilI~cA_t@~{@sjBduEm_Gru@cgBcWya@eSaxGdy@ebEhSqlBsSys@|u@er@ttBi{B`{C}_GpqKmpJOw`BzaCwkBbjDysCtwAmfAwx@gdAyzAglBktAmdBkaDshFs^oeB{oB}fDmyCczEqtFyoHu{IkpPciFyvNggIctWglByrFcmAs]kmC{zImqFu~Qi}BobJmXwjGthAw|EsKckKgk@qlByRc{G_`HqzT}}L_b^mtEmjJc`CsvHwtF_mMgnEymHo`IytU_sAskBmbCqvKmvAeeC{dEubWmg@szQdGupHr[{oCaoAkkCelC}dEalBufDwh@d@~hApv@z|BztCcdE|jKnkA~uG{GlyEjm@jnG|fD`_JjrB|hH|oBrjHpBvcJ|{AvnIzQpyA{fAreA_kAdyCy}@`eGmZtrHkrAxnCyiDh_Man@`fErI|mCymAleBc}BjtBk~AzXozAbjHggBl_Mpk@faB~aEjoGbeB~dAjo@bzCryCdxKnpDxaH~aDl~InsDjbBvuAbtE`tAdcI`~CxmFxdDdyV|nAzeKyRrkEc_AhhKjPx`M}qBxfIa}@tvNqyBpsPoy@ddLc|BpwGyfC|fAubAlxBv|@npJp`BnzG`kBrmBlxEv|JrgA~iHdlCrxHhOqY"
         },
         "summary" : "ON-407 E",
         "warnings" : [],
         "waypoint_order" : [ 0, 2, 1 ]
      }
   ],
   "status" : "OK"
}
```

____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
