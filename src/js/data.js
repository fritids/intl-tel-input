// Tell JSHint to ignore this warning: "character may get silently deleted by one or more browsers"
// jshint -W100

// Namespaced to prevent clashes
var intlDataFull = {

  // Array of country objects for the flag dropdown.
  // Each contains a name, country code (ISO 3166-1 alpha-2) and dial code.
  // Originally from https://github.com/mledoze/countries
  // then modified using the following JavaScript:
  /*
  var result = [];
  _.each(countries, function(c) {
    // ignore countries without a dial code
    if (c.callingCode[0].length) {
      result.push({
        // var locals contains country names with localised versions in brackets
        name: _.findWhere(locals, {
          countryCode: c.cca2
        }).name,
        iso2: c.cca2.toLowerCase(),
        dialCode: c.callingCode[0]
      });
    }
  });
  JSON.stringify(result);
  */
  // then with a couple of manual re-arrangements to be alphabetical
  // then changed Kazakhstan from +76 to +7
  // then manually removed quotes from property names as not required
  countries: [{
    name: "Afghanistan (‫افغانستان‬‎)",
    iso2: "af",
    dialCode: "93"
  }, {
    name: "Åland Islands (Åland)",
    iso2: "ax",
    dialCode: "358"
  }, {
    name: "Albania (Shqipëri)",
    iso2: "al",
    dialCode: "355"
  }, {
    name: "Algeria (‫الجزائر‬‎)",
    iso2: "dz",
    dialCode: "213"
  }, {
    name: "American Samoa",
    iso2: "as",
    dialCode: "1684"
  }, {
    name: "Andorra",
    iso2: "ad",
    dialCode: "376"
  }, {
    name: "Angola",
    iso2: "ao",
    dialCode: "244"
  }, {
    name: "Anguilla",
    iso2: "ai",
    dialCode: "1264"
  }, {
    name: "Antigua and Barbuda",
    iso2: "ag",
    dialCode: "1268"
  }, {
    name: "Argentina",
    iso2: "ar",
    dialCode: "54"
  }, {
    name: "Armenia (Հայաստան)",
    iso2: "am",
    dialCode: "374"
  }, {
    name: "Aruba",
    iso2: "aw",
    dialCode: "297"
  }, {
    name: "Australia",
    iso2: "au",
    dialCode: "61"
  }, {
    name: "Austria (Österreich)",
    iso2: "at",
    dialCode: "43"
  }, {
    name: "Azerbaijan (Azərbaycan)",
    iso2: "az",
    dialCode: "994"
  }, {
    name: "Bahamas",
    iso2: "bs",
    dialCode: "1242"
  }, {
    name: "Bahrain (‫البحرين‬‎)",
    iso2: "bh",
    dialCode: "973"
  }, {
    name: "Bangladesh (বাংলাদেশ)",
    iso2: "bd",
    dialCode: "880"
  }, {
    name: "Barbados",
    iso2: "bb",
    dialCode: "1246"
  }, {
    name: "Belarus (Беларусь)",
    iso2: "by",
    dialCode: "375"
  }, {
    name: "Belgium (België)",
    iso2: "be",
    dialCode: "32"
  }, {
    name: "Belize",
    iso2: "bz",
    dialCode: "501"
  }, {
    name: "Benin (Bénin)",
    iso2: "bj",
    dialCode: "229"
  }, {
    name: "Bermuda",
    iso2: "bm",
    dialCode: "1441"
  }, {
    name: "Bhutan (འབྲུག)",
    iso2: "bt",
    dialCode: "975"
  }, {
    name: "Bolivia",
    iso2: "bo",
    dialCode: "591"
  }, {
    name: "Caribbean Netherlands",
    iso2: "bq",
    dialCode: "5997"
  }, {
    name: "Bosnia and Herzegovina (Босна и Херцеговина)",
    iso2: "ba",
    dialCode: "387"
  }, {
    name: "Botswana",
    iso2: "bw",
    dialCode: "267"
  }, {
    name: "Brazil (Brasil)",
    iso2: "br",
    dialCode: "55"
  }, {
    name: "British Indian Ocean Territory",
    iso2: "io",
    dialCode: "246"
  }, {
    name: "British Virgin Islands",
    iso2: "vg",
    dialCode: "1284"
  }, {
    name: "Brunei",
    iso2: "bn",
    dialCode: "673"
  }, {
    name: "Bulgaria (България)",
    iso2: "bg",
    dialCode: "359"
  }, {
    name: "Burkina Faso",
    iso2: "bf",
    dialCode: "226"
  }, {
    name: "Burundi (Uburundi)",
    iso2: "bi",
    dialCode: "257"
  }, {
    name: "Cambodia (កម្ពុជា)",
    iso2: "kh",
    dialCode: "855"
  }, {
    name: "Cameroon (Cameroun)",
    iso2: "cm",
    dialCode: "237"
  }, {
    name: "Canada",
    iso2: "ca",
    dialCode: "1"
  }, {
    name: "Cape Verde (Kabu Verdi)",
    iso2: "cv",
    dialCode: "238"
  }, {
    name: "Cayman Islands",
    iso2: "ky",
    dialCode: "1345"
  }, {
    name: "Central African Republic (République centrafricaine)",
    iso2: "cf",
    dialCode: "236"
  }, {
    name: "Chad (Tchad)",
    iso2: "td",
    dialCode: "235"
  }, {
    name: "Chile",
    iso2: "cl",
    dialCode: "56"
  }, {
    name: "China (中国)",
    iso2: "cn",
    dialCode: "86"
  }, {
    name: "Christmas Island",
    iso2: "cx",
    dialCode: "61"
  }, {
    name: "Cocos (Keeling) Islands (Kepulauan Cocos (Keeling))",
    iso2: "cc",
    dialCode: "61"
  }, {
    name: "Colombia",
    iso2: "co",
    dialCode: "57"
  }, {
    name: "Comoros (‫جزر القمر‬‎)",
    iso2: "km",
    dialCode: "269"
  }, {
    name: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
    iso2: "cd",
    dialCode: "243"
  }, {
    name: "Congo (Republic) (Congo-Brazzaville)",
    iso2: "cg",
    dialCode: "242"
  }, {
    name: "Cook Islands",
    iso2: "ck",
    dialCode: "682"
  }, {
    name: "Costa Rica",
    iso2: "cr",
    dialCode: "506"
  }, {
    name: "Côte d’Ivoire",
    iso2: "ci",
    dialCode: "225"
  }, {
    name: "Croatia (Hrvatska)",
    iso2: "hr",
    dialCode: "385"
  }, {
    name: "Cuba",
    iso2: "cu",
    dialCode: "53"
  }, {
    name: "Curaçao",
    iso2: "cw",
    dialCode: "5999"
  }, {
    name: "Cyprus (Κύπρος)",
    iso2: "cy",
    dialCode: "357"
  }, {
    name: "Czech Republic (Česká republika)",
    iso2: "cz",
    dialCode: "420"
  }, {
    name: "Denmark (Danmark)",
    iso2: "dk",
    dialCode: "45"
  }, {
    name: "Djibouti",
    iso2: "dj",
    dialCode: "253"
  }, {
    name: "Dominica",
    iso2: "dm",
    dialCode: "1767"
  }, {
    name: "Dominican Republic (República Dominicana)",
    iso2: "do",
    dialCode: "1809"
  }, {
    name: "Ecuador",
    iso2: "ec",
    dialCode: "593"
  }, {
    name: "Egypt (‫مصر‬‎)",
    iso2: "eg",
    dialCode: "20"
  }, {
    name: "El Salvador",
    iso2: "sv",
    dialCode: "503"
  }, {
    name: "Equatorial Guinea (Guinea Ecuatorial)",
    iso2: "gq",
    dialCode: "240"
  }, {
    name: "Eritrea",
    iso2: "er",
    dialCode: "291"
  }, {
    name: "Estonia (Eesti)",
    iso2: "ee",
    dialCode: "372"
  }, {
    name: "Ethiopia",
    iso2: "et",
    dialCode: "251"
  }, {
    name: "Falkland Islands (Islas Malvinas)",
    iso2: "fk",
    dialCode: "500"
  }, {
    name: "Faroe Islands (Føroyar)",
    iso2: "fo",
    dialCode: "298"
  }, {
    name: "Fiji",
    iso2: "fj",
    dialCode: "679"
  }, {
    name: "Finland (Suomi)",
    iso2: "fi",
    dialCode: "358"
  }, {
    name: "France",
    iso2: "fr",
    dialCode: "33"
  }, {
    name: "French Guiana (Guyane française)",
    iso2: "gf",
    dialCode: "594"
  }, {
    name: "French Polynesia (Polynésie française)",
    iso2: "pf",
    dialCode: "689"
  }, {
    name: "Gabon",
    iso2: "ga",
    dialCode: "241"
  }, {
    name: "Gambia",
    iso2: "gm",
    dialCode: "220"
  }, {
    name: "Georgia (საქართველო)",
    iso2: "ge",
    dialCode: "995"
  }, {
    name: "Germany (Deutschland)",
    iso2: "de",
    dialCode: "49"
  }, {
    name: "Ghana (Gaana)",
    iso2: "gh",
    dialCode: "233"
  }, {
    name: "Gibraltar",
    iso2: "gi",
    dialCode: "350"
  }, {
    name: "Greece (Ελλάδα)",
    iso2: "gr",
    dialCode: "30"
  }, {
    name: "Greenland (Kalaallit Nunaat)",
    iso2: "gl",
    dialCode: "299"
  }, {
    name: "Grenada",
    iso2: "gd",
    dialCode: "1473"
  }, {
    name: "Guadeloupe",
    iso2: "gp",
    dialCode: "590"
  }, {
    name: "Guam",
    iso2: "gu",
    dialCode: "1671"
  }, {
    name: "Guatemala",
    iso2: "gt",
    dialCode: "502"
  }, {
    name: "Guernsey",
    iso2: "gg",
    dialCode: "44"
  }, {
    name: "Guinea (Guinée)",
    iso2: "gn",
    dialCode: "224"
  }, {
    name: "Guinea-Bissau (Guiné Bissau)",
    iso2: "gw",
    dialCode: "245"
  }, {
    name: "Guyana",
    iso2: "gy",
    dialCode: "592"
  }, {
    name: "Haiti",
    iso2: "ht",
    dialCode: "509"
  }, {
    name: "Honduras",
    iso2: "hn",
    dialCode: "504"
  }, {
    name: "Hong Kong (香港)",
    iso2: "hk",
    dialCode: "852"
  }, {
    name: "Hungary (Magyarország)",
    iso2: "hu",
    dialCode: "36"
  }, {
    name: "Iceland (Ísland)",
    iso2: "is",
    dialCode: "354"
  }, {
    name: "India (भारत)",
    iso2: "in",
    dialCode: "91"
  }, {
    name: "Indonesia",
    iso2: "id",
    dialCode: "62"
  }, {
    name: "Iran (‫ایران‬‎)",
    iso2: "ir",
    dialCode: "98"
  }, {
    name: "Iraq (‫العراق‬‎)",
    iso2: "iq",
    dialCode: "964"
  }, {
    name: "Ireland",
    iso2: "ie",
    dialCode: "353"
  }, {
    name: "Isle of Man",
    iso2: "im",
    dialCode: "44"
  }, {
    name: "Israel (‫ישראל‬‎)",
    iso2: "il",
    dialCode: "972"
  }, {
    name: "Italy (Italia)",
    iso2: "it",
    dialCode: "39"
  }, {
    name: "Jamaica",
    iso2: "jm",
    dialCode: "1876"
  }, {
    name: "Japan (日本)",
    iso2: "jp",
    dialCode: "81"
  }, {
    name: "Jersey",
    iso2: "je",
    dialCode: "44"
  }, {
    name: "Jordan (‫الأردن‬‎)",
    iso2: "jo",
    dialCode: "962"
  }, {
    name: "Kazakhstan (Казахстан)",
    iso2: "kz",
    dialCode: "7"
  }, {
    name: "Kenya",
    iso2: "ke",
    dialCode: "254"
  }, {
    name: "Kiribati",
    iso2: "ki",
    dialCode: "686"
  }, {
    name: "Kosovo (Kosovë)",
    iso2: "xk",
    dialCode: "377"
  }, {
    name: "Kuwait (‫الكويت‬‎)",
    iso2: "kw",
    dialCode: "965"
  }, {
    name: "Kyrgyzstan (Кыргызстан)",
    iso2: "kg",
    dialCode: "996"
  }, {
    name: "Laos (ລາວ)",
    iso2: "la",
    dialCode: "856"
  }, {
    name: "Latvia (Latvija)",
    iso2: "lv",
    dialCode: "371"
  }, {
    name: "Lebanon (‫لبنان‬‎)",
    iso2: "lb",
    dialCode: "961"
  }, {
    name: "Lesotho",
    iso2: "ls",
    dialCode: "266"
  }, {
    name: "Liberia",
    iso2: "lr",
    dialCode: "231"
  }, {
    name: "Libya (‫ليبيا‬‎)",
    iso2: "ly",
    dialCode: "218"
  }, {
    name: "Liechtenstein",
    iso2: "li",
    dialCode: "423"
  }, {
    name: "Lithuania (Lietuva)",
    iso2: "lt",
    dialCode: "370"
  }, {
    name: "Luxembourg",
    iso2: "lu",
    dialCode: "352"
  }, {
    name: "Macau (澳門)",
    iso2: "mo",
    dialCode: "853"
  }, {
    name: "Macedonia (FYROM) (Македонија)",
    iso2: "mk",
    dialCode: "389"
  }, {
    name: "Madagascar (Madagasikara)",
    iso2: "mg",
    dialCode: "261"
  }, {
    name: "Malawi",
    iso2: "mw",
    dialCode: "265"
  }, {
    name: "Malaysia",
    iso2: "my",
    dialCode: "60"
  }, {
    name: "Maldives",
    iso2: "mv",
    dialCode: "960"
  }, {
    name: "Mali",
    iso2: "ml",
    dialCode: "223"
  }, {
    name: "Malta",
    iso2: "mt",
    dialCode: "356"
  }, {
    name: "Marshall Islands",
    iso2: "mh",
    dialCode: "692"
  }, {
    name: "Martinique",
    iso2: "mq",
    dialCode: "596"
  }, {
    name: "Mauritania (‫موريتانيا‬‎)",
    iso2: "mr",
    dialCode: "222"
  }, {
    name: "Mauritius (Moris)",
    iso2: "mu",
    dialCode: "230"
  }, {
    name: "Mayotte",
    iso2: "yt",
    dialCode: "262"
  }, {
    name: "Mexico (México)",
    iso2: "mx",
    dialCode: "52"
  }, {
    name: "Micronesia",
    iso2: "fm",
    dialCode: "691"
  }, {
    name: "Moldova (Republica Moldova)",
    iso2: "md",
    dialCode: "373"
  }, {
    name: "Monaco",
    iso2: "mc",
    dialCode: "377"
  }, {
    name: "Mongolia (Монгол)",
    iso2: "mn",
    dialCode: "976"
  }, {
    name: "Montenegro (Crna Gora)",
    iso2: "me",
    dialCode: "382"
  }, {
    name: "Montserrat",
    iso2: "ms",
    dialCode: "1664"
  }, {
    name: "Morocco (‫المغرب‬‎)",
    iso2: "ma",
    dialCode: "212"
  }, {
    name: "Mozambique (Moçambique)",
    iso2: "mz",
    dialCode: "258"
  }, {
    name: "Myanmar (Burma) (မြန်မာ)",
    iso2: "mm",
    dialCode: "95"
  }, {
    name: "Namibia (Namibië)",
    iso2: "na",
    dialCode: "264"
  }, {
    name: "Nauru",
    iso2: "nr",
    dialCode: "674"
  }, {
    name: "Nepal (नेपाल)",
    iso2: "np",
    dialCode: "977"
  }, {
    name: "Netherlands (Nederland)",
    iso2: "nl",
    dialCode: "31"
  }, {
    name: "New Caledonia (Nouvelle-Calédonie)",
    iso2: "nc",
    dialCode: "687"
  }, {
    name: "New Zealand",
    iso2: "nz",
    dialCode: "64"
  }, {
    name: "Nicaragua",
    iso2: "ni",
    dialCode: "505"
  }, {
    name: "Niger (Nijar)",
    iso2: "ne",
    dialCode: "227"
  }, {
    name: "Nigeria",
    iso2: "ng",
    dialCode: "234"
  }, {
    name: "Niue",
    iso2: "nu",
    dialCode: "683"
  }, {
    name: "Norfolk Island",
    iso2: "nf",
    dialCode: "672"
  }, {
    name: "North Korea (조선 민주주의 인민 공화국)",
    iso2: "kp",
    dialCode: "850"
  }, {
    name: "Northern Mariana Islands",
    iso2: "mp",
    dialCode: "1670"
  }, {
    name: "Norway (Norge)",
    iso2: "no",
    dialCode: "47"
  }, {
    name: "Oman (‫عُمان‬‎)",
    iso2: "om",
    dialCode: "968"
  }, {
    name: "Pakistan (‫پاکستان‬‎)",
    iso2: "pk",
    dialCode: "92"
  }, {
    name: "Palau",
    iso2: "pw",
    dialCode: "680"
  }, {
    name: "Palestine (‫فلسطين‬‎)",
    iso2: "ps",
    dialCode: "970"
  }, {
    name: "Panama (Panamá)",
    iso2: "pa",
    dialCode: "507"
  }, {
    name: "Papua New Guinea",
    iso2: "pg",
    dialCode: "675"
  }, {
    name: "Paraguay",
    iso2: "py",
    dialCode: "595"
  }, {
    name: "Peru (Perú)",
    iso2: "pe",
    dialCode: "51"
  }, {
    name: "Philippines",
    iso2: "ph",
    dialCode: "63"
  }, {
    name: "Pitcairn Islands",
    iso2: "pn",
    dialCode: "64"
  }, {
    name: "Poland (Polska)",
    iso2: "pl",
    dialCode: "48"
  }, {
    name: "Portugal",
    iso2: "pt",
    dialCode: "351"
  }, {
    name: "Puerto Rico",
    iso2: "pr",
    dialCode: "1787"
  }, {
    name: "Qatar (‫قطر‬‎)",
    iso2: "qa",
    dialCode: "974"
  }, {
    name: "Réunion (La Réunion)",
    iso2: "re",
    dialCode: "262"
  }, {
    name: "Romania (România)",
    iso2: "ro",
    dialCode: "40"
  }, {
    name: "Russia (Россия)",
    iso2: "ru",
    dialCode: "7"
  }, {
    name: "Rwanda",
    iso2: "rw",
    dialCode: "250"
  }, {
    name: "Saint Barthélemy (Saint-Barthélemy)",
    iso2: "bl",
    dialCode: "590"
  }, {
    name: "Saint Helena",
    iso2: "sh",
    dialCode: "290"
  }, {
    name: "Saint Kitts and Nevis",
    iso2: "kn",
    dialCode: "1869"
  }, {
    name: "Saint Lucia",
    iso2: "lc",
    dialCode: "1758"
  }, {
    name: "Saint Martin (Saint-Martin (partie française))",
    iso2: "mf",
    dialCode: "590"
  }, {
    name: "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
    iso2: "pm",
    dialCode: "508"
  }, {
    name: "Saint Vincent and the Grenadines",
    iso2: "vc",
    dialCode: "1784"
  }, {
    name: "Samoa",
    iso2: "ws",
    dialCode: "685"
  }, {
    name: "San Marino",
    iso2: "sm",
    dialCode: "378"
  }, {
    name: "São Tomé and Príncipe (São Tomé e Príncipe)",
    iso2: "st",
    dialCode: "239"
  }, {
    name: "Saudi Arabia (‫المملكة العربية السعودية‬‎)",
    iso2: "sa",
    dialCode: "966"
  }, {
    name: "Senegal (Sénégal)",
    iso2: "sn",
    dialCode: "221"
  }, {
    name: "Serbia (Србија)",
    iso2: "rs",
    dialCode: "381"
  }, {
    name: "Seychelles",
    iso2: "sc",
    dialCode: "248"
  }, {
    name: "Sierra Leone",
    iso2: "sl",
    dialCode: "232"
  }, {
    name: "Singapore",
    iso2: "sg",
    dialCode: "65"
  }, {
    name: "Sint Maarten",
    iso2: "sx",
    dialCode: "1721"
  }, {
    name: "Slovakia (Slovensko)",
    iso2: "sk",
    dialCode: "421"
  }, {
    name: "Slovenia (Slovenija)",
    iso2: "si",
    dialCode: "386"
  }, {
    name: "Solomon Islands",
    iso2: "sb",
    dialCode: "677"
  }, {
    name: "Somalia (Soomaaliya)",
    iso2: "so",
    dialCode: "252"
  }, {
    name: "South Africa",
    iso2: "za",
    dialCode: "27"
  }, {
    name: "South Georgia & South Sandwich Islands",
    iso2: "gs",
    dialCode: "500"
  }, {
    name: "South Korea (대한민국)",
    iso2: "kr",
    dialCode: "82"
  }, {
    name: "South Sudan (‫جنوب السودان‬‎)",
    iso2: "ss",
    dialCode: "211"
  }, {
    name: "Spain (España)",
    iso2: "es",
    dialCode: "34"
  }, {
    name: "Sri Lanka (ශ්‍රී ලංකාව)",
    iso2: "lk",
    dialCode: "94"
  }, {
    name: "Sudan (‫السودان‬‎)",
    iso2: "sd",
    dialCode: "249"
  }, {
    name: "Suriname",
    iso2: "sr",
    dialCode: "597"
  }, {
    name: "Svalbard and Jan Mayen (Svalbard og Jan Mayen)",
    iso2: "sj",
    dialCode: "4779"
  }, {
    name: "Swaziland",
    iso2: "sz",
    dialCode: "268"
  }, {
    name: "Sweden (Sverige)",
    iso2: "se",
    dialCode: "46"
  }, {
    name: "Switzerland (Schweiz)",
    iso2: "ch",
    dialCode: "41"
  }, {
    name: "Syria (‫سوريا‬‎)",
    iso2: "sy",
    dialCode: "963"
  }, {
    name: "Taiwan (台灣)",
    iso2: "tw",
    dialCode: "886"
  }, {
    name: "Tajikistan",
    iso2: "tj",
    dialCode: "992"
  }, {
    name: "Tanzania",
    iso2: "tz",
    dialCode: "255"
  }, {
    name: "Thailand (ไทย)",
    iso2: "th",
    dialCode: "66"
  }, {
    name: "Timor-Leste",
    iso2: "tl",
    dialCode: "670"
  }, {
    name: "Togo",
    iso2: "tg",
    dialCode: "228"
  }, {
    name: "Tokelau",
    iso2: "tk",
    dialCode: "690"
  }, {
    name: "Tonga",
    iso2: "to",
    dialCode: "676"
  }, {
    name: "Trinidad and Tobago",
    iso2: "tt",
    dialCode: "1868"
  }, {
    name: "Tunisia (‫تونس‬‎)",
    iso2: "tn",
    dialCode: "216"
  }, {
    name: "Turkey (Türkiye)",
    iso2: "tr",
    dialCode: "90"
  }, {
    name: "Turkmenistan",
    iso2: "tm",
    dialCode: "993"
  }, {
    name: "Turks and Caicos Islands",
    iso2: "tc",
    dialCode: "1649"
  }, {
    name: "Tuvalu",
    iso2: "tv",
    dialCode: "688"
  }, {
    name: "Uganda",
    iso2: "ug",
    dialCode: "256"
  }, {
    name: "Ukraine (Україна)",
    iso2: "ua",
    dialCode: "380"
  }, {
    name: "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
    iso2: "ae",
    dialCode: "971"
  }, {
    name: "United Kingdom",
    iso2: "gb",
    dialCode: "44"
  }, {
    name: "United States",
    iso2: "us",
    dialCode: "1"
  }, {
    name: "U.S. Virgin Islands",
    iso2: "vi",
    dialCode: "1340"
  }, {
    name: "Uruguay",
    iso2: "uy",
    dialCode: "598"
  }, {
    name: "Uzbekistan (Oʻzbekiston)",
    iso2: "uz",
    dialCode: "998"
  }, {
    name: "Vanuatu",
    iso2: "vu",
    dialCode: "678"
  }, {
    name: "Vatican City (Città del Vaticano)",
    iso2: "va",
    dialCode: "379"
  }, {
    name: "Venezuela",
    iso2: "ve",
    dialCode: "58"
  }, {
    name: "Vietnam (Việt Nam)",
    iso2: "vn",
    dialCode: "84"
  }, {
    name: "Wallis and Futuna",
    iso2: "wf",
    dialCode: "681"
  }, {
    name: "Western Sahara (‫الصحراء الغربية‬‎)",
    iso2: "eh",
    dialCode: "212"
  }, {
    name: "Yemen (‫اليمن‬‎)",
    iso2: "ye",
    dialCode: "967"
  }, {
    name: "Zambia",
    iso2: "zm",
    dialCode: "260"
  }, {
    name: "Zimbabwe",
    iso2: "zw",
    dialCode: "263"
  }],

  // JavaScript object mapping dial code to country code.
  // This is used when the user enters a number,
  // to quickly look up the corresponding country code.
  // Generated from the above array using this JavaScript:
  /*
  var uniqueDCs = _.unique(_.pluck(intlDataFull.countries, dialCode));
  var cCodes = {};
  _.each(uniqueDCs, function(dc) {
    cCodes[dc] = _.pluck(_.filter(intlDataFull.countries, function(c) {
      return c[dialCode] == dc;
    }), iso2);
  });
   */
  // Then reference this google code project for clash priority:
  // http://libphonenumber.googlecode.com/svn/trunk/javascript/i18n/phonenumbers/metadata.js
  // then updated vatican city to +379
  countryCodes: {
    "1": ["us", "ca"],
    "7": ["ru", "kz"],
    "20": ["eg"],
    "27": ["za"],
    "30": ["gr"],
    "31": ["nl"],
    "32": ["be"],
    "33": ["fr"],
    "34": ["es"],
    "36": ["hu"],
    "39": ["it"],
    "40": ["ro"],
    "41": ["ch"],
    "43": ["at"],
    "44": ["gb", "gg", "im", "je"],
    "45": ["dk"],
    "46": ["se"],
    "47": ["no"],
    "48": ["pl"],
    "49": ["de"],
    "51": ["pe"],
    "52": ["mx"],
    "53": ["cu"],
    "54": ["ar"],
    "55": ["br"],
    "56": ["cl"],
    "57": ["co"],
    "58": ["ve"],
    "60": ["my"],
    "61": ["au", "cc", "cx"],
    "62": ["id"],
    "63": ["ph"],
    "64": ["nz", "pn"],
    "65": ["sg"],
    "66": ["th"],
    "81": ["jp"],
    "82": ["kr"],
    "84": ["vn"],
    "86": ["cn"],
    "90": ["tr"],
    "91": ["in"],
    "92": ["pk"],
    "93": ["af"],
    "94": ["lk"],
    "95": ["mm"],
    "98": ["ir"],
    "211": ["ss"],
    "212": ["ma", "eh"],
    "213": ["dz"],
    "216": ["tn"],
    "218": ["ly"],
    "220": ["gm"],
    "221": ["sn"],
    "222": ["mr"],
    "223": ["ml"],
    "224": ["gn"],
    "225": ["ci"],
    "226": ["bf"],
    "227": ["ne"],
    "228": ["tg"],
    "229": ["bj"],
    "230": ["mu"],
    "231": ["lr"],
    "232": ["sl"],
    "233": ["gh"],
    "234": ["ng"],
    "235": ["td"],
    "236": ["cf"],
    "237": ["cm"],
    "238": ["cv"],
    "239": ["st"],
    "240": ["gq"],
    "241": ["ga"],
    "242": ["cg"],
    "243": ["cd"],
    "244": ["ao"],
    "245": ["gw"],
    "246": ["io"],
    "248": ["sc"],
    "249": ["sd"],
    "250": ["rw"],
    "251": ["et"],
    "252": ["so"],
    "253": ["dj"],
    "254": ["ke"],
    "255": ["tz"],
    "256": ["ug"],
    "257": ["bi"],
    "258": ["mz"],
    "260": ["zm"],
    "261": ["mg"],
    "262": ["re", "yt"],
    "263": ["zw"],
    "264": ["na"],
    "265": ["mw"],
    "266": ["ls"],
    "267": ["bw"],
    "268": ["sz"],
    "269": ["km"],
    "290": ["sh"],
    "291": ["er"],
    "297": ["aw"],
    "298": ["fo"],
    "299": ["gl"],
    "350": ["gi"],
    "351": ["pt"],
    "352": ["lu"],
    "353": ["ie"],
    "354": ["is"],
    "355": ["al"],
    "356": ["mt"],
    "357": ["cy"],
    "358": ["fi", "ax"],
    "359": ["bg"],
    "370": ["lt"],
    "371": ["lv"],
    "372": ["ee"],
    "373": ["md"],
    "374": ["am"],
    "375": ["by"],
    "376": ["ad"],
    "377": ["mc", "xk"],
    "378": ["sm"],
    "379": ["va"],
    "380": ["ua"],
    "381": ["rs"],
    "382": ["me"],
    "385": ["hr"],
    "386": ["si"],
    "387": ["ba"],
    "389": ["mk"],
    "420": ["cz"],
    "421": ["sk"],
    "423": ["li"],
    "500": ["fk", "gs"],
    "501": ["bz"],
    "502": ["gt"],
    "503": ["sv"],
    "504": ["hn"],
    "505": ["ni"],
    "506": ["cr"],
    "507": ["pa"],
    "508": ["pm"],
    "509": ["ht"],
    "590": ["gp", "bl", "mf"],
    "591": ["bo"],
    "592": ["gy"],
    "593": ["ec"],
    "594": ["gf"],
    "595": ["py"],
    "596": ["mq"],
    "597": ["sr"],
    "598": ["uy"],
    "670": ["tl"],
    "672": ["nf"],
    "673": ["bn"],
    "674": ["nr"],
    "675": ["pg"],
    "676": ["to"],
    "677": ["sb"],
    "678": ["vu"],
    "679": ["fj"],
    "680": ["pw"],
    "681": ["wf"],
    "682": ["ck"],
    "683": ["nu"],
    "685": ["ws"],
    "686": ["ki"],
    "687": ["nc"],
    "688": ["tv"],
    "689": ["pf"],
    "690": ["tk"],
    "691": ["fm"],
    "692": ["mh"],
    "850": ["kp"],
    "852": ["hk"],
    "853": ["mo"],
    "855": ["kh"],
    "856": ["la"],
    "880": ["bd"],
    "886": ["tw"],
    "960": ["mv"],
    "961": ["lb"],
    "962": ["jo"],
    "963": ["sy"],
    "964": ["iq"],
    "965": ["kw"],
    "966": ["sa"],
    "967": ["ye"],
    "968": ["om"],
    "970": ["ps"],
    "971": ["ae"],
    "972": ["il"],
    "973": ["bh"],
    "974": ["qa"],
    "975": ["bt"],
    "976": ["mn"],
    "977": ["np"],
    "992": ["tj"],
    "993": ["tm"],
    "994": ["az"],
    "995": ["ge"],
    "996": ["kg"],
    "998": ["uz"],
    "1242": ["bs"],
    "1246": ["bb"],
    "1264": ["ai"],
    "1268": ["ag"],
    "1284": ["vg"],
    "1340": ["vi"],
    "1345": ["ky"],
    "1441": ["bm"],
    "1473": ["gd"],
    "1649": ["tc"],
    "1664": ["ms"],
    "1670": ["mp"],
    "1671": ["gu"],
    "1684": ["as"],
    "1721": ["sx"],
    "1758": ["lc"],
    "1767": ["dm"],
    "1784": ["vc"],
    "1787": ["pr"],
    "1809": ["do"],
    "1868": ["tt"],
    "1869": ["kn"],
    "1876": ["jm"],
    "4779": ["sj"],
    "5997": ["bq"],
    "5999": ["cw"]
  }

};