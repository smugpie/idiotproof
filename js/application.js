var fontSize = 32;
var font = null;

// Level 1
var text = {
    1: {
        overview: 'HAMBURGEDFONTSIVhamburgedfontsiv',
        spacing: 'HHAHOAOO HHBHOBOO HHDHODOO HHEHOEOO HHFHOFOO HHGHOGOO HHHHOHOO HHIHOIOO HHMHOMOO HHNHONOO HHOHOOOO HHRHOROO HHSHOSOO HHTHOTOO HHUHOUOO HHVHOVOO hhahoaoo hhbhoboo hhdhodoo hhehoeoo hhfhofoo hhghogoo hhhhohoo hhihoioo hhlholoo hhmhomoo hhnhonoo hhohoooo hhrhoroo hhshosoo hhthotoo hhuhouoo hhvhovoo',
        trio: 'Aho Bho Dho Eho Fho Hho Iho Lho Mho Nho Oho Rho Sho Tho Uho Vho Aon Bon Don Eon Fon Hon Ion Lon Mon Non Oon Ron Son Ton Uon Von',
    },
    2: {
        overview: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghhijklmmnnopqrstuvwxyz.,:; -‘’“” ?!0123456789',
        spacing: 'HHAHOAOO HHBHOBOO HHCHOCOO HHDHODOO HHEHOEOO HHFHOFOO HHGHOGOO HHHHOHOO HHIHOIOO HHJHOJOO HHKHOKOO HHLHOLOO HHMHOMOO HHNHONOO HHOHOOOO HHPHOPOO HHQHOQOO HHRHOROO HHSHOSOO HHTHOTOO HHUHOUOO HHVHOVOO HHWHOWOO HHXHOXOO  HHYHOYOO HH&HO&OO HHZHOZOO HH@HO@OO HHẞHOẞOO HAHBHCHDHEHFHGHHHIHJHKHHLHMHNHOHHPHQH HRHSHTHUHVHWHXHYHZHẞH OAOBOCODOEOFOGOHOIOJOKOLOMONOOOPOQO OROSOTOUOVOWOXOYOZOẞO hhahoaoo hhbhoboo hhchocoo hhdhodoo hhehoeoo hhfhofoo hhghogoo hhhhohoo hhihoioo hhjhojoo hhkhokoo hhlholoo hhmhomoo hhnhonoo hhohoooo hhphopoo hhqhoqoo hhrhoroo hhshosoo hhßhoßoo hhthotoo hhuhouoo hhvhovoo hhwhowoo hhxhoxoo hhyhoyoo hhzhozoo hh@ho@oo hhðhoðoo nnoonnecnncennbnndnnbdnnpqnnpðnn oaobocodoeofogohoiojokoolomono oopoqorosoßotouovoowoxoyozoðo nanbncndnenfngnhninjnknnlnmnnn nonpnqnrnsnßntnunvnwnxnynznðn hahbhchdhehfhghhhihjhkhhlhmhnh hohphqhrhshßhthuhvhwhxhyhzhðh',
        trio: 'Aho Bho Cho Dho Eho Fho Gho Hho Iho Jho Kho Lho Mho Nho Oho Pho Qho Rho Sho Tho Uho Vho Who Xho Yho ZhoAon Bon Con Don Eon Fon Gon Hon Ion Jon Kon Lon Mon Non Oon Pon Qon Ron Son Ton Uon Von Won Xon Yon Zon',
    },
    3: {
        overview: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghhijklmmnnopqrstuvwxyz.,:; -‘’“” ?!0123456789&@/|[](){}',
        spacing: 'I “Ask Jeff” or ‘Ask Jeff’. Take the chef d’œuvre! Two of [of] (of) ‘of’ “of” of? of! of*. Two of [of] (of) ‘of’ “of” of? of! of*. Ydes, Yffignac and Ygrande are in France: so are Ypres, Les Woëvres, the Fôret de Wœvres, the Voire and Vauvise. Yves is in heaven; D’Amboise is in jail. Lyford’s in Texas & L’Anse-aux-Griffons in Québec; the Łyna in Poland. Yriarte, Yciar and Ycsaÿe are at Yale. Kyoto and Ryotsu are both in Japan, Kwikpak on the Yukon delta, Kvæven in Norway, Kyulu in Kenya, not in Rwanda.… Walton’s in West Virginia, but «Wren» is in Oregon. Tlálpan is near Xochimilco in México. The Zygos & Xylophagou are in Cyprus, Zwettl in Austria, Fænø in Denmark, the Vøringsfossen and Værøy in Norway. Tchula is in Mississippi, the Tittabawassee in Michigan. Twodot is here in Montana, Ywamun in Burma. Yggdrasil and Ymir, Yngvi and Vóden, Vídrið and Skeggjöld and Týr are all in the Eddas. Tørberget and Våg, of course, are in Norway, Ktipas and Tmolos in Greece, but Vázquez is in Argentina, Vreden in Germany, Von-Vincke-Straße in Münster, Vdovino in Russia, Ytterbium in the periodic table. Are Toussaint L’Ouverture, Wölfflin, Wolfe, Miłosz and Wū Wŭ all in the library? 1510–1620, 11:00 pm, and the 1980s are over. Ergänzt von Typefacts: Ist da „Jemand“? „Volker?“ – „Wolf“. „Anna?“ – „Yvonne“. „Torsten fragte: ‚Vladimir?‘, später riefer ‚Wolf‘ und ‚Theresa‘, dann ‚Andreas‘ und ‚Yvonne‘“. Eleganter: Ist da »Jemand«? »Volker?« – »Wolf«. »Anna?« – »Yvonne«. »Torsten fragte: ›Vladimir?‹, später rief er ›Wolf‹ und ›Theresa‹, dann ›Andreas‹ und ›Yvonne‹«',
        trio: 'Aar Abo Act Adj Aer Aft Aga Ahe Aie Aji Ake Alm Amo Ano Aoa App Aqu Art Ass Att Aug Ave Awa Axe Aye Azo Bal Bbn Bcc Bdj Ber Bfd Bga Bhu Bie Bji Bkl Bli Bmo Bni Boa Bpi Bqu Brt Bss Btl But Bve Bwa Bxl Bye Bzo Cal Cbn Ccn Cdj Cer Cfi Cga Che Cie Cjn Ckl Cle Cmo Cnl Coa Cpl Cqu Crl Css Ctl Cul Cvl Cwl Cxl Cyi Czo Dal Dbn Dci Ddj Der Dfl Dga Dhr Die Dji Dkl Dli Dmo Dnu Don Dpi Dqu Dri Dsl Dtl Dul Dvl Dwl Dxl Dya Dzn Ear Ebe Ech Edw Een Efo Ega Ehr Eit Ejo Ekn Eld Emp Ens Eob Epa Equ Ero Est Eth Euc Eva Ewa Exe Eyo Eze Fal Fbo Fci Fdj Fer Ffu Fgn Fhi Fil Fjo Fkl Fli Fmi Fnl Fol Fpi Fqu Fra Fst Fto Ful Fvl Fwl Fxi Fyi Fzi Gal Gbo Gch Gdj Ger Gfl Ggl Ghi Gil Gjl Gke Gli Gmo Gnl Gol Gpi Gqu Gra Gst Gto Gut Gve Gwl Gxi Gyn Gzn Har Hbo Hct Hdj Her Hfl Hga Hhe Hie Hji Hke Hlm Hmo Hno Hon Hpl Hqu Hrt Hss Htt Hue Hve Hwa Hxe Hyu Hzi Ian Ibo Ict Idj Ier Ift Iga Ihe Iie Ijo Ike Ilm Imo Ino Ion Ipl Iqu Irt Iss Ita Iut Ive Iwa Ixe Iyo Izo Jap Jbo Jct Jdj Jer Jfn Jgu Jhe Jie Jjl Jkl Jlm Jmo Jno Jon Jpl Jqu Jrt Jss Jtt Jut Jve Jwa Jxe Jyn Jzt Kan Kbo Kci Kdj Ker Kfn Kga Khe Kie Kjl Kkn Klm Kmo Kno Kon Kpl Kqu Krt Kss Kti Kui Kve Kwa Kxe Kye Kzo Lam Lbo Lct Ldj Len Lft Lga Lhe Lie Lju Lke Llm Lmo Lno Lon Lpl Lqu Lrt Lss Ltt Luc Lve Lwa Lxe Lye Lzt Mar Mbu Mct Mdj Mer Mfl Mga Mhe Mie Mji Mke Mlf Mmi Mnu Mon Mpl Mqu Mrt Mss Mtt Mut Mvl Mwa Mxe Myu Mzi Nam Nbu Nct Ndj Nel Nfl Nga Nhi Nie Njn Nke Nlo Nmi Nnu Non Npr Nqu Nrt Nst Ntu Nul Nvd Nwa Nxe Nyi Nzu Oan Obu Oct Odj Oer Ofa Oga Ohe Oie Oja Oke Olf Omi Onu Oon Opl Oqu Ort Oss Ott Out Ovl Owa Oxe Oye Ozo Par Pbl Pct Pdj Per Pfe Pgs Phi Pie Pji Pki Pla Pml Pnu Pon Ppl Pqu Prt Psa Pts Pul Pvc Pwi Pxl Pyn Pzl Qal Qbo Qct Qdj Qer Qfi Qga Qhe Qie Qji Qke Qlm Qmo Qno Qoa Qpp Qqu Qrt Qss Qtt Qui Qve Qwa Qxe Qyo Qzo Rad Rbi Rct Rdj Ren Rfe Rgs Rha Ria Rji Rkl Rli Rms Rni Roa Rpi Rqu Rrt Rsi Rtd Rut Rvi Rwl Rxi Ryn Rzi Sar Sbo Sct Sdl Ser Sfo Sgi She Sie Sja Ski Slo Smi Sno Sol Spe Squ Srt Sst Stt Sut Sve Swa Sxe Syl Szo Tar Tba Tcm Tdi Ter Tfl Tgi The Tie Tji Tke Tlm Tmo Tno Tol Tpi Tqu Trt Tsi Tti Tut Tvl Twl Txl Tyl Tzo Ual Ubi Uct Udj Uer Ufc Uga Uhi Uie Uji Uke Ulm Umo Uno Uol Upp Uqu Urt Uss Utl Uui Uvl Uwl Uxe Uye Uzo Val Vbo Vct Vdj Ver Vft Vga Vhe Vie Vjl Vki Vlm Vmo Vno Vol Vpi Vqu Vrl Vsi Vtt Vut Vvl Vwl Vxl Vyl Vzi Wal Wbo Wcl Wdj Wer Wfi Wga Whe Wie Wjl Wke Wlm Wmo Wno Wol Wpi Wqu Wrl Wsi Wtt Wut Wvl Wwl Wxl Wya Wzl Xal Xbo Xce Xdj Xer Xft Xga Xhe Xie Xjl Xki Xlm Xmo Xno Xol Xpi Xqu Xrl Xsi Xtt Xut Xvl Xwl Xxl Xye Xzi Yal Ybo Yci Ydj Yer Yfl Yga Yhe Yie Yjo Ykl Yli Ymo Yno Yol Ypi Yqu Yrl Ysi Ytt Yut Yvl Ywl Yxl Yyl Yzi Zan Zbr Zco Zdj Zer Zfl Zga Zhe Zie Zji Zke Zlm Zmo Zno Zol Zpi Zqu Zro Zsn Zti Zut Zvl Zwl Zxl Zyl Zzl',
    }
}
// Misc
var textPangram = 'Grumpy wizards make toxic brew for the evil Queen and Jack.';
var textSexLife = 'The sex life of the woodchuck is a provocative question for most vertebrate zoology majors We quickly seized the black axle and just saved it from going past him No kidding lorenzo called off his trip to visit mexico city just because they told him the conquistadores were extinct Heavy boxes perform quick waltzes and jigs Six big juicy steaks sizzled in a pan as five workmen left the quarry Will major douglas be expected to take this truefalse quiz very soon Ebenezer unexpectedly bagged two tranquil aardvarks with his jiffy vacuum cleaner An inspired calligrapher can create pages of beauty using stick ink quill brush pickaxe buzz saw or even strawberry jam We dislike to exchange job lots of sizes varying from a quarter up My help squeezed in and joined the weavers again before six oclock While suez sailors wax parquet decks afghan jews vomit jauntily abaft Amazingly few discotheques provide jukeboxes The july sun caused a fragment of black pine wax to ooze on the velvet quilt King alexander was just partly overcome after quizzing diogenes in his tub The jukebox music puzzled a gentle visitor from a quaint valley town The job requires extra pluck and zeal from every young wage earner Whenever the black fox jumped the squirrel gazed suspiciously How razorbackjumping frogs can level six piqued gymnasts Jackdaws love my big sphinx of quartz While making deep excavations we found some quaint bronze jewelry Just work for improved basic techniques to maximize your typing skill A mad boxer shot a quick gloved jab to the jaw of his dizzy opponent Forsaking monastic tradition twelve jovial friars gave up their vocation for a questionable existence on the flying trapeze Quick zephyrs blow vexing daft jim How quickly daft jumping zebras vex jinxed wizards Pluck ivy from the big quilt two hardy boxing kangaroos Jet from Sydney to Zanzibar on quicksilver pinions We promptly judged antique ivory buckles for the next prize The public was amazed to view the quickness and dexterity of the juggler Pack my box with five dozen liquor jugs Waltz nymph for quick jigs vex bud The five boxing wizards jump quickly Crazy fredericka bought many very exquisite opal jewels The quick brown fox jumps over a lazy dog Jellylike above the high wire six quaking pachyderms kept the climax of the extravaganza in a dazzling state of flux Jaded zombies acted quaintly but kept driving their oxen forward Back in my quaint garden jaunty zinnias vie with flaunting phlox Big fuji waves pitch enzymed kex liquor the explorer was frozen in his big kayak Just after making queer discoveries a quart jar of oil mixed with zinc oxide makes a very bright paintSix javelins thrown by the quick savages whizzed forty paces beyond the mark Sphinx of black quartz judge my vow Sixty zippers were quickly picked from the woven jute bag';
// Features
var textFeatureLetters = 'Aardvark Ablution Acrimonious Adventures Aeolian Africa Agamemnon Ahoy Aileron Ajax Akimbo Altruism America Anecdote Aorta Aptitude Aquarium Arcade Aspartame Athens Aurelius Avuncular Awning Axminster Ayers Azure Banishment Benighted Bhagavad Biblical Bjorn Blancmange Bolton Brusque Burnish Bwana Byzantium Cabbala Cetacean Charlemagne Cicero Clamorous Cnidarian Conifer Crustacean Ctenoid Culled Cynosure Czarina Dalmatian Delphi Dhurrie Dinner Djinn Document Drill Dunleary Dvorak Dwindle Dynamo Eames Ebullient Echo Edify Eels Eftsoons Egress Ehrlich Eindhoven Eject Ekistics Elzevir Eminence Ennoble Eocene Ephemeral Equator Erstwhile Estienne Etiquette Eucalyptus Everyman Ewen Exeter Eyelet Ezekiel Fanfare Ferocious Ffestiniog Finicky Fjord Flanders Forestry Frills Furniture Fylfot Garrulous Generous Ghastly Gimlet Glorious Gnomon Golfer Grizzled Gumption Gwendolyn Gymkhana Harrow Heifer Hindemith Horace Hsi Hubris Hybrid Iambic Ibarra Ichthyology Identity Ievgeny Ifritignite Ihre Ikon Iliad Imminent Innovation Iolanthe Ipanema Irascible Island Italic Ivory Iwis Ixtapa Iyar Izzard Janacek Jenson Jitter Joinery Jr. Jungian Kaiser Kenilworth Khaki Kindred Klondike Knowledge Kohlrabi Kraken Kudzu Kvetch Kwacha Kyrie Labrador Lent Lhasa Liniment Llama Longboat Luddite Lyceum Mandarin Mbandaka Mcintyre Mdina Mendacious Mfg. Mg Millinery Mlle. Mme. Mnemonic Moribund Mr. Ms. Mtn. Munitions Myra Narragansett Nefarious Nguyen Nile Nkoso Nnenna Nonsense Nr. Nunnery Nyack Oarsman Oblate Ocular Odessa Oedipus Often Ogre Ohms Oilers Okra Olfactory Ominous Onerous Oogamous Opine Ornate Ossified Othello Oubliette Ovens Owlish Oxen Oyster Ozymandias Parisian Pb Pd. Penrose Pfennig Pg. Pharmacy Pirouette Pleistocene Pneumatic Porridge Pp. Principle Psaltery Ptarmigan Pundit Pyrrhic Qaid Qed Qibris Qom Quill Ransom Rb. Rd. Renfield Rheumatic Ringlet Rm. Ronsard Rp. Rte. Runcible Rwanda Rye Ransom Rb. Rd. Renfield Rheumatic Ringlet Rm. Ronsard Rp. Rte. Runcible Rwanda Rye Salacious Sbeitla Scherzo Serpentine Sforza Shackles Sinful Sjoerd Skull Slalom Smelting Snipe Sorbonne Spartan Squire Sri Stultified Summoner Svelte Swarthy Sykes Szentendre Tarragon Tblisi Tcherny Tennyson Thaumaturge Tincture Tlaloc Toreador Treacherous Tsunami Turkey Twine Tyrolean Tzara Ubiquitous Ucello Udder Ufology Ugric Uhlan Uitlander Ukulele Ulster Umber Unguent Uomo Uplift Ursine Usurious Utrecht Uvula Uxorious Uzbek Vanished Vd. Venomous Vindicate Voracious Vrillier Vs. Vt. Vulnerable Vying Washington Wendell Wharf Window Wm. Worth Wrung Wt. Wunderman Wyes Xanthan Xenon Xiao Xmas Xonen Xray Xuxa Xylem Yarrow Ybarra Ycair Yds. Yellowstone Yggdrasil Yin Ylang Yours Ypsilanti Yquem Yrs. Ys. Ytterbium Yunnan Yvonne Zanzibar Zero Zhora Zinfandel Zone Zuni Zwieback Zygote';
var textFeatureFractions = '⅟½↉⅓⅔¼¾⅕⅖⅗⅘⅙⅚⅐⅛⅜⅝⅞⅑⅒';
var textFeatureFiguresInText = 'J. C. Bradshaw, who embodied many of the tested and unchanged virtues of the 19th-century English organist and choirmaster. In 1936, while in the midst of studies, Lilburn won a composition prize offered by the visiting pianist and composer Percy Grainger, with Forest, a tone poem, praised by the judges in terms which were soon to be proved prophetic and performed by the Wellington Symphony Orchestra under Leon de Mauny in 1937. By now Lilburn had decided upon music as his profession, rather than literature, for which he was equally qualified, and went to the Royal College of Music in London to study under Vaughan Williams. In 1939 his Fantasy Quartet won the Cobbett Prize. The following year his Aotearoa Overture opened the historic Centennial Matinee at His Majesty’s Theatre in the Haymarket, conducted by Warwick Braithwaite with the Sadler’s Wells Orchestra. It had been written for the occasion in two weeks. When Lilburn returned to New Zealand in 1940, the year of the Centennial celebrations, he learned that he had won three out of the four prizes offered for musical compositions to mark the occasion. His significant Landfall in Unknown Seat. incidental music to Allen Curnow’s poem to commemorate the tercentenary of the discovery of New Zealand by Abel Tasman, followed in 1942.';
var textFeatureFigures = '0123456789';
var textFurniture = '$12 $23 $34 $45 $56 $67 $78 $89 $90 $01 €12 €23 €34 €45 €56 €67 €78 €89 €90 €01 £12 £23 £34 £45 £56 £67 £78 £89 £90 £01 ¥12 ¥23 ¥34 ¥45 ¥56 ¥67 ¥78 ¥89 ¥90 ¥01 12¢ 23¢ 34¢ 45¢ 56¢ 67¢ 78¢ 89¢ 90¢ 01¢ ¿A? ¿B? ¿C? ¿D? ¿E? ¿F? ¿G? ¿H? ¿I? ¿J? ¿K? ¿L? ¿M? ¿N? ¿O? ¿P? ¿Q? ¿R? ¿S? ¿T? ¿U? ¿V? ¿W? ¿X? ¿Y? ¿Z? ¿a? ¿b? ¿c? ¿d? ¿e? ¿f? ¿g? ¿h? ¿i? ¿j? ¿k? ¿l? ¿m? ¿n? ¿o? ¿p? ¿q? ¿r? ¿s? ¿t? ¿u? ¿v? ¿w? ¿x? ¿y? ¿z? ¡a! ¡b! ¡c! ¡d! ¡e! ¡f! ¡g! ¡h! ¡i! ¡j! ¡k! ¡l! ¡m! ¡n! ¡o! ¡p! ¡q! ¡r! ¡s! ¡t! ¡u! ¡v! ¡w! ¡x! ¡y! ¡z! ¡A! ¡B! ¡C! ¡D! ¡E! ¡F! ¡G! ¡H! ¡I! ¡J! ¡K! ¡L! ¡M! ¡N! ¡O! ¡P! ¡Q! ¡R! ¡S! ¡T! ¡U! ¡V! ¡W! ¡X! ¡Y! ¡Z! “A” “B” “C” “D” “E” “F” “G” “H” “I” “J” “K” “L” “M” “N” “O” “P” “Q” “R” “S” “T” “U” “V” “W” “X” “Y” “Z” “a” “b” “c” “d” “e” “f” “g” “h” “i” “j” “k” “l” “m” “n” “o” “p” “q” “r” “s” “t” “u” “v” “w” “x” “y” “z” ‘A’ ‘B’ ‘C’ ‘D’ ‘E’ ‘F’ ‘G’ ‘H’ ‘I’ ‘J’ ‘K’ ‘L’ ‘M’ ‘N’ ‘O’ ‘P’ ‘Q’ ‘R’ ‘S’ ‘T’ ‘U’ ‘V’ ‘W’ ‘X’ ‘Y’ ‘Z’ ‘a’ ‘b’ ‘c’ ‘d’ ‘e’ ‘f’ ‘g’ ‘h’ ‘i’ ‘j’ ‘k’ ‘l’ ‘m’ ‘n’ ‘o’ ‘p’ ‘q’ ‘r’ ‘s’ ‘t’ ‘u’ ‘v’ ‘w’ ‘x’ ‘y’ ‘z’';

var utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
var utcNoSlash = new Date().toJSON().slice(0,10).replace(/-/g,'');

function appendStyle(styles) {
    $("#style__webfonts").append(styles);
}

function displayFontData() {
    var html, tablename, table, property, value, tag;
    var styles = '';

    for (tablename in font.tables) {
        table = font.tables[tablename];
        // Inserting header data: font name, foundry name, etc.
        if (tablename == 'cmap') {
            for (property in table) {
                var cmapVals = table[property];
                if (property == "length") {
                    if (cmapVals <= 100 ) {
                        window.proofingPhase = 1;
                    } else if (cmapVals >= 400 ) {
                        window.proofingPhase = 3;
                    } else {
                        window.proofingPhase = 2;
                    }
                }
            }
            document.getElementById('section__proofing-overview').innerHTML = text[window.proofingPhase].overview;
            document.getElementById('section__proofing-spacing').innerHTML = text[window.proofingPhase].spacing;
            document.getElementById('section__proofing-trio').innerHTML = text[window.proofingPhase].trio;
        }
        if (tablename == 'name') {
                var nameHtml = '';
                for (property in table) {
                    var translations = table[property];
                    if (property == "designer") {
                        var name = translations["en"];
                            nameHtml += '<h6 class="h6 section__header-name u__flex-grow-1 t__center">'+name+'</h6>';
                    }
                    if (property == "postScriptName") {
                        var name = translations["en"];
                        nameHtml += '<h6 class="h6 section__header-name u__flex-grow-1 t__left">'+name+'</h6>';
                        window.fontFamily = name;
                        if (name == "Gooper-Black") {
                            styles += '@font-face { font-family: '+name+'; src: url("/fonts/'+name+'.otf");}';
                        }
                        styles += '.t__importedfontfamily { font-family: '+name+' }';
                    }
                }
                nameHtml += '<h6 class="h6 section__header-name  u__flex-grow-1 t__right">'+utc+'</h6>';
                document.getElementById('section__header-names').innerHTML = nameHtml;
                continue;
        }
        // Generating font feature proofing section
        featuresHtml = '';
        if (tablename == 'gsub') {
            var featuresList = document.getElementById("section__proofing-feature");
            featuresHtml += '<h2 class="h2">Font Features</h2>';
            for (property in table) {
                if (property  == 'features') {
                    value = table[property];
                    if (Array.isArray(value) && typeof value[0] === 'object') {
                        for (i in value) {
                            var tag = value[i].tag;
                            styles += '.proofing__feature-'+tag+' { font-feature-settings: "'+tag+'" 1;}';
                            if (tag.includes("tnum")) {
                                featuresHtml += '<h3 class="h3">'+tag+'</h3><div contenteditable="true" class="t__importedfontfamily proofing__feature-'+tag+'">'+textFeatureFiguresInText+'</div>';
                            } else if (tag.includes("frac")) {
                                featuresHtml += '<h3 class="h3">'+tag+'</h3><div contenteditable="true" class="t__importedfontfamily proofing__feature-'+tag+'">'+textFeatureFractions+'</div>';
                            } else if (tag == "tnum" || tag == "numr") {
                                featuresHtml += '<h3 class="h3">'+tag+'</h3><div contenteditable="true" class="t__importedfontfamily proofing__feature-'+tag+'">'+textFeatureFigures+'</div>';
                            } else {
                                featuresHtml += '<h3 class="h3">'+tag+'</h3><div contenteditable="true" class="t__importedfontfamily proofing__feature-'+tag+'">'+textFeatureLetters+'</div>';
                            }
                        }
                    }
                }
            }
            featuresList.innerHTML = featuresHtml;
        }
    }
    appendStyle(styles)
}

