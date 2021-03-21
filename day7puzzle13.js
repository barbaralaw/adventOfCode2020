function findContainerBags(colorString, rules) {
  let allContainerBags = {};
  let keys = Object.keys(rules);
  for (let i=0; i < keys.length; i++) {
    let ruleBeingChecked = keys[i];
    let ruleDetails =  rules[ruleBeingChecked];
    if (ruleDetails.includes(colorString)) {
      let containerBags = findContainerBags(ruleBeingChecked, rules);
      allContainerBags[ruleBeingChecked] = true;
      for (let j=0; j < containerBags.length; j++) {
        allContainerBags[containerBags[j]] = true;
      }
    }
  }
  return Object.keys(allContainerBags);
}

regsArray = {
  "lightsalmon" : ["dottedolive" ,"wavylavender"],
  "darkpurple" : ["stripedmaroon" ,"wavymaroon"],
  "mutedlime" : ["drablavender" ,"clearorange" ,"stripedblack"],
  "lightgreen" : ["dullgray" ,"darkcrimson"],
  "brightviolet" : ["brightpurple"],
  "dottedmagenta" : ["wavybeige" ,"dottedbronze"],
  "wavybronze" : ["clearfuchsia"],
  "brightplum" : ["dimviolet"],
  "shinyyellow" : ["clearviolet" ,"drabmaroon"],
  "paletomato" : ["brightaqua"],
  "lightchartreuse" : ["vibrantfuchsia"],
  "mirroredblue" : ["paleaqua"],
  "mutedmaroon" : ["mutedindigo" ,"vibrantgold"],
  "cleargreen" : ["dottedbeige"],
  "mutedindigo" : ["dullgreen"],
  "fadedorange" : ["shinygold" ,"dimtomato"],
  "poshpurple" : ["poshturquoise" ,"dulllime" ,"vibrantfuchsia" ,"dullgreen"],
  "dimbeige" : ["dullfuchsia" ,"palesilver" ,"shinysilver"],
  "darktomato" : ["dottedmagenta"],
  "mutedchartreuse" : ["plaidchartreuse" ,"fadedorange"],
  "drabteal" : ["dottedblue" ,"stripedmaroon" ,"dottedtomato" ,"stripedgold"],
  "shinyolive" : ["dimblue" ,"dottedviolet"],
  "brightmagenta" : ["dottedsilver" ,"plaidblack" ,"poshtomato" ,"darksalmon"],
  "stripedcrimson" : ["mutedtomato" ,"mirroredblack" ,"wavyyellow" ,"fadedgreen"],
  "shinybronze" : ["stripedturquoise" ,"lightcoral" ,"stripedaqua" ,"dimbronze"],
  "stripedgray" : ["fadedcoral"],
  "stripedyellow" : ["clearchartreuse" ,"shinyviolet" ,"fadedgold"],
  "cleartan" : ["dimgreen" ,"dullwhite" ,"poshturquoise"],
  "darkbronze" : ["shinypurple" ,"darkcoral" ,"plaidgold"],
  "lightorange" : ["cleargreen" ,"mutedblue" ,"drabgray"],
  "wavyturquoise" : ["cleargold" ,"wavytomato" ,"dottedcoral"],
  "drabtan" : ["stripedlime" ,"clearorange" ,"palewhite" ,"brightyellow"],
  "darkplum" : ["stripedblue" ,"brightfuchsia"],
  "dottedblue" : ["paleaqua" ,"dottedorange" ,"dottedindigo" ,"plaidblue"],
  "lightwhite" : ["dullred" ,"fadedsalmon"],
  "posholive" : ["shinysilver" ,"darkbronze"],
  "dullolive" : ["darkplum" ,"dottedcoral" ,"clearblue" ,"dullmaroon"],
  "dimtomato" : ["dimchartreuse" ,"shinygold"],
  "clearlavender" : ["lightaqua" ,"dulltan"],
  "wavyteal" : ["dottedbeige"],
  "mirroredorange" : ["palebeige"],
  "dimpurple" : ["stripedgold"],
  "darkchartreuse" : ["wavytomato"],
  "brightcoral" : ["mutedviolet"],
  "drabyellow" : ["darkgold" ,"dottedgold" ,"mirroredchartreuse"],
  "clearorange" : ["brightcyan" ,"dulllavender"],
  "brightbrown" : ["lightteal" ,"dottedsalmon"],
  "drabviolet" : ["brightcrimson" ,"wavybronze" ,"wavylavender"],
  "dullturquoise" : ["vibranttomato" ,"lightindigo" ,"shinygreen"],
  "mutedcyan" : ["mutedplum" ,"drabred" ,"mirroredplum"],
  "paleindigo" : ["dimyellow" ,"brightred"],
  "vibrantgreen" : ["shinywhite" ,"fadedfuchsia" ,"clearorange"],
  "dottedcrimson" : ["clearfuchsia" ,"cleartan"],
  "drabmaroon" : ["mutedolive"],
  "dullbronze" : ["shinyindigo" ,"dimchartreuse"],
  "wavybrown" : ["brightteal"],
  "poshblue" : ["stripedblue" ,"drabteal" ,"shinyblack"],
  "clearchartreuse" : ["cleartan" ,"dimcyan" ,"drablime"],
  "fadedcoral" : ["dottedgreen" ,"plaidcyan" ,"brightcyan"],
  "dottedgreen" : ["drabgray"],
  "wavyorange" : ["stripedcoral" ,"stripedblue" ,"wavygreen"],
  "dottedtomato" : ["lightcrimson" ,"lightlime" ,"vibrantpurple" ,"clearplum"],
  "palefuchsia" : ["mutedorange" ,"dullorange" ,"poshbronze" ,"fadedpurple"],
  "wavylavender" : ["dulllime"],
  "dullblue" : ["stripedsilver" ,"brightbrown" ,"dottedgreen" ,"darkbrown"],
  "mutedbeige" : ["dimtomato" ,"shinypurple"],
  "palelime" : ["vibrantcrimson" ,"paleplum" ,"mirroredgold" ,"brightchartreuse"],
  "mirroredplum" : ["dimwhite" ,"poshcyan" ,"darklime"],
  "lightcoral" : ["clearsilver" ,"dimgreen" ,"stripedtomato"],
  "fadedlavender" : ["darktan" ,"wavytomato" ,"lightcoral" ,"dottedsilver"],
  "plaidlime" : ["lightorange" ,"drabblack" ,"drablime"],
  "vibrantcyan" : ["vibrantgray" ,"wavyteal"],
  "darkblue" : ["cleartan" ,"clearsilver" ,"drabblack"],
  "plaidcoral" : ["plaidaqua" ,"drabgold" ,"mirroredplum" ,"dimbronze"],
  "lightmaroon" : ["dimyellow" ,"lightred"],
  "plaidsilver" : ["palemaroon" ,"shinyblack" ,"darkcoral" ,"poshviolet"],
  "clearviolet" : ["vibrantfuchsia"],
  "clearcyan" : ["plaidyellow" ,"plaidolive" ,"dullgreen"],
  "dimmagenta" : ["wavyplum"],
  "drabsalmon" : ["dullwhite" ,"darkbrown"],
  "palemagenta" : ["mutedolive" ,"mirroredfuchsia" ,"shinypurple"],
  "drabcoral" : ["stripedsilver"],
  "lightgold" : ["shinyaqua" ,"dimviolet" ,"dottedorange"],
  "shinycyan" : ["mutedaqua" ,"stripedmaroon" ,"lightsalmon"],
  "drabbeige" : ["lightgold" ,"dullwhite"],
  "plaidfuchsia" : ["noother"],
  "vibrantteal" : ["mutedmaroon" ,"poshviolet" ,"cleartan" ,"dullorange"],
  "dimcyan" : ["darkturquoise"],
  "mirroredchartreuse" : ["dulllavender" ,"palered" ,"plaidchartreuse"],
  "plaidgold" : ["darkturquoise" ,"dimturquoise" ,"plaidfuchsia"],
  "wavygold" : ["lightlime" ,"wavytomato"],
  "wavyred" : ["dottedlavender" ,"dottedblue" ,"stripedbrown" ,"fadedorange"],
  "dullred" : ["drabgreen"],
  "lightred" : ["darkcoral"],
  "wavycrimson" : ["shinygold" ,"drabwhite"],
  "drabturquoise" : ["poshgold" ,"paleplum" ,"wavybeige" ,"drabbeige"],
  "dimlavender" : ["darkolive"],
  "shinytan" : ["shinyteal" ,"cleartan" ,"wavybeige" ,"poshcoral"],
  "mirroredfuchsia" : ["brightbrown"],
  "clearwhite" : ["brightcyan" ,"paleorange" ,"vibrantgold" ,"dimcyan"],
  "clearmagenta" : ["dullviolet" ,"dullcoral" ,"dullolive" ,"palecyan"],
  "mirroredsalmon" : ["drabgray" ,"stripedmagenta"],
  "vibrantcrimson" : ["shinyaqua" ,"fadedbronze"],
  "clearyellow" : ["brightbeige"],
  "stripedolive" : ["clearsilver" ,"dimorange" ,"poshblack" ,"stripedlavender"],
  "paleolive" : ["dottedblue" ,"fadedindigo" ,"palecrimson" ,"cleartan"],
  "stripedwhite" : ["drabsilver" ,"clearbrown"],
  "dottedchartreuse" : ["darkbrown" ,"dimmaroon" ,"plaidchartreuse" ,"darkred"],
  "dimfuchsia" : ["poshindigo" ,"clearpurple"],
  "shinylime" : ["mutedgold" ,"vibrantcrimson" ,"mirroredgreen"],
  "stripedblue" : ["clearcoral" ,"drabgreen" ,"dullgreen"],
  "shinybeige" : ["wavylime"],
  "dimtan" : ["cleargreen" ,"dullgreen"],
  "poshcyan" : ["fadedpurple"],
  "stripedviolet" : ["fadedorange" ,"plaidcrimson" ,"dullfuchsia" ,"brightblack"],
  "mirroredcrimson" : ["drabgray" ,"fadedcrimson" ,"dimwhite" ,"dullgreen"],
  "dimorange" : ["dimlime" ,"drabblack"],
  "drabcyan" : ["shinysalmon" ,"mutedplum" ,"dottedlavender" ,"plaidgray"],
  "drabbrown" : ["mutedpurple"],
  "mirroredwhite" : ["mirroredcrimson" ,"paleplum" ,"brightmaroon"],
  "vibrantsilver" : ["darkbronze" ,"lightolive" ,"poshcyan"],
  "wavymagenta" : ["mutedaqua" ,"clearbeige" ,"drabbeige" ,"fadedteal"],
  "stripedpurple" : ["palecrimson" ,"brightmaroon" ,"stripedbronze" ,"palegold"],
  "darkteal" : ["shinyaqua" ,"dullwhite" ,"dottedorange" ,"dullgreen"],
  "dottedcoral" : ["darkturquoise"],
  "vibrantlime" : ["dimpurple" ,"shinyblack" ,"dottedblack" ,"mirroredcoral"],
  "brightgold" : ["poshtan" ,"drabgray" ,"dottedmaroon" ,"clearfuchsia"],
  "darkfuchsia" : ["dullyellow" ,"dimorange" ,"mutedbeige"],
  "mutedtomato" : ["poshteal" ,"shinyolive"],
  "dullindigo" : ["mutedmaroon"],
  "brightpurple" : ["dottedolive" ,"wavychartreuse" ,"cleartan" ,"dottedgreen"],
  "wavyviolet" : ["stripedsilver" ,"paleplum"],
  "shinyorange" : ["drabblack" ,"drablime" ,"shinyblack" ,"fadedpurple"],
  "lightbeige" : ["dimcoral" ,"darkwhite" ,"lightcrimson" ,"mirroredcoral"],
  "drabtomato" : ["shinyteal" ,"drabbeige" ,"shinypurple"],
  "drablavender" : ["stripedtomato" ,"brightbrown"],
  "shinyplum" : ["plaidmagenta" ,"poshindigo" ,"wavyviolet" ,"clearwhite"],
  "dottedbrown" : ["mirroredolive" ,"lightyellow" ,"lighttomato"],
  "wavycoral" : ["mirroredplum" ,"poshpurple"],
  "shinymaroon" : ["mutedcyan" ,"wavyblue" ,"clearlime" ,"plaidorange"],
  "poshbronze" : ["plaidgold" ,"poshyellow" ,"wavylime" ,"dullwhite"],
  "brightfuchsia" : ["dullsilver" ,"lightlime"],
  "dullplum" : ["dottedsalmon" ,"shinylavender" ,"mirroredpurple" ,"brightcyan"],
  "brightaqua" : ["dullsalmon" ,"plaidcrimson" ,"shinytomato" ,"vibrantfuchsia"],
  "shinysalmon" : ["plaidorange" ,"drabgreen"],
  "mutedcoral" : ["dullindigo" ,"paleplum" ,"dottedblack"],
  "vibrantsalmon" : ["darkturquoise" ,"drabred"],
  "dullblack" : ["dullmagenta"],
  "plaidwhite" : ["shinypurple"],
  "drabgreen" : ["stripedmaroon" ,"darkcrimson" ,"fadedteal" ,"dullgreen"],
  "fadedpurple" : ["shinygold"],
  "stripedlime" : ["stripedturquoise" ,"clearsilver"],
  "clearblack" : ["darkbeige" ,"poshblack"],
  "vibrantpurple" : ["darkbrown"],
  "clearbeige" : ["lightteal" ,"plaidfuchsia"],
  "lightlime" : ["drabgray" ,"darkwhite" ,"drabtomato" ,"plaidmaroon"],
  "mutedviolet" : ["poshturquoise" ,"mirroredwhite"],
  "vibrantolive" : ["clearbeige"],
  "brightsalmon" : ["plaidorange"],
  "drabbronze" : ["shinyturquoise" ,"clearfuchsia"],
  "drabplum" : ["mutedgold" ,"mirroredturquoise" ,"fadedorange" ,"brightmagenta"],
  "dottedturquoise" : ["stripedmaroon" ,"mirroredviolet" ,"darkfuchsia"],
  "wavyolive" : ["vibrantmaroon" ,"shinytan" ,"vibrantyellow" ,"dottedsilver"],
  "wavytomato" : ["palewhite" ,"lightyellow"],
  "plaidchartreuse" : ["drabblack"],
  "palechartreuse" : ["mutedpurple" ,"dullgreen" ,"darkbrown" ,"lightteal"],
  "dottedcyan" : ["palesalmon"],
  "mutedgold" : ["plaidsilver" ,"dottedorange"],
  "poshorange" : ["poshpurple" ,"darkteal" ,"dottedsilver"],
  "palebrown" : ["fadedteal"],
  "wavyaqua" : ["mutedplum" ,"wavytomato" ,"mirroredgold" ,"drabtan"],
  "brightblue" : ["cleargreen"],
  "dottedred" : ["wavyplum" ,"mutedgreen"],
  "cleartomato" : ["brightcyan" ,"dullgray" ,"drabmaroon" ,"mutedindigo"],
  "plaidorange" : ["dottedcoral" ,"palegray" ,"shinyviolet" ,"paleaqua"],
  "mutedteal" : ["mutedmaroon" ,"drabteal" ,"lightteal"],
  "wavyblue" : ["palechartreuse" ,"shinywhite" ,"poshteal"],
  "poshteal" : ["palechartreuse"],
  "mirroredmagenta" : ["brightaqua"],
  "vibrantorange" : ["mirroredmagenta" ,"mirroredviolet" ,"poshindigo" ,"fadedorange"],
  "poshblack" : ["brightred"],
  "palewhite" : ["darkteal" ,"dottedsilver" ,"cleargreen"],
  "poshtomato" : ["shinyyellow" ,"lightblack" ,"drabblue" ,"wavycrimson"],
  "mirroredteal" : ["drabgray" ,"lightlime"],
  "mutedgreen" : ["stripedbrown"],
  "dimgold" : ["poshindigo" ,"clearindigo" ,"poshgray"],
  "dullgray" : ["poshorange" ,"shinygold" ,"dimtomato" ,"brightcrimson"],
  "stripedgreen" : ["darktan" ,"drabgray" ,"mirroredbrown"],
  "clearcoral" : ["stripedbrown" ,"lightlime"],
  "poshbrown" : ["vibrantpurple" ,"darkchartreuse" ,"shinycyan"],
  "dottedblack" : ["brightcrimson" ,"poshorange" ,"lightgold" ,"darkbrown"],
  "poshchartreuse" : ["wavysalmon" ,"stripedsilver" ,"drabviolet"],
  "mirroredtomato" : ["palecrimson"],
  "brightyellow" : ["shinycoral" ,"mutedblue" ,"wavybeige"],
  "dullsalmon" : ["brightblue" ,"dullgreen" ,"drabsalmon"],
  "paleblack" : ["shinysalmon"],
  "drabaqua" : ["stripedfuchsia" ,"lightlavender" ,"lightmagenta"],
  "mutedyellow" : ["stripedplum" ,"fadedbeige" ,"dullsalmon" ,"brightred"],
  "stripedbrown" : ["brightred" ,"shinyviolet"],
  "poshwhite" : ["mirroredviolet" ,"mutedsilver"],
  "poshlavender" : ["lightcrimson" ,"palesilver" ,"shinygreen" ,"mirroredsilver"],
  "plaidbeige" : ["mirroredsilver"],
  "dullsilver" : ["dottedsilver" ,"drabsalmon"],
  "darkviolet" : ["dottedgreen" ,"mutedaqua" ,"brightchartreuse"],
  "dottedmaroon" : ["clearred" ,"drabblue" ,"vibrantgray"],
  "dimgreen" : ["dottedsilver"],
  "vibrantfuchsia" : ["shinyviolet" ,"dimviolet" ,"dottedbeige"],
  "mutedsalmon" : ["dimwhite"],
  "draborange" : ["darkteal"],
  "vibrantviolet" : ["poshcyan" ,"mirroredbrown" ,"darkbeige"],
  "brightcrimson" : ["plaidfuchsia" ,"drabblack"],
  "mutedplum" : ["stripedbrown" ,"dullgreen" ,"mirroredbeige"],
  "plaidviolet" : ["dottedindigo"],
  "wavyyellow" : ["plaidlime" ,"mirroredorange"],
  "fadedteal" : ["clearplum" ,"poshpurple" ,"mutedplum" ,"dimtomato"],
  "vibrantbrown" : ["lighttan" ,"lightlime"],
  "vibrantturquoise" : ["clearbronze" ,"stripedgray" ,"palegreen" ,"vibrantindigo"],
  "darkblack" : ["mirroredgray"],
  "mutedorange" : ["dullorange"],
  "shinyaqua" : ["poshturquoise"],
  "poshfuchsia" : ["shinyfuchsia" ,"lightgold"],
  "lightplum" : ["paleteal" ,"plaidmaroon" ,"drabmaroon"],
  "poshplum" : ["mutedmagenta"],
  "plaidteal" : ["mutedgray" ,"clearbronze" ,"paletomato"],
  "paleaqua" : ["poshturquoise" ,"lightchartreuse" ,"palewhite" ,"lightgold"],
  "brighttomato" : ["brightyellow" ,"darkred" ,"shinyorange" ,"dimteal"],
  "lightteal" : ["noother"],
  "darkolive" : ["drabgray" ,"stripedteal"],
  "dottedtan" : ["shinysalmon" ,"lightblack" ,"brightred"],
  "lightcyan" : ["clearbeige" ,"plaidorange" ,"wavylavender"],
  "darkindigo" : ["mirroredorange" ,"poshbrown"],
  "clearfuchsia" : ["darkred" ,"poshblack"],
  "dottedsalmon" : ["palegray"],
  "mirroredturquoise" : ["lightaqua"],
  "plaidolive" : ["dullsilver" ,"lightblack"],
  "poshcrimson" : ["drabblack" ,"dimteal" ,"lightcyan" ,"darkteal"],
  "dulllime" : ["noother"],
  "drabchartreuse" : ["fadedtan"],
  "fadedgray" : ["darkcrimson" ,"lightlavender" ,"dimsilver"],
  "wavyindigo" : ["mutedchartreuse" ,"dimgreen" ,"lightfuchsia" ,"shinywhite"],
  "lighttan" : ["lightolive" ,"dimcyan" ,"plaidorange"],
  "lightfuchsia" : ["shinyindigo" ,"wavycoral" ,"wavytomato"],
  "dullyellow" : ["fadedcoral" ,"dimwhite" ,"dullwhite"],
  "drabmagenta" : ["mutedviolet" ,"lightplum" ,"fadedorange"],
  "mirroredgray" : ["wavycyan" ,"drabteal" ,"clearred" ,"brightlavender"],
  "dullcoral" : ["brightyellow" ,"dullviolet" ,"darkorange" ,"brightgreen"],
  "mirroredolive" : ["drabplum" ,"plaidorange"],
  "mutedolive" : ["shinygold" ,"shinyaqua" ,"wavychartreuse" ,"wavylavender"],
  "cleargold" : ["brightpurple" ,"lightcyan" ,"wavytomato"],
  "plaidgreen" : ["shinyyellow" ,"lightsalmon" ,"lightsilver" ,"dimpurple"],
  "poshred" : ["darkviolet"],
  "mutedpurple" : ["drabsalmon"],
  "vibrantaqua" : ["clearbeige" ,"vibrantsilver" ,"fadedolive"],
  "stripedindigo" : ["plaidbrown" ,"lightaqua" ,"paletomato"],
  "wavytan" : ["fadedindigo" ,"vibrantchartreuse" ,"drabbeige" ,"drabgold"],
  "shinygold" : ["wavychartreuse"],
  "wavypurple" : ["fadedmaroon" ,"palemagenta"],
  "mirroredindigo" : ["plaidblack" ,"darkteal" ,"dullindigo"],
  "plaidcrimson" : ["dottedgreen" ,"dullwhite"],
  "darkaqua" : ["wavycoral" ,"plaidcrimson"],
  "shinyfuchsia" : ["darkolive" ,"wavysilver" ,"brightturquoise" ,"dullwhite"],
  "stripedorange" : ["dottedgreen" ,"mirroredcoral" ,"dullindigo"],
  "drabpurple" : ["poshorange" ,"brightblue"],
  "dullorange" : ["dimindigo" ,"paleorange"],
  "paleplum" : ["lightyellow"],
  "palecyan" : ["drabsalmon" ,"dullmagenta" ,"clearplum" ,"fadedtomato"],
  "dottedindigo" : ["mirroredbeige" ,"drabblack" ,"shinyaqua"],
  "shinylavender" : ["mutedbeige" ,"brightcyan" ,"dullgreen"],
  "drablime" : ["drabblack" ,"dottedsalmon"],
  "mirroredbronze" : ["dimbronze" ,"stripedtan" ,"clearmaroon" ,"dottedcoral"],
  "shinybrown" : ["stripedgold" ,"vibrantsilver" ,"shinygold"],
  "stripedchartreuse" : ["vibrantgray" ,"darkcyan"],
  "mutedblack" : ["plaidindigo"],
  "mutedaqua" : ["palered" ,"paleaqua"],
  "brightmaroon" : ["drabblack" ,"clearviolet" ,"dottedlavender" ,"mirroredturquoise"],
  "vibrantchartreuse" : ["palesilver"],
  "dullpurple" : ["mirroredchartreuse"],
  "clearbrown" : ["lightcoral" ,"plaidcyan" ,"dimbrown"],
  "shinyteal" : ["drabblack" ,"shinysilver" ,"mutedpurple"],
  "dullaqua" : ["dottedlime" ,"mirroredlime"],
  "wavygreen" : ["stripedbrown" ,"stripedturquoise" ,"dullsilver" ,"drabwhite"],
  "cleargray" : ["paletan" ,"poshtomato" ,"darkbrown" ,"stripedviolet"],
  "brightcyan" : ["drabsalmon" ,"lightcrimson"],
  "clearsilver" : ["mirroredturquoise" ,"poshorange" ,"lightgold" ,"cleargreen"],
  "palepurple" : ["dottedbeige" ,"poshorange"],
  "stripedtomato" : ["dottedgreen" ,"darkturquoise"],
  "mutedtan" : ["fadedgreen" ,"dimcyan"],
  "darkcoral" : ["dimchartreuse" ,"stripedplum"],
  "shinywhite" : ["poshorange"],
  "dimolive" : ["fadedteal" ,"palelime" ,"dimteal"],
  "fadedblack" : ["palecyan" ,"dullgray" ,"lightteal" ,"shinybronze"],
  "lightindigo" : ["dimcyan" ,"shinysilver" ,"dulllavender"],
  "dimcoral" : ["stripedsilver" ,"dimtomato"],
  "plaidtan" : ["mirroredturquoise" ,"dimbeige" ,"shinylavender" ,"dimbronze"],
  "stripedplum" : ["wavylavender" ,"drabwhite"],
  "fadedwhite" : ["dimcoral"],
  "dottedlime" : ["mutedgold" ,"shinyviolet" ,"plaidviolet" ,"wavybronze"],
  "dottedviolet" : ["poshorange" ,"plaidfuchsia"],
  "dullgold" : ["vibrantcrimson" ,"drabbronze" ,"dottedtan"],
  "brightred" : ["palewhite" ,"lightchartreuse" ,"clearbeige" ,"dottedgreen"],
  "wavycyan" : ["dottedchartreuse" ,"wavyviolet" ,"poshcoral" ,"dottedbronze"],
  "fadedfuchsia" : ["poshmaroon" ,"clearplum" ,"drablime"],
  "dimviolet" : ["noother"],
  "stripedbronze" : ["dimorange" ,"darkorange" ,"darksalmon" ,"fadedteal"],
  "drabolive" : ["stripedviolet" ,"palebeige"],
  "mutedred" : ["paleaqua" ,"wavycyan" ,"clearwhite" ,"drabred"],
  "shinyblue" : ["plaidaqua" ,"drabsalmon" ,"paletan" ,"vibrantcyan"],
  "dottedolive" : ["darkbrown"],
  "shinysilver" : ["lightgold" ,"brightcrimson" ,"darkturquoise"],
  "darkbeige" : ["mirroredred" ,"darksalmon" ,"stripedsilver" ,"plaidorange"],
  "plaidred" : ["wavyfuchsia" ,"shinyturquoise" ,"shinycoral"],
  "mirroredbeige" : ["plaidcrimson" ,"dottedbeige" ,"clearbeige" ,"mutedblue"],
  "dimplum" : ["stripedcyan" ,"shinybeige" ,"vibrantolive" ,"lightmaroon"],
  "dottedbeige" : ["shinyviolet" ,"dimviolet" ,"dullwhite" ,"plaidfuchsia"],
  "palebeige" : ["lightaqua"],
  "dimgray" : ["dottedindigo" ,"dimcoral"],
  "lightpurple" : ["shinybrown" ,"drabviolet" ,"stripedtomato"],
  "darksalmon" : ["dimgreen" ,"dimtan"],
  "mirroredlime" : ["lightgold" ,"drabtan"],
  "clearblue" : ["drabtomato" ,"paleolive"],
  "plaidlavender" : ["shinyindigo" ,"mutedcrimson" ,"mirroredlime"],
  "vibranttomato" : ["drabsalmon" ,"fadedpurple" ,"fadedbronze" ,"brightfuchsia"],
  "poshturquoise" : ["dimchartreuse"],
  "clearturquoise" : ["mutedindigo" ,"darkmaroon" ,"dullcoral"],
  "drabcrimson" : ["plaidturquoise" ,"fadedsalmon"],
  "darkbrown" : ["noother"],
  "fadedtomato" : ["lightcyan" ,"lightmaroon"],
  "clearplum" : ["drablavender"],
  "brightwhite" : ["dimtan" ,"fadedorange" ,"dimaqua"],
  "shinygreen" : ["dottedcoral" ,"mirroredwhite" ,"shinygray"],
  "clearolive" : ["mirroredteal"],
  "stripedred" : ["palegreen" ,"lightmaroon"],
  "dulltomato" : ["mirroredwhite" ,"poshbronze"],
  "lightsilver" : ["mirroredplum" ,"dimteal"],
  "stripedteal" : ["lightbronze"],
  "mirroredtan" : ["lightgold" ,"poshbrown"],
  "clearpurple" : ["clearmagenta" ,"paletomato" ,"lightblack"],
  "fadedgreen" : ["lightgreen" ,"plaidbronze"],
  "shinyred" : ["darkwhite" ,"poshgreen" ,"shinyindigo"],
  "mutedwhite" : ["dottedcoral" ,"wavyblue"],
  "dimcrimson" : ["wavyblue" ,"palegray"],
  "stripedlavender" : ["darkblue" ,"paleaqua" ,"stripedturquoise" ,"darkcoral"],
  "wavygray" : ["mutedgray" ,"palesilver" ,"mutedblue" ,"paletomato"],
  "mirroredsilver" : ["mirroredblack" ,"mirroredplum" ,"stripedsilver" ,"dottedgreen"],
  "lightcrimson" : ["fadedmaroon" ,"dimchartreuse" ,"dottedviolet"],
  "shinycoral" : ["shinysilver" ,"poshyellow" ,"plaidblue" ,"shinyaqua"],
  "palered" : ["drabwhite" ,"dottedsilver" ,"drabsalmon" ,"dullgreen"],
  "poshmaroon" : ["dimgreen"],
  "poshgold" : ["palegreen" ,"stripedsilver"],
  "lightblue" : ["dottedsilver" ,"mutedbeige"],
  "palelavender" : ["vibrantorange" ,"dullchartreuse"],
  "fadedgold" : ["shinygray"],
  "brightorange" : ["poshteal" ,"wavygreen" ,"brightchartreuse" ,"darkwhite"],
  "mirroredviolet" : ["palewhite" ,"darkbrown" ,"brightblue"],
  "dimwhite" : ["cleargreen"],
  "lightaqua" : ["noother"],
  "dullchartreuse" : ["stripedgold"],
  "clearsalmon" : ["palesalmon"],
  "brightolive" : ["poshblue"],
  "brightlavender" : ["palelime"],
  "paleturquoise" : ["mutedchartreuse"],
  "vibrantwhite" : ["lightred"],
  "dottedsilver" : ["darkbrown" ,"darkturquoise" ,"dimviolet"],
  "dullgreen" : ["lightteal" ,"drabblack"],
  "wavyplum" : ["paleindigo" ,"plaidyellow" ,"wavygreen" ,"mutedgreen"],
  "vibrantyellow" : ["brightbeige" ,"dimbrown" ,"dottedteal"],
  "fadedbeige" : ["dimbrown" ,"cleargold"],
  "dottedpurple" : ["shinywhite"],
  "mirroredgreen" : ["darkred" ,"drabviolet" ,"brightlavender"],
  "shinytomato" : ["stripedlavender"],
  "brightsilver" : ["dottedmagenta" ,"dimgreen" ,"mutedcoral" ,"shinyteal"],
  "plaidmaroon" : ["dimbrown"],
  "dimsalmon" : ["paleolive" ,"darkcrimson"],
  "darkgold" : ["darkorange" ,"brightfuchsia" ,"dullsalmon" ,"darkblue"],
  "stripedcyan" : ["plaidblue" ,"darkorange" ,"clearviolet"],
  "darkgray" : ["lightorange"],
  "poshgray" : ["plaidmaroon" ,"drabgold" ,"mutedgold" ,"lightbronze"],
  "palegold" : ["clearorange" ,"dimorange"],
  "paleteal" : ["poshteal" ,"palered"],
  "vibrantlavender" : ["plaidsilver" ,"clearorange" ,"poshsilver" ,"wavyviolet"],
  "dimblack" : ["darkplum" ,"plaidturquoise" ,"dullsalmon" ,"clearorange"],
  "darkwhite" : ["vibrantfuchsia"],
  "darkred" : ["shinyviolet" ,"vibrantfuchsia" ,"palecrimson"],
  "stripedsilver" : ["poshpurple" ,"darkwhite"],
  "stripedturquoise" : ["brightbrown" ,"dottedgreen"],
  "wavysalmon" : ["lightteal"],
  "mutedturquoise" : ["brightgray" ,"plaidorange" ,"mutedblue" ,"dottedolive"],
  "wavyblack" : ["mirroredblack" ,"stripedplum" ,"dulllime" ,"poshteal"],
  "stripedtan" : ["palegreen"],
  "darkturquoise" : ["shinyviolet" ,"darkbrown"],
  "plaidblack" : ["plaidcrimson" ,"dimturquoise" ,"dottedblack"],
  "lightturquoise" : ["plaidchartreuse" ,"dullviolet"],
  "plaidgray" : ["lightyellow" ,"stripedlavender" ,"wavychartreuse" ,"dottedsalmon"],
  "drabblack" : ["noother"],
  "plaidcyan" : ["dimtan" ,"plaidgold" ,"drabgray"],
  "brighttan" : ["plaidolive" ,"mirroredblack"],
  "fadedbrown" : ["dottedtomato"],
  "dottedfuchsia" : ["drabsilver"],
  "drabwhite" : ["shinyviolet"],
  "poshsalmon" : ["stripedturquoise"],
  "dullmaroon" : ["fadedindigo"],
  "brightbronze" : ["mutedblue" ,"darkchartreuse" ,"wavypurple" ,"vibrantviolet"],
  "plaidbronze" : ["darkbrown"],
  "darklavender" : ["dimyellow" ,"drabred" ,"brightturquoise" ,"shinyblack"],
  "wavysilver" : ["lightyellow" ,"palered"],
  "paletan" : ["dullorange" ,"dottedolive" ,"vibrantpurple" ,"dulltan"],
  "paleorange" : ["lightteal" ,"dimmaroon"],
  "shinyindigo" : ["drabmaroon" ,"dottedindigo" ,"brightpurple" ,"stripedbrown"],
  "mutedfuchsia" : ["poshcrimson" ,"clearbeige"],
  "plaidplum" : ["clearsilver" ,"lightcyan" ,"vibrantgray" ,"drabpurple"],
  "fadedviolet" : ["dottedbeige" ,"mutedaqua"],
  "dottedplum" : ["plaidbrown" ,"wavygreen" ,"darkcyan" ,"palered"],
  "vibranttan" : ["cleargray"],
  "drabsilver" : ["dullchartreuse"],
  "shinyturquoise" : ["darkolive"],
  "darksilver" : ["dottedblack"],
  "stripedbeige" : ["stripedmagenta"],
  "dottedorange" : ["lightaqua" ,"poshturquoise"],
  "shinymagenta" : ["drabsalmon" ,"mirroredorange"],
  "poshmagenta" : ["plaidfuchsia" ,"dimmaroon"],
  "clearbronze" : ["wavyfuchsia" ,"vibrantblack"],
  "dullviolet" : ["mutedindigo" ,"poshgreen" ,"stripedwhite" ,"clearred"],
  "poshlime" : ["vibrantcyan"],
  "palesilver" : ["darkcrimson" ,"lightsalmon" ,"clearbrown"],
  "poshyellow" : ["dimwhite" ,"palecrimson"],
  "vibrantbronze" : ["fadedgray" ,"dimgray" ,"poshcyan" ,"plaidlavender"],
  "dullbeige" : ["wavyfuchsia" ,"plaidcrimson" ,"darkblue" ,"wavysilver"],
  "dullbrown" : ["paleturquoise" ,"cleartan"],
  "fadedturquoise" : ["plaidgold" ,"wavychartreuse"],
  "darkyellow" : ["wavylavender" ,"darkcoral"],
  "dottedgray" : ["poshpurple" ,"wavylavender" ,"shinygreen" ,"plaidwhite"],
  "dimaqua" : ["dulllime"],
  "poshviolet" : ["mirroredtomato" ,"poshcyan"],
  "shinygray" : ["cleargreen" ,"wavybronze" ,"darkturquoise" ,"palewhite"],
  "drabred" : ["mirroredviolet" ,"dottedorange" ,"darklime" ,"brightpurple"],
  "stripedmagenta" : ["stripedbrown"],
  "dullmagenta" : ["dimtomato" ,"mutedbeige" ,"clearviolet"],
  "clearmaroon" : ["plaidlime"],
  "poshsilver" : ["mirroredred"],
  "darkcrimson" : ["mirroredviolet"],
  "palemaroon" : ["shinyblack"],
  "darkmagenta" : ["darkgreen" ,"lightplum"],
  "brightlime" : ["paleindigo" ,"dimyellow" ,"drabmaroon" ,"lightplum"],
  "darkorange" : ["wavylavender" ,"dottedorange" ,"lightcrimson" ,"lightyellow"],
  "wavylime" : ["clearblue" ,"mutedbrown" ,"mirroredviolet" ,"dottedlavender"],
  "dottedlavender" : ["poshteal" ,"darkred" ,"palegray"],
  "mutedbrown" : ["darkwhite" ,"dullmaroon" ,"fadedmaroon"],
  "dimyellow" : ["darkwhite"],
  "fadedtan" : ["lightcoral" ,"lightyellow"],
  "fadedcrimson" : ["plaidfuchsia" ,"plaidorange"],
  "palesalmon" : ["palered" ,"dottedolive" ,"plaidmagenta"],
  "dimbronze" : ["mutedplum" ,"lightcyan" ,"darkcoral"],
  "brightteal" : ["vibrantviolet" ,"stripedbronze" ,"stripedviolet" ,"darkgray"],
  "palebronze" : ["plaidbrown" ,"plaidwhite"],
  "vibrantplum" : ["drabtan" ,"plaidyellow" ,"fadedfuchsia"],
  "dottedteal" : ["fadedcoral" ,"fadedindigo" ,"poshviolet" ,"paleindigo"],
  "plaidsalmon" : ["darklavender" ,"poshbronze" ,"lightcoral" ,"poshorange"],
  "dimred" : ["lightviolet"],
  "drabgold" : ["wavysilver" ,"lightbronze"],
  "shinyviolet" : ["noother"],
  "mirroredmaroon" : ["drabyellow" ,"wavybeige"],
  "dottedaqua" : ["mutedplum"],
  "fadedsalmon" : ["mirroredolive" ,"dimlavender"],
  "lightviolet" : ["wavysalmon"],
  "plaidbrown" : ["fadedindigo"],
  "mirroredcoral" : ["palegray"],
  "mutedlavender" : ["poshbeige" ,"clearsilver" ,"dottedbronze"],
  "brightturquoise" : ["stripedblack" ,"dullmaroon"],
  "vibrantgold" : ["brightpurple" ,"brightred"],
  "mutedmagenta" : ["clearviolet" ,"mutedlavender" ,"fadedaqua"],
  "fadedsilver" : ["poshbrown" ,"mirroredsilver"],
  "dimteal" : ["dimviolet" ,"darkwhite" ,"dottedblack"],
  "stripedmaroon" : ["shinywhite"],
  "darkmaroon" : ["plaidsilver" ,"dullred" ,"shinycoral" ,"brightwhite"],
  "clearcrimson" : ["mutedsalmon" ,"cleargreen" ,"lightblue" ,"poshmagenta"],
  "dottedyellow" : ["vibrantcoral"],
  "lighttomato" : ["dimchartreuse" ,"lightgold" ,"darkwhite"],
  "shinypurple" : ["darkturquoise"],
  "brightgreen" : ["lightchartreuse"],
  "mirroredyellow" : ["stripedwhite"],
  "lightlavender" : ["wavycrimson" ,"dimyellow" ,"plaidolive" ,"wavywhite"],
  "mutedcrimson" : ["darkbeige" ,"dullgreen"],
  "mutedblue" : ["shinyaqua" ,"darkturquoise" ,"dottedsilver"],
  "stripedcoral" : ["darkred" ,"drabblue" ,"lightaqua" ,"stripedlavender"],
  "lightbrown" : ["plaidyellow"],
  "clearaqua" : ["plaidolive" ,"plaidgold" ,"mutedtan"],
  "dottedgold" : ["darkwhite"],
  "plaidblue" : ["dottedcoral" ,"mutedblue"],
  "mirroredcyan" : ["darkwhite" ,"stripedturquoise" ,"lightcoral"],
  "fadedred" : ["cleartan" ,"stripedbrown" ,"shinycyan"],
  "clearlime" : ["clearsilver"],
  "dimlime" : ["lightteal" ,"poshturquoise" ,"dottedsilver" ,"drablavender"],
  "dullteal" : ["lightmaroon" ,"brightcoral"],
  "lightgray" : ["mirroredlime" ,"lightviolet" ,"mutedolive" ,"stripedbrown"],
  "dottedwhite" : ["wavywhite" ,"dottedbeige" ,"cleargreen"],
  "shinycrimson" : ["palesalmon" ,"darklime" ,"dullblue" ,"vibrantchartreuse"],
  "dimbrown" : ["mirroredbeige" ,"lightorange" ,"fadedcrimson"],
  "dimblue" : ["palegray"],
  "stripedblack" : ["vibrantpurple" ,"vibrantsalmon" ,"cleargold" ,"shinyyellow"],
  "stripedfuchsia" : ["plaidfuchsia" ,"poshteal" ,"drabtomato" ,"dimturquoise"],
  "shinyblack" : ["stripedtomato"],
  "vibrantmaroon" : ["brightaqua" ,"poshwhite" ,"palesilver" ,"mutedtan"],
  "poshcoral" : ["mirroredviolet" ,"mirroredbeige" ,"stripedtomato" ,"drabwhite"],
  "wavychartreuse" : ["mutedblue" ,"brightcrimson" ,"palegray" ,"shinysilver"],
  "brightchartreuse" : ["stripedbrown"],
  "brightgray" : ["drabgray" ,"plaidcyan" ,"drabmaroon"],
  "darklime" : ["cleargreen" ,"dottedwhite"],
  "fadedmaroon" : ["shinygold" ,"dottedgreen" ,"stripedbrown"],
  "dimsilver" : ["mutedtomato" ,"mirroredviolet"],
  "fadedchartreuse" : ["palegray" ,"stripedcyan"],
  "poshbeige" : ["fadedblue"],
  "stripedaqua" : ["brightgray" ,"shinyaqua" ,"shinygray"],
  "dulltan" : ["dottedgreen" ,"lightcrimson" ,"mirroredfuchsia" ,"shinycyan"],
  "darkgreen" : ["drabyellow"],
  "wavyfuchsia" : ["wavygray" ,"fadedfuchsia" ,"brightmaroon"],
  "vibrantindigo" : ["dottedtomato" ,"lightcoral" ,"darksilver"],
  "drabindigo" : ["palecoral"],
  "fadedindigo" : ["vibrantfuchsia" ,"wavycoral" ,"stripedteal"],
  "paleviolet" : ["palelime" ,"poshindigo" ,"mutedblue" ,"plaidcyan"],
  "drabblue" : ["dullsilver" ,"dottedbeige" ,"mutedaqua" ,"dottedorange"],
  "dullcrimson" : ["dimbrown" ,"mirroredblack"],
  "mirroredlavender" : ["poshchartreuse" ,"vibrantblue" ,"dullmagenta"],
  "lightolive" : ["dottedsilver" ,"dimwhite" ,"paleteal"],
  "vibrantblue" : ["darkfuchsia" ,"dimteal"],
  "dimchartreuse" : ["noother"],
  "brightblack" : ["dulllavender" ,"darkteal" ,"plaidblue" ,"darkwhite"],
  "darkcyan" : ["lightbeige" ,"brightorange"],
  "lightyellow" : ["stripedsilver" ,"darkbrown" ,"dottedsalmon" ,"dimviolet"],
  "dottedbronze" : ["dimblue" ,"darkchartreuse"],
  "fadedyellow" : ["fadedfuchsia" ,"darkbrown" ,"mutedsalmon"],
  "dullfuchsia" : ["brightturquoise" ,"drabgreen"],
  "fadedblue" : ["dullchartreuse" ,"shinyviolet"],
  "stripedgold" : ["dullsilver" ,"dottedblack"],
  "mirroredblack" : ["wavytomato" ,"poshviolet" ,"vibrantcrimson" ,"dulllime"],
  "poshtan" : ["plaidolive" ,"dottedwhite"],
  "vibrantblack" : ["lightchartreuse" ,"darkorange"],
  "dimindigo" : ["plaidcrimson"],
  "mirroredred" : ["fadedmaroon"],
  "vibrantbeige" : ["fadedteal" ,"shinycoral" ,"drabteal"],
  "drabgray" : ["lightteal" ,"dullwhite"],
  "paleblue" : ["poshpurple" ,"lightcyan"],
  "poshindigo" : ["dimgray" ,"stripedmaroon" ,"drabwhite" ,"lighttomato"],
  "dimmaroon" : ["palewhite"],
  "fadedaqua" : ["drabwhite" ,"fadedpurple" ,"stripedmaroon"],
  "plaidaqua" : ["stripedturquoise" ,"lightbronze" ,"palechartreuse"],
  "dulllavender" : ["stripedplum" ,"dottedwhite" ,"dottedsalmon" ,"dullsilver"],
  "lightmagenta" : ["drabviolet" ,"drabcoral" ,"vibrantlavender" ,"dullolive"],
  "fadedlime" : ["mirroredcoral" ,"wavylavender" ,"lightyellow" ,"shinysilver"],
  "wavywhite" : ["drabwhite"],
  "clearindigo" : ["dimcyan"],
  "plaidturquoise" : ["drabwhite" ,"darkteal" ,"plaidfuchsia"],
  "plaidtomato" : ["drabviolet" ,"stripedsalmon"],
  "brightbeige" : ["shinyblack" ,"poshsalmon" ,"stripedbronze" ,"paleplum"],
  "vibrantred" : ["palefuchsia"],
  "poshgreen" : ["drabred"],
  "fadedplum" : ["plaidchartreuse" ,"brightbronze" ,"darkblue" ,"clearbronze"],
  "dimturquoise" : ["lightchartreuse"],
  "clearred" : ["drabblue" ,"stripedfuchsia" ,"stripedbrown" ,"clearsilver"],
  "palegray" : ["dullgreen" ,"dottedorange" ,"darkturquoise"],
  "plaidpurple" : ["dimcyan" ,"stripedlime" ,"drabviolet"],
  "clearteal" : ["dullcyan" ,"wavycyan" ,"lightblue"],
  "mirroredbrown" : ["mirroredred"],
  "lightbronze" : ["wavywhite"],
  "mutedgray" : ["fadedlime" ,"palebeige" ,"shinyindigo" ,"fadedtan"],
  "stripedsalmon" : ["dimteal" ,"dottedsilver" ,"dimgray"],
  "brightindigo" : ["drabbeige" ,"shinyred" ,"vibrantsilver" ,"clearplum"],
  "palecoral" : ["wavyplum" ,"clearbeige"],
  "fadedolive" : ["brightcrimson" ,"dottedgreen" ,"dullbronze" ,"poshturquoise"],
  "wavymaroon" : ["mirroredfuchsia" ,"dimolive"],
  "plaidindigo" : ["poshmagenta" ,"dimbronze" ,"lightblue"],
  "poshaqua" : ["clearbeige" ,"darklime"],
  "fadedcyan" : ["drabtomato" ,"poshcrimson" ,"palechartreuse" ,"fadedtan"],
  "plaidyellow" : ["wavycyan" ,"stripedblack"],
  "fadedmagenta" : ["brightcoral"],
  "dullcyan" : ["mirroredmagenta" ,"clearchartreuse"],
  "vibrantcoral" : ["dottedaqua" ,"brightcyan"],
  "mirroredgold" : ["shinypurple"],
  "mirroredpurple" : ["darkbeige"],
  "paleyellow" : ["plaidcoral" ,"wavysilver" ,"mirroredsalmon" ,"lightlime"],
  "darktan" : ["lightyellow" ,"plaidturquoise" ,"shinygold"],
  "fadedbronze" : ["stripedgold" ,"poshteal"],
  "lightblack" : ["shinyblack" ,"mirroredcoral"],
  "vibrantgray" : ["darkteal" ,"mutedaqua" ,"shinyviolet" ,"darkbronze"],
  "wavybeige" : ["palemaroon"],
  "mutedsilver" : ["plaidorange" ,"shinychartreuse"],
  "plaidmagenta" : ["dottedtan" ,"stripedfuchsia" ,"lightolive"],
  "drabfuchsia" : ["darkviolet" ,"shinygold" ,"palecyan"],
  "shinychartreuse" : ["dottedviolet"],
  "palecrimson" : ["paleaqua"],
  "dullwhite" : ["noother"],
  "palegreen" : ["brightgreen" ,"dulllime" ,"stripedlime"],
  "mutedbronze" : ["brighttomato" ,"lightred" ,"shinyyellow" ,"dimteal"],
  "mirroredaqua" : ["dimtomato" ,"mirroredcrimson" ,"wavysilver"],
  "vibrantmagenta" : ["darklime"]
};


console.log(findContainerBags("shinygold", regsArray));
