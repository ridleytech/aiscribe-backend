var _0xc377=["","\x76\x61\x6C","\x23\x64\x69\x64","\x23\x75\x69\x64","\x2C","\x73\x70\x6C\x69\x74","\x23\x6C\x61\x6E\x67\x75\x61\x67\x65\x73","\x23\x64\x69\x73\x70\x6C\x61\x79\x4C\x61\x6E\x67\x75\x61\x67\x65\x73","\x23\x63\x72\x65\x64\x69\x74\x73","\x23\x73\x75\x62\x74\x6F\x74\x61\x6C","\x63\x6C\x69\x63\x6B","\x64\x69\x73\x61\x62\x6C\x65\x64","\x61\x74\x74\x72","\x23\x73\x75\x62\x6D\x69\x74\x42\x74\x6E","\x6F\x6E","\x72\x65\x61\x64\x79","\x6C\x65\x6E\x67\x74\x68","\x74\x72\x69\x6D","\x50\x72\x6F\x63\x65\x73\x73\x69\x6E\x67","\x68\x74\x6D\x6C","\x23","\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x64\x6F\x63\x75\x6D\x65\x6E\x74\x2D\x74\x72\x61\x6E\x73\x6C\x61\x74\x69\x6F\x6E\x73\x2E\x70\x68\x70\x3F\x64\x69\x64\x3D","\x22\x3E\x56\x69\x65\x77\x20\x54\x72\x61\x6E\x73\x6C\x61\x74\x69\x6F\x6E\x73\x3C\x2F\x61\x3E","\x23\x72\x65\x73\x75\x6C\x74\x44\x69\x76","\x72\x65\x6D\x61\x69\x6E\x69\x6E\x67\x43\x72\x65\x64\x69\x74\x73","\x61\x70\x70\x65\x6E\x64","\x75\x69\x64","\x70\x72\x6F\x63\x65\x73\x73\x43\x72\x65\x64\x69\x74\x73\x2E\x70\x68\x70","\x74\x65\x78\x74","\x70\x6F\x73\x74","\x61\x6A\x61\x78","\x6C\x61\x6E\x67\x75\x61\x67\x65","\x64\x69\x73\x70\x6C\x61\x79\x4C\x61\x6E\x67\x75\x61\x67\x65","\x64\x69\x64","\x49\x42\x4D\x2D\x74\x72\x61\x6E\x73\x6C\x61\x74\x65\x2D\x62\x75\x6C\x6B\x32\x2E\x70\x68\x70","\x70\x61\x72\x73\x65\x4A\x53\x4F\x4E","\x74\x72\x61\x6E\x73\x6C\x61\x74\x69\x6F\x6E\x69\x64","\x6E\x6F\x6E\x65","\x43\x6F\x6D\x70\x6C\x65\x74\x65\x64","\x45\x72\x72\x6F\x72"];var fileName=_0xc377[0];var hasFile=false;var displayLanguages;var displayLanguage;var languages;var language;var ind=0;var input;var did;var credits;var amount;var remainingCredits;var uid;$(document)[_0xc377[15]](function(){did= $(_0xc377[2])[_0xc377[1]]();uid= $(_0xc377[3])[_0xc377[1]]();languages= $(_0xc377[6])[_0xc377[1]]()[_0xc377[5]](_0xc377[4]);displayLanguages= $(_0xc377[7])[_0xc377[1]]()[_0xc377[5]](_0xc377[4]);credits= $(_0xc377[8])[_0xc377[1]]();amount= $(_0xc377[9])[_0xc377[1]]();remainingCredits= parseFloat(credits)- parseFloat(amount);$(_0xc377[13])[_0xc377[14]](_0xc377[10],function(){$(_0xc377[13])[_0xc377[12]](_0xc377[11],true);nextLanguage()})});function nextLanguage(){if(ind< languages[_0xc377[16]]){language= languages[ind][_0xc377[17]]();displayLanguage= displayLanguages[ind];$(_0xc377[20]+ language+ _0xc377[0])[_0xc377[19]](_0xc377[18]);translate();ind++}else {var _0xacb0xf=_0xc377[21]+ encodeURIComponent(did)+ _0xc377[22];$(_0xc377[23])[_0xc377[19]](_0xacb0xf);processCredits()}}function processCredits(){var _0xacb0x11= new FormData();_0xacb0x11[_0xc377[25]](_0xc377[24],remainingCredits);_0xacb0x11[_0xc377[25]](_0xc377[26],uid);$[_0xc377[30]]({url:_0xc377[27],dataType:_0xc377[28],cache:false,contentType:false,processData:false,data:_0xacb0x11,type:_0xc377[29],error:function(_0xacb0x12,_0xacb0x13,_0xacb0x14){},success:function(_0xacb0x15){}})}function translate(){var uid=$(_0xc377[3])[_0xc377[1]]();var _0xacb0x11= new FormData();_0xacb0x11[_0xc377[25]](_0xc377[31],language);_0xacb0x11[_0xc377[25]](_0xc377[32],displayLanguage);_0xacb0x11[_0xc377[25]](_0xc377[33],decodeURIComponent(did));_0xacb0x11[_0xc377[25]](_0xc377[26],uid);$[_0xc377[30]]({url:_0xc377[34],dataType:_0xc377[28],cache:false,contentType:false,processData:false,data:_0xacb0x11,type:_0xc377[29],error:function(_0xacb0x12,_0xacb0x13,_0xacb0x14){},success:function(_0xacb0x15){var _0xacb0x17=jQuery[_0xc377[35]](_0xacb0x15);var _0xacb0x18=_0xacb0x17[_0xc377[36]];if(_0xacb0x18!= _0xc377[37]){$(_0xc377[20]+ language+ _0xc377[0])[_0xc377[19]](_0xc377[38])}else {$(_0xc377[20]+ language+ _0xc377[0])[_0xc377[19]](_0xc377[39])};nextLanguage()}})}