function onFontLoaded(font) {
    window.font = font;
    var binaryData = [];
    binaryData.push(font);
    window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))
    console.log(window.URL);
    // Do the actual proofing build
    displayFontData();

    // Prepare pdf export details
    var fileName = utcNoSlash+'_'+window.fontFamily+'.pdf';
    console.log(fileName);
    window.opt = {
      margin:       1,
      filename:     fileName,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
}

function showErrorMessage(message) {
    var el = document.getElementById('message');
    if (!message || message.trim().length === 0) {
        el.style.display = 'none';
    } else {
        el.style.display = 'block';
    }
    el.innerHTML = message;
}

// taken from axis-praxis.org
function uint8ToBase64(buffer) {
     var binary = '';
     var len = buffer.byteLength;
     for (var i = 0; i < len; i++) {
         binary += String.fromCharCode(buffer[i]);
     }
     return window.btoa( binary );
}

function onReadFile(e) {
    document.getElementById('font-name').innerHTML = '';
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
        try {
            var font = opentype.parse(e.target.result);
            onFontLoaded(font);
            console.log(font);

            // store info about the file
            font.file = {
                name: e.name,
                lastModified: e.lastModified,
                size: e.size,
                type: e.type,
            };
            font.type = "user:local";

            var tempUint8array = new Uint8Array(e.target.result);
            $("#style__webfonts").append("@font-face {font-family:'" +window.fontFamily+ "'; " + "src: url('data:;base64," + uint8ToBase64(tempUint8array) + "') format('truetype');} ");
            showErrorMessage('');
        } catch (err) {
            showErrorMessage(err.toString());
            if (err.stack) console.log(err.stack);
        throw(err);
        }
    };
    reader.onerror = function(err) {
        showErrorMessage(err.toString());
    };

    reader.readAsArrayBuffer(file);
}

// Future stuff

// Function taken from axis-praxis.org
function isFontVariable (font)
{
    // simplistic check for axes which change the metrics (and which must contain >0 testString chars)
    if (font.axes.length == 0)
        return false;
    else
    {
        var w, h;
        var testString = 'Am';
        var axis = font.axes[0]; // just check one axis
        var setting0 = axis.min + 0.1 * (axis.max - axis.min);
        var setting1 = axis.min + 0.9 * (axis.max - axis.min);

        $('#browser-test').text(testString);
        $('#browser-test').css('font-family', font.familyName);
        $('#browser-test').css('font-variation-settings', "'" + axis.tag + "' " + setting0);
        w = $('#browser-test').css('width');
        h = $('#browser-test').css('height');

        // set it to half way between default and max
        $('#browser-test').css('font-variation-settings', "'" + axis.tag + "' " + setting1);

        if ($('#browser-test').css('width') == w && h == $('#browser-test').css('height'))
            return false; // the sizes are the same, so no variation occurred
        else
            return true; // the sizes are different, so the variation occurred!
    }
}