const stars =  "1,Alpha Canis Majoris,Sirius,6,45,-16.7,-1.46,1.43\n\
                2,Alpha Carinae,Canopus,6,24,-52.7,-0.73,-5.64\n\
                3,Alpha Centauri,Rigil Kentaurus,14,40,-60.8,-0.29,4.06\n\
                4,Alpha Boötis,Arcturus,14,16,19.2,-0.05,-0.31\n\
                5,Alpha Lyrae,Vega,18,37,38.8,0.03,0.58\n\
                6,Alpha Aurigae,Capella,5,17,46,0.07,-0.49\n\
                7,Beta Orionis,Rigel,5,15,-8.2,0.15,-6.72\n\
                8,Alpha Canis Minoris,Procyon,7,39,5.2,0.36,2.64\n\
                9,Alpha Eridani,Achernar,1,38,-57.2,0.45,-2.77\n\
                10,Alpha Orionis,Betelgeuse,5,55,7.4,0.55,-5.04\n\
                11,Beta Centauri,Hadar,14,4,-60.4,0.61,-5.42\n\
                12,Alpha Aquilae,Altair,19,51,8.9,0.77,2.21\n\
                13,Alpha Crucis,Acrux,12,27,-63.1,0.79,-4.17\n\
                14,Alpha Tauri,Aldebaran,4,36,16.5,0.86,-0.64\n\
                15,Alpha Scorpii,Antares,16,29,-26.4,0.95,-5.39\n\
                16,Alpha Virginis,Spica,13,25,-11.2,0.97,-3.56\n\
                17,Beta Geminorum,Pollux,7,45,28,1.14,1.07\n\
                18,Alpha Piscis Austrini,Fomalhaut,22,58,-29.6,1.15,1.72\n\
                19,Alpha Cygni,Deneb,20,41,45.3,1.24,-8.74\n\
                20,Beta Crucis,Mimosa,12,48,-59.7,1.26,-3.91\n\
                21,Alpha Leonis,Regulus,10,8,12,1.36,-0.52\n\
                22,Epsilon Canis Majoris,Adhara,6,59,-29,1.5,-4.1\n\
                23,Alpha Geminorum,Castor,7,35,31.9,1.58,0.59\n\
                24,Lambda Scorpii,Shaula,17,34,-37.1,1.62,-5.05\n\
                25,Gamma Crucis,Gacrux,12,31,-57.1,1.63,-0.52\n\
                26,Gamma Orionis,Bellatrix,5,25,6.3,1.64,-2.72\n\
                27,Beta Tauri,Elnath,5,26,28.6,1.66,-1.36\n\
                28,Beta Carinae,Miaplacidus,9,13,-69.7,1.67,-0.99\n\
                29,Epsilon Orionis,Alnilam,5,36,-1.2,1.69,-6.38\n\
                30,Alpha Gruis,Alnair,22,8,-47,1.74,-0.72\n\
                31,Zeta Orionis,Alnitak,5,41,-1.9,1.75,-5.25\n\
                32,Epsilon Ursae Majoris,Alioth,12,54,56,1.77,-0.2\n\
                33,Alpha Persei,Mirfak,3,24,49.9,1.8,-4.49\n\
                34,Alpha Ursae Majoris,Dubhe,11,4,61.8,1.8,-1.09\n\
                35,Gamma Velorum,Regor,8,10,-47.3,1.81,-5.25\n\
                36,Delta Canis Majoris,Wezen,7,8,-26.4,1.83,-6.87\n\
                37,Epsilon Sagittarii,Kaus Australis,18,24,-34.4,1.84,-1.39\n\
                38,Eta Ursae Majoris,Alkaid,13,48,49.3,1.86,-0.59\n\
                39,Theta Scorpii,Sargas,17,37,-43,1.86,-2.75\n\
                40,Epsilon Carinae,Avior,8,23,-59.5,1.87,-4.57\n\
                41,Beta Aurigae,Menkalinan,6,0,44.9,1.9,-0.1\n\
                42,Alpha Trianguli Australis,Atria,16,49,-69,1.92,-3.61\n\
                43,Gamma Geminorum,Alhena,6,38,16.4,1.93,-0.6\n\
                44,Alpha Pavonis,Peacock,20,26,-56.7,1.93,-1.82\n\
                45,Delta Velorum,Koo She,8,45,-54.7,1.95,0.01\n\
                46,Beta Canis Majoris,Mirzam,6,23,-18,1.98,-3.95\n\
                47,Alpha Hydrae,Alphard,9,28,-8.7,1.98,-1.7\n\
                48,Alpha Ursae Minoris,Polaris,2,32,89.3,1.99,-3.62\n\
                49,Gamma Leonis,Algieba,10,20,19.8,2,-0.93\n\
                50,Alpha Arietis,Hamal,2,7,23.5,2.01,0.48\n\
                51,Beta Ceti,Diphda,0,44,-18,2.04,-0.3\n\
                52,Sigma Sagittarii,Nunki,18,55,-26.3,2.05,-2.14\n\
                53,Theta Centauri,Menkent,14,7,-36.4,2.06,0.7\n\
                54,Alpha Andromedae,Alpheratz,0,8,29.1,2.07,-0.3\n\
                55,Beta Andromedae,Mirach,1,10,35.6,2.07,-1.86\n\
                56,Kappa Orionis,Saiph,5,48,-9.7,2.07,-4.65\n\
                57,Beta Ursae Minoris,Kochab,14,51,74.2,2.07,-0.87\n\
                58,Beta Gruis,Al Dhanab,22,43,-46.9,2.07,-1.52\n\
                59,Alpha Ophiuchi,Rasalhague,17,35,12.6,2.08,1.3\n\
                60,Beta Persei,Algol,3,8,41,2.09,-0.18\n\
                61,Gamma Andromedae,Almach,2,4,42.3,2.1,-3.08\n\
                62,Beta Leonis,Denebola,11,49,14.6,2.14,1.92\n\
                63,Gamma Cassiopeiae,Cih,0,57,60.7,2.15,-4.22\n\
                64,Gamma Centauri,Muhlifain,12,42,-49,2.2,-0.81\n\
                65,Zeta Puppis,Naos,8,4,-40,2.21,-5.95\n\
                66,Iota Carinae,Aspidiske,9,17,-59.3,2.21,-4.42\n\
                67,Alpha Coronae Borealis,Alphecca,15,35,26.7,2.22,0.42\n\
                68,Lambda Velorum,Suhail,9,8,-43.4,2.23,-3.99\n\
                69,Zeta Ursae Majoris,Mizar,13,24,54.9,2.23,0.33\n\
                70,Gamma Cygni,Sadr,20,22,40.3,2.23,-6.12\n\
                71,Alpha Cassiopeiae,Schedar,0,41,56.5,2.24,-1.99\n\
                72,Gamma Draconis,Eltanin,17,57,51.5,2.24,-1.04\n\
                73,Delta Orionis,Mintaka,5,32,-0.3,2.25,-4.99\n\
                74,Beta Cassiopeiae,Caph,0,9,59.2,2.28,1.17\n\
                75,Epsilon Centauri,,13,40,-53.5,2.29,-3.02\n\
                76,Delta Scorpii,Dschubba,16,0,-22.6,2.29,-3.16\n\
                77,Epsilon Scorpii,Wei,16,50,-34.3,2.29,0.78\n\
                78,Alpha Lupi,Men,14,42,-47.4,2.3,-3.83\n\
                79,Eta Centauri,,14,36,-42.2,2.33,-2.55\n\
                80,Beta Ursae Majoris,Merak,11,2,56.4,2.34,0.41\n\
                81,Epsilon Boötis,Izar,14,45,27.1,2.35,-1.69\n\
                82,Epsilon Pegasi,Enif,21,44,9.9,2.38,-4.19\n\
                83,Kappa Scorpii,Girtab,17,42,-39,2.39,-3.38\n\
                84,Alpha Phoenicis,Ankaa,0,26,-42.3,2.4,0.52\n\
                85,Gamma Ursae Majoris,Phecda,11,54,53.7,2.41,0.36\n\
                86,Eta Ophiuchi,Sabik,17,10,-15.7,2.43,0.37\n\
                87,Beta Pegasi,Scheat,23,4,28.1,2.44,-1.49\n\
                88,Eta Canis Majoris,Aludra,7,24,-29.3,2.45,-7.51\n\
                89,Alpha Cephei,Alderamin,21,19,62.6,2.45,1.58\n\
                90,Kappa Velorum,Markeb,9,22,-55,2.47,-3.62\n\
                91,Epsilon Cygni,Gienah,20,46,34,2.48,0.76\n\
                92,Alpha Pegasi,Markab,23,5,15.2,2.49,-0.67\n\
                93,Alpha Ceti,Menkar,3,2,4.1,2.54,-1.61\n\
                94,Zeta Ophiuchi,Han,16,37,-10.6,2.54,-3.2\n\
                95,Zeta Centauri,Al Nair al Kent.,13,56,-47.3,2.55,-2.81\n\
                96,Delta Leonis,Zosma,11,14,20.5,2.56,1.32\n\
                97,Beta Scorpii,Graffias,16,5,-19.8,2.56,-3.5\n\
                98,Alpha Leporis,Arneb,5,33,-17.8,2.58,-5.4\n\
                99,Delta Centauri,,12,8,-50.7,2.58,-2.84\n\
                100,Gamma Corvi,Gienah Ghurab,12,16,-17.5,2.58,-0.94\n\
                101,Zeta Sagittarii,Ascella,19,3,-29.9,2.6,0.42\n\
                102,Beta Librae,Zubeneschamali,15,17,-9.4,2.61,-0.84\n\
                103,Alpha Serpentis,Unukalhai,15,44,6.4,2.63,0.87\n\
                104,Beta Arietis,Sheratan,1,55,20.8,2.64,1.33\n\
                105,Alpha Librae,Zubenelgenubi,14,51,-16,2.64,0.77\n\
                106,Alpha Columbae,Phact,5,40,-34.1,2.65,-1.93\n\
                107,Theta Aurigae,,6,0,37.2,2.65,-0.98\n\
                108,Beta Corvi,Kraz,12,34,-23.4,2.65,-0.51\n\
                109,Delta Cassiopeiae,Ruchbah,1,26,60.2,2.66,0.24\n\
                110,Eta Boötis,Muphrid,13,55,18.4,2.68,2.41\n\
                111,Beta Lupi,Ke Kouan,14,59,-43.1,2.68,-3.35\n\
                112,Iota Aurigae,Hassaleh,4,57,33.2,2.69,-3.29\n\
                113,Mu Velorum,,10,47,-49.4,2.69,-0.06\n\
                114,Alpha Muscae,,12,37,-69.1,2.69,-2.17\n\
                115,Upsilon Scorpii,Lesath,17,31,-37.3,2.7,-3.31\n\
                116,Pi Puppis,,7,17,-37.1,2.71,-4.92\n\
                117,Delta Sagittarii,Kaus Meridionalis,18,21,-29.8,2.72,-2.14\n\
                118,Gamma Aquilae,Tarazed,19,46,10.6,2.72,-3.03\n\
                119,Delta Ophiuchi,Yed Prior,16,14,-3.7,2.73,-0.86\n\
                120,Eta Draconis,Aldhibain,16,24,61.5,2.73,0.58\n\
                121,Theta Carinae,,10,43,-64.4,2.74,-2.91\n\
                122,Gamma Virginis,Porrima,12,42,-1.5,2.74,2.38\n\
                123,Iota Orionis,Hatysa,5,35,-5.9,2.75,-5.3\n\
                124,Iota Centauri,,13,21,-36.7,2.75,1.48\n\
                125,Beta Ophiuchi,Cebalrai,17,43,4.6,2.76,0.76\n\
                126,Beta Eridani,Kursa,5,8,-5.1,2.78,0.6\n\
                127,Beta Herculis,Kornephoros,16,30,21.5,2.78,-0.5\n\
                128,Delta Crucis,,12,15,-58.7,2.79,-2.45\n\
                129,Beta Draconis,Rastaban,17,30,52.3,2.79,-2.43\n\
                130,Alpha Canum Venaticorum,Cor Caroli,12,56,38.3,2.8,0.16\n\
                131,Gamma Lupi,,15,35,-41.2,2.8,3.4\n\
                132,Beta Leporis,Nihal,5,28,-20.8,2.81,-0.63\n\
                133,Zeta Herculis,Rutilicus,16,41,31.6,2.81,2.64\n\
                134,Beta Hydri,,0,26,-77.3,2.82,3.45\n\
                135,Tau Scorpii,,16,36,-28.2,2.82,-2.78\n\
                136,Lambda Sagittarii,Kaus Borealis,18,28,-25.4,2.82,0.95\n\
                137,Gamma Pegasi,Algenib,0,13,15.2,2.83,-2.22\n\
                138,Rho Puppis,Turais,8,8,-24.3,2.83,1.41\n\
                139,Beta TrianguliAustralis,,15,55,-63.4,2.83,2.38\n\
                140,Zeta Persei,,3,54,31.9,2.84,-4.55\n\
                141,Beta Arae,,17,25,-55.5,2.84,-3.49\n\
                142,Alpha Arae,Choo,17,32,-49.9,2.84,-1.51\n\
                143,Eta Tauri,Alcyone,3,47,24.1,2.85,-2.41\n\
                144,Epsilon Virginis,Vindemiatrix,13,2,11,2.85,0.37\n\
                145,Delta Capricorni,Deneb Algedi,21,47,-16.1,2.85,2.49\n\
                146,Alpha Hydri,Head of Hydrus,1,59,-61.6,2.86,1.16\n\
                147,Delta Cygni,,19,45,45.1,2.86,-0.74\n\
                148,Mu Geminorum,Tejat,6,23,22.5,2.87,-1.39\n\
                149,Gamma Trianguli Australis,,15,19,-68.7,2.87,-0.87\n\
                150,Alpha Tucanae,,22,19,-60.3,2.87,-1.05\n\
                151,Theta Eridani,Acamar,2,58,-40.3,2.88,-0.59\n\
                152,Pi Sagittarii,Albaldah,19,10,-21,2.88,-2.77\n\
                153,Beta Canis Minoris,Gomeisa,7,27,8.3,2.89,-0.7\n\
                154,Pi Scorpii,,15,59,-26.1,2.89,-2.85\n\
                155,Epsilon Persei,,3,58,40,2.9,-3.19\n\
                156,Sigma Scorpii,Alniyat,16,21,-25.6,2.9,-3.86\n\
                157,Beta Cygni,Albireo,19,31,28,2.9,-2.31\n\
                158,Beta Aquarii,Sadalsuud,21,32,-5.6,2.9,-3.47\n\
                159,Gamma Persei,,3,5,53.5,2.91,-1.57\n\
                160,Upsilon Carinae,,9,47,-65.1,2.92,-5.56\n\
                161,Eta Pegasi,Matar,22,43,30.2,2.93,-1.16\n\
                162,Tau Puppis,,6,50,-50.6,2.94,-0.8\n\
                163,Delta Corvi,Algorel,12,30,-16.5,2.94,0.79\n\
                164,Alpha Aquarii,Sadalmelik,22,6,-0.3,2.95,-3.88\n\
                165,Gamma Eridani,Zaurak,3,58,-13.5,2.97,-1.19\n\
                166,Zeta Tauri,Alheka,5,38,21.1,2.97,-2.56\n\
                167,Epsilon Leonis,Ras Elased Austr.,9,46,23.8,2.97,-1.46\n\
                168,Gamma² Sagittarii,Alnasl,18,6,-30.4,2.98,0.63\n\
                169,Gamma Hydrae,,13,19,-23.2,2.99,-0.05\n\
                170,Iota¹ Scorpii,,17,48,-40.1,2.99,-5.71\n\
                171,Zeta Aquilae,Deneb el Okab,19,5,13.9,2.99,0.96\n\
                172,Beta Trianguli,,2,10,35,3,0.09\n\
                173,Psi Ursae Majoris,,11,10,44.5,3,-0.27\n\
                174,Gamma Ursae Minoris,Pherkad Major,15,21,71.8,3,-2.84\n\
                175,Mu¹ Scorpii,,16,52,-38,3,-4.01\n\
                176,Gamma Gruis,,21,54,-37.4,3,-0.97\n\
                177,Delta Persei,,3,43,47.8,3.01,-3.04\n\
                178,Zeta Canis Majoris,Phurad,6,20,-30.1,3.02,-2.05\n\
                179,Omicron² Canis Majoris,,7,3,-23.8,3.02,-6.46\n\
                180,Epsilon Corvi,Minkar,12,10,-22.6,3.02,-1.82\n\
                181,Epsilon Aurigae,Almaaz,5,2,43.8,3.03,-5.95\n\
                182,Beta Muscae,,12,46,-68.1,3.04,-1.86\n\
                183,Gamma Boötis,Seginus,14,32,38.3,3.04,0.96\n\
                184,Beta Capricorni,Dabih,20,21,-14.8,3.05,-2.07\n\
                185,Epsilon Geminorum,Mebsuta,6,44,25.1,3.06,-4.15\n\
                186,Mu Ursae Majoris,Tania Australis,10,22,41.5,3.06,-1.35\n\
                187,Delta Draconis,Tais,19,13,67.7,3.07,0.63\n\
                188,Eta Sagittarii,,18,18,-36.8,3.1,-0.2\n\
                189,Zeta Hydrae,,8,55,5.9,3.11,-0.21\n\
                190,Nu Hydrae,,10,50,-16.2,3.11,-0.03\n\
                191,Lambda Centauri,,11,36,-63,3.11,-2.39\n\
                192,Alpha Indi,Persian,20,38,-47.3,3.11,0.65\n\
                193,Beta Columbae,Wazn,5,51,-35.8,3.12,1.02\n\
                194,Iota Ursae Majoris,Talita,8,59,48,3.12,2.29\n\
                195,Zeta Arae,,16,59,-56,3.12,-3.11\n\
                196,Delta Herculis,Sarin,17,15,24.8,3.12,1.21\n\
                197,Kappa Centauri,Ke Kwan,14,59,-42.1,3.13,-2.96\n\
                198,Alpha Lyncis,,9,21,34.4,3.14,-1.02\n\
                199,N Velorum,,9,31,-57,3.16,-1.15\n\
                200,Pi Herculis,,17,15,36.8,3.16,-2.1\n\
                201,Nu Puppis,,6,38,-43.2,3.17,-2.39\n\
                202,Theta Ursae Majoris,Al Haud,9,33,51.7,3.17,2.52\n\
                203,Zeta Draconis,Aldhibah,17,9,65.7,3.17,-1.92\n\
                204,Phi Sagittarii,,18,46,-27,3.17,-1.08\n\
                205,Eta Aurigae,Hoedus II,5,7,41.2,3.18,-0.96\n\
                206,Alpha Circini,,14,43,-65,3.18,2.11\n\
                207,Pi³ Orionis,Tabit,4,50,7,3.19,3.67\n\
                208,Epsilon Leporis,,5,5,-22.4,3.19,-1.02\n\
                209,Kappa Ophiuchi,,16,58,9.4,3.19,1.09\n\
                210,G Scorpii,,17,50,-37,3.19,0.24\n\
                211,Zeta Cygni,,21,13,30.2,3.21,-0.12\n\
                212,Gamma Cephei,Errai,23,39,77.6,3.21,2.51\n\
                213,Delta Lupi,,15,21,-40.6,3.22,-2.75\n\
                214,Epsilon Ophiuchi,Yed Posterior,16,18,-4.7,3.23,0.64\n\
                215,Eta Serpentis,Alava,18,21,-2.9,3.23,1.84\n\
                216,Beta Cephei,Alphirk,21,29,70.6,3.23,-3.08\n\
                217,Alpha Pictoris,,6,48,-61.9,3.24,0.83\n\
                218,Theta Aquilae,,20,11,-0.8,3.24,-1.48\n\
                219,Sigma Puppis,,7,29,-43.3,3.25,-0.51\n\
                220,Pi Hydrae,,14,6,-26.7,3.25,0.79\n\
                221,Sigma Librae,Brachium,15,4,-25.3,3.25,-1.51\n\
                222,Gamma Lyrae,Sulaphat,18,59,32.7,3.25,-3.2\n\
                223,Gamma Hydri,,3,47,-74.2,3.26,-0.83\n\
                224,Delta Andromedae,,0,39,30.9,3.27,0.81\n\
                225,Theta Ophiuchi,,17,22,-25,3.27,-2.92\n\
                226,Delta Aquarii,Skat,22,55,-15.8,3.27,-0.18\n\
                227,Mu Leporis,,5,13,-16.2,3.29,-0.47\n\
                228,Omega Carinae,,10,14,-70,3.29,-1.99\n\
                229,Iota Draconis,Edasich,15,25,59,3.29,0.81\n\
                230,Alpha Doradus,,4,34,-55,3.3,-0.36\n\
                231,p Carinae,,10,32,-61.7,3.3,-2.62\n\
                232,Mu Centauri,,13,50,-42.5,3.3,-2.74\n\
                233,Eta Geminorum,Propus,6,15,22.5,3.31,-1.84\n\
                234,Alpha Herculis,Rasalgethi,17,15,14.4,3.31,-2.04\n\
                235,Gamma Arae,,17,25,-56.4,3.31,-4.4\n\
                236,Beta Phoenicis,,1,6,-46.7,3.32,-0.55\n\
                237,Rho Persei,Gorgonea Tertia,3,5,38.8,3.32,-1.67\n\
                238,Delta Ursae Majoris,Megrez,12,15,57,3.32,1.33\n\
                239,Eta Scorpii,,17,12,-43.2,3.32,1.61\n\
                240,Nu Ophiuchi,,17,59,-9.8,3.32,-0.03\n\
                241,Tau Sagittarii,,19,7,-27.7,3.32,0.48\n\
                242,Alpha Reticuli,,4,14,-62.5,3.33,-0.17\n\
                243,Theta Leonis,Chort,11,14,15.4,3.33,-0.35\n\
                244,Xi Puppis,Asmidiske,7,49,-24.9,3.34,-4.74\n\
                245,Epsilon Cassiopeiae,Segin,1,54,63.7,3.35,-2.31\n\
                246,Eta Orionis,Algjebbah,5,24,-2.4,3.35,-3.86\n\
                247,Xi Geminorum,Alzirr,6,45,12.9,3.35,2.13\n\
                248,Omicron Ursae Majoris,Muscida,8,30,60.7,3.35,-0.4\n\
                249,Delta Aquilae,,19,25,3.1,3.36,2.43\n\
                250,Epsilon Lupi,,15,23,-44.7,3.37,-2.58\n\
                251,Zeta Virginis,Heze,13,35,-0.6,3.38,1.62\n\
                252,Epsilon Hydrae,,8,47,6.4,3.38,0.29\n\
                253,Lambda Orionis,Meissa,5,35,9.9,3.39,-4.16\n\
                254,q Carinae,,10,17,-61.3,3.39,-3.38\n\
                255,Delta Virginis,Auva,12,56,3.4,3.39,-0.57\n\
                256,Zeta Cephei,,22,11,58.2,3.39,-3.35\n\
                257,Theta² Tauri,,4,29,15.9,3.4,0.1\n\
                258,Gamma Phoenicis,,1,28,-43.3,3.41,-0.87\n\
                259,Lambda Tauri,,4,1,12.5,3.41,-1.87\n\
                260,Nu Centauri,,13,50,-41.7,3.41,-2.41\n\
                261,Zeta Lupi,,15,12,-52.1,3.41,0.65\n\
                262,Eta Cephei,,20,45,61.8,3.41,2.63\n\
                263,Zeta Pegasi,Homam,22,41,10.8,3.41,-0.62\n\
                264,Alpha Trianguli,Mothallah,1,53,29.6,3.42,1.95\n\
                265,Eta Lupi,,16,0,-38.4,3.42,-2.48\n\
                266,Mu Herculis,,17,46,27.7,3.42,3.8\n\
                267,Beta Pavonis,,20,45,-66.2,3.42,0.29\n\
                268,a Carinae,,9,11,-58.9,3.43,-2.11\n\
                269,Zeta Leonis,Adhafera,10,17,23.4,3.43,-1.08\n\
                270,Lambda Aquilae,Althalimain,19,6,-4.9,3.43,0.51\n\
                271,Lambda Ursae Majoris,Tania Borealis,10,17,42.9,3.45,0.38\n\
                272,Beta Lyrae,Sheliak,18,50,33.4,3.45,-3.71\n\
                273,Eta Cassiopeiae,Achird,0,49,57.8,3.46,4.59\n\
                274,Eta Ceti,Dheneb,1,9,-10.2,3.46,0.67\n\
                275,Chi Carinae,,7,57,-53,3.46,-1.91\n\
                276,Delta Bootis,,15,16,33.3,3.46,0.69\n\
                277,Gamma Ceti,Kaffaljidhma,2,43,3.2,3.47,1.47\n\
                278,Eta Leonis,,10,7,16.8,3.48,-5.6\n\
                279,Eta Herculis,,16,43,38.9,3.48,0.8\n\
                280,Tau Ceti,,1,44,-15.9,3.49,5.68\n\
                281,Sigma Canis Majoris,,7,2,-27.9,3.49,-4.37\n\
                282,Nu Ursae Majoris,Alula Borealis,11,18,33.1,3.49,-2.07\n\
                283,Beta Bootis,Nekkar,15,2,40.4,3.49,-0.64\n\
                284,Alpha Telescopii,,18,27,-46,3.49,-0.93\n\
                285,Epsilon Gruis,,22,49,-51.3,3.49,0.49\n\
                286,Kappa Canis Majoris,,6,50,-32.5,3.5,-3.42\n\
                287,Delta Geminorum,Wasat,7,20,22,3.5,2.22\n\
                288,Iota Cephei,,22,50,66.2,3.5,0.76\n\
                289,Gamma Sagittae,,19,59,19.5,3.51,-1.11\n\
                290,Mu Pegasi,Sadalbari,22,50,24.6,3.51,0.74\n\
                291,Delta Eridani,Rana,3,43,-9.8,3.52,3.74\n\
                292,Omicron Leonis,Subra,9,41,9.9,3.52,0.43\n\
                293,Phi Velorum,Tseen Ke,9,57,-54.6,3.52,-5.34\n\
                294,Xi² Sagittarii,,18,58,-21.1,3.52,-1.77\n\
                295,Theta Pegasi,Baham,22,10,6.2,3.52,1.16\n\
                296,Epsilon Tauri,Ain,4,29,19.2,3.53,0.15\n\
                297,Beta Cancri,Tarf,8,17,9.2,3.53,-1.24\n\
                298,Xi Hydrae,,11,33,-31.9,3.54,0.55\n\
                299,Mu Serpentis,,15,50,-3.4,3.54,0.14\n\
                300,Xi Serpentis,,17,38,-15.4,3.54,0.99"

export default stars;