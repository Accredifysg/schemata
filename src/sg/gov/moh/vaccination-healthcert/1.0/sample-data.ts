// Samples are exported in a TS file so that it won't be hosted on the frontend

export const sampleVaccineHealthCert = {
  id: "9f123b02-cfe8-4ae8-b1d8-fe108910fc2e",
  name: "VaccinationHealthCert",
  validFrom: "2021-12-28T08:32:48.435Z",
  fhirVersion: "4.0.1",
  fhirBundle: {
    resourceType: "Bundle",
    type: "collection",
    entry: [
      {
        fullUrl: "urn:uuid:ca6f8564-0529-4454-9b6f-41456d5663c5",
        resourceType: "Patient",
        extension: [{ url: "http://hl7.org/fhir/StructureDefinition/patient-nationality", code: { text: "SG" } }],
        identifier: [
          { type: "PPN", value: "E2352363K" },
          { type: { text: "NRIC" }, value: "T****111J" },
        ],
        name: [{ text: "Vaccinated Citizen" }],
        gender: "female",
        birthDate: "1965-08-09",
      },
      {
        fullUrl: "urn:uuid:b00ddbba-f33e-4ada-a35f-2cf20ef1f97c",
        resourceType: "Location",
        id: "HCI0000",
        name: "Vaccination site approved by Ministry of Health (MOH), Singapore [HCI0000]",
        address: { country: "SG" },
      },
      {
        fullUrl: "urn:uuid:a32d3217-a619-4a6c-a9e9-8ec71cba19a6",
        resourceType: "Location",
        id: "HCI0000",
        name: "Vaccination site approved by Ministry of Health (MOH), Singapore [HCI0000]",
        address: { country: "SG" },
      },
      {
        fullUrl: "urn:uuid:90ac5903-6a4e-4d1f-8d0c-6b8eecc691c6",
        resourceType: "Immunization",
        vaccineCode: {
          coding: [
            {
              system: "http://standards.ihis.com.sg",
              code: "3407851000133103",
              display: "MODERNA COVID-19 Vaccine [mRNA-1273] Injection",
            },
          ],
        },
        lotNumber: "EK0000",
        occurrenceDateTime: "2021-01-01",
        patient: { reference: "urn:uuid:ca6f8564-0529-4454-9b6f-41456d5663c5" },
        location: { reference: "urn:uuid:b00ddbba-f33e-4ada-a35f-2cf20ef1f97c" },
        performer: [{ actor: { display: "Designated vaccinator by MOH-approved vaccination site" } }],
      },
      {
        fullUrl: "urn:uuid:fa627388-e5e8-4308-89e6-3de5f26d9558",
        resourceType: "Immunization",
        vaccineCode: {
          coding: [
            {
              system: "http://standards.ihis.com.sg",
              code: "3407851000133103",
              display: "MODERNA COVID-19 Vaccine [mRNA-1273] Injection",
            },
          ],
        },
        lotNumber: "EK0000",
        occurrenceDateTime: "2021-02-01",
        patient: { reference: "urn:uuid:ca6f8564-0529-4454-9b6f-41456d5663c5" },
        location: { reference: "urn:uuid:a32d3217-a619-4a6c-a9e9-8ec71cba19a6" },
        performer: [{ actor: { display: "Designated vaccinator by MOH-approved vaccination site" } }],
      },
      {
        fullUrl: "urn:uuid:76089335-d908-46ee-91e3-93e80464f928",
        resourceType: "ImmunizationRecommendation",
        recommendation: [
          {
            targetDisease: {
              coding: [{ system: "http://snomed.info/sct", code: "840539006", display: "COVID-19" }],
            },
            forecastStatus: {
              coding: [{ system: "http://snomed.info/sct", code: "complete", display: "Complete" }],
            },
            dateCriterion: [
              {
                code: { coding: [{ system: "", code: "effective", display: "Effective" }] },
                value: "2021-01-01",
              },
            ],
          },
        ],
        patient: { reference: "urn:uuid:ca6f8564-0529-4454-9b6f-41456d5663c5" },
      },
    ],
  },
  issuers: [
    {
      name: "SAMPLE ISSUER (DO NOT VERIFY)",
      id: "did:ethr:0xE39479928Cc4EfFE50774488780B9f616bd4B830",
      revocation: { type: "REVOCATION_STORE", location: "0x7384702915962d70Ef202Ffb38152c4c89cD98dA" },
      identityProof: {
        type: "DNS-DID",
        location: "donotverify.testing.verify.gov.sg",
        key: "did:ethr:0xE39479928Cc4EfFE50774488780B9f616bd4B830#controller",
      },
    },
  ],
  $template: {
    name: "VACCINATION_CERT",
    type: "EMBEDDED_RENDERER",
    url: "https://healthcert.renderer.moh.gov.sg/",
  },
  notarisationMetadata: {
    reference: "9f123b02-cfe8-4ae8-b1d8-fe108910fc2e",
    notarisedOn: "2021-12-28T08:32:48.435Z",
    passportNumber: "E2352363K",
    url: "https://www.verify.gov.sg/verify?q=%7B%22type%22%3A%22DOCUMENT%22%2C%22payload%22%3A%7B%22uri%22%3A%22https%3A%2F%2Fapi-vaccine.storage.staging.notarise.io%2Fdocument%2F5519c8d6-d5eb-4c1d-aeba-286f4eecb444%22%2C%22permittedActions%22%3A%5B%22VIEW%22%2C%22STORE%22%5D%7D%7D#%7B%22key%22%3A%22ce21a763054c8741010d4bc0e955da2ab771b1d5404245bf6f239195e7e11f43%22%7D",
    signedEuHealthCerts: [
      {
        type: "VAC",
        expiryDateTime: "2022-12-28T08:32:47.650Z",
        vaccineCode: "3407851000133103",
        dose: 1,
        qr: "HC1:6BFJ%GR/POJ2LP3S.6B8U+D4DB4/62A6U+.CG-6OJ32*D9ORP8A$895YML-1DWMWHE/6UCWN%P6:18I3105WYLK4K5V.VBSA7/UILOKOFRE5Z-UZ8RUY2Z.DVXT9LV.8T 2H90DQ6E/$UVSON+Q-.U+RKP2CVKSQ2BU 3M1IE27F15%8P*RBYF9UHC5XKNAPU/OO$U6XHN:M0UDU-H/IL*X7*VL4F64TK7+L3-9GKL%-H%M279TR6H%O4%3T*3DYDBGQ29OHR/BMV2-+8+KB74NAN9O+HX$3E:GB+B59G630P+UXZ7QFAF+A1AI V1RV7J$VM22G$9RA6ZFL66M+/TC P5CI%MEAGH06EP61W00ND8*JC2ONFG3Q/0A83/L4AAK8OI7*PM.P1LD*AW6.9D 7$:T /L59UZ-Q6BGM5T280MW2HXK:68%+B+RA2/2%65PNM6SAH21%V1ANH/R1HKSMNRNJ0%-O.VN3.1P8D8-T1KMTCBN:EJ23WR6:MO%TNMQH-5OJJFKB1TCIB%EH9EDO2KD4JHLWAKUQ4FFO6EJKTT7ZTM86-+NPRLZS3.L0F784ZHUZNEAQ7NOE56R3C$E4HU5-KE4QD5NC5-S/V6-UNW0C.WNCZBETECT9MA5Z92V/G*6IGZLHZH7XB5VR3.82+II34Y-89P19Y774U9-8+-B*EU:29D H1I94*O0%GGGCI0F4338-BRRN5K9B5N6Z2LZ1CRRTYLZ 7ESE:M37+LDO8VIL$+BE C:W06BKY22SB94CE5RO9N6IE6%/2:.0NV3O$R3RMG9V98E7CHC.S0VA7N1-POXWLL36O*4/TM-KAE6F+AM MS3CFN723I9MC02:CDKGKCGE%OP90JMPTA9:IKJG0%BS1D6151O+QDOBASQX%45%G 8DN95N59-3CD$9R8O$NF+3OMANZ3GWCV93EPCQ-*NH.U7%OPYOF.S5ZG3ZES*CSUR2F9 *VLO918G81V9HDUF3A7KB%F6NQSYG5%3NLNK6LS%VGZ3-+0",
        appleCovidCardUrl:
          "https://redirect.health.apple.com/EU-DCC/#6BFJ%25GR%2FPOJ2LP3S.6B8U%2BD4DB4%2F62A6U%2B.CG-6OJ32%2AD9ORP8A%24895YML-1DWMWHE%2F6UCWN%25P6%3A18I3105WYLK4K5V.VBSA7%2FUILOKOFRE5Z-UZ8RUY2Z.DVXT9LV.8T%202H90DQ6E%2F%24UVSON%2BQ-.U%2BRKP2CVKSQ2BU%203M1IE27F15%258P%2ARBYF9UHC5XKNAPU%2FOO%24U6XHN%3AM0UDU-H%2FIL%2AX7%2AVL4F64TK7%2BL3-9GKL%25-H%25M279TR6H%25O4%253T%2A3DYDBGQ29OHR%2FBMV2-%2B8%2BKB74NAN9O%2BHX%243E%3AGB%2BB59G630P%2BUXZ7QFAF%2BA1AI%20V1RV7J%24VM22G%249RA6ZFL66M%2B%2FTC%20P5CI%25MEAGH06EP61W00ND8%2AJC2ONFG3Q%2F0A83%2FL4AAK8OI7%2APM.P1LD%2AAW6.9D%207%24%3AT%20%2FL59UZ-Q6BGM5T280MW2HXK%3A68%25%2BB%2BRA2%2F2%2565PNM6SAH21%25V1ANH%2FR1HKSMNRNJ0%25-O.VN3.1P8D8-T1KMTCBN%3AEJ23WR6%3AMO%25TNMQH-5OJJFKB1TCIB%25EH9EDO2KD4JHLWAKUQ4FFO6EJKTT7ZTM86-%2BNPRLZS3.L0F784ZHUZNEAQ7NOE56R3C%24E4HU5-KE4QD5NC5-S%2FV6-UNW0C.WNCZBETECT9MA5Z92V%2FG%2A6IGZLHZH7XB5VR3.82%2BII34Y-89P19Y774U9-8%2B-B%2AEU%3A29D%20H1I94%2AO0%25GGGCI0F4338-BRRN5K9B5N6Z2LZ1CRRTYLZ%207ESE%3AM37%2BLDO8VIL%24%2BBE%20C%3AW06BKY22SB94CE5RO9N6IE6%25%2F2%3A.0NV3O%24R3RMG9V98E7CHC.S0VA7N1-POXWLL36O%2A4%2FTM-KAE6F%2BAM%20MS3CFN723I9MC02%3ACDKGKCGE%25OP90JMPTA9%3AIKJG0%25BS1D6151O%2BQDOBASQX%2545%25G%208DN95N59-3CD%249R8O%24NF%2B3OMANZ3GWCV93EPCQ-%2ANH.U7%25OPYOF.S5ZG3ZES%2ACSUR2F9%20%2AVLO918G81V9HDUF3A7KB%25F6NQSYG5%253NLNK6LS%25VGZ3-%2B0",
      },
      {
        type: "VAC",
        expiryDateTime: "2022-12-28T08:32:47.650Z",
        vaccineCode: "3407851000133103",
        dose: 2,
        qr: "HC1:6BFJ%G29OZVQSO2L*D7+PY80-BG5121F2O8U.DTGZ1A5965LCPRC/SIYMB79VBT0CEUHR-1UXIHTJG+K7UI3ZY8-95N0P3EGQ AE-9YO84WEWFSM8C4LNZ-KG69%DU3FUJ-FO3OLBNWZF5+D3VU6.J/VLV14C9MD.0*7TS15L+9.FILVR.J29/TD70V.UC:QWTE 4DTWCS-AGABH+SDG88FBE*Q% 9.HB14Q-V68ZS1HH-$LLL85 CU%0RM4U%A8AFFIRUHJ+JL$TLA$G1:CY-BXFM0-P.CDLD3RXAANN.R1ZSFZ/962JYQC3E5P00JPROPR/G80IOFGD3J2KEBNR6EM4N2HD42I.9XF7Z98A8G3JKVLLZ-HKDP-TK5%RK10-61S71-QPKKBGIKZ%UUYSAKND+RE2J$+H FBYE0X/L5WCXDA3991RH-:CMPQ+WJQ85WL1*VAU646T1-KH*RM$$1+LP6L3749U%T87S6UC0H8V*GEB7YDL259ETRI.SLO8VTO*5C:-VHXGD+O%OHY:7*MM$HIH*UCHQHG1AJC24QI+F8J1+N2F.F88JLY3.P8OI8GNH:XH56I0XO4E8N FO8PUXI:6L7-ABYC.+SFN6MPBQ2A8MBXN8BTD--CPXP442%*0U-2X/K*R8IWA*4PJ$AU+15AI/JE Z0T-7V3IPK4L0729IETKT+8+AAB810IL4432X7%29R:3F6R-NI-ZTE-S6Q9-0MYDJXBQCZ3E:OKZAW7D$1ST89-RPMVG$YMPOO/62Q1D  P$RK9YS//EEGRYYS6WRE*2I1OOU3 DAE4OWZ42JO%IMJ7M-*LXGAUA5223+:1Y26+LOYHFN72PIBS60I:C2/GKCGV4P680NELIX9FJKN%0HDUU33$WGJST.R3763A9A62P$XE3F6KXKR+35*5Q3UDY5L8O+2ALPV027K2G0 QRLL70Q.2TZY3$DW327W5CFD5G0VL J97U7ZTYM7L-P88M%2CN9W1VJT1D86HL2N+.DN%VT-0.BNG1",
        appleCovidCardUrl:
          "https://redirect.health.apple.com/EU-DCC/#6BFJ%25G29OZVQSO2L%2AD7%2BPY80-BG5121F2O8U.DTGZ1A5965LCPRC%2FSIYMB79VBT0CEUHR-1UXIHTJG%2BK7UI3ZY8-95N0P3EGQ%20AE-9YO84WEWFSM8C4LNZ-KG69%25DU3FUJ-FO3OLBNWZF5%2BD3VU6.J%2FVLV14C9MD.0%2A7TS15L%2B9.FILVR.J29%2FTD70V.UC%3AQWTE%204DTWCS-AGABH%2BSDG88FBE%2AQ%25%209.HB14Q-V68ZS1HH-%24LLL85%20CU%250RM4U%25A8AFFIRUHJ%2BJL%24TLA%24G1%3ACY-BXFM0-P.CDLD3RXAANN.R1ZSFZ%2F962JYQC3E5P00JPROPR%2FG80IOFGD3J2KEBNR6EM4N2HD42I.9XF7Z98A8G3JKVLLZ-HKDP-TK5%25RK10-61S71-QPKKBGIKZ%25UUYSAKND%2BRE2J%24%2BH%20FBYE0X%2FL5WCXDA3991RH-%3ACMPQ%2BWJQ85WL1%2AVAU646T1-KH%2ARM%24%241%2BLP6L3749U%25T87S6UC0H8V%2AGEB7YDL259ETRI.SLO8VTO%2A5C%3A-VHXGD%2BO%25OHY%3A7%2AMM%24HIH%2AUCHQHG1AJC24QI%2BF8J1%2BN2F.F88JLY3.P8OI8GNH%3AXH56I0XO4E8N%20FO8PUXI%3A6L7-ABYC.%2BSFN6MPBQ2A8MBXN8BTD--CPXP442%25%2A0U-2X%2FK%2AR8IWA%2A4PJ%24AU%2B15AI%2FJE%20Z0T-7V3IPK4L0729IETKT%2B8%2BAAB810IL4432X7%2529R%3A3F6R-NI-ZTE-S6Q9-0MYDJXBQCZ3E%3AOKZAW7D%241ST89-RPMVG%24YMPOO%2F62Q1D%20%20P%24RK9YS%2F%2FEEGRYYS6WRE%2A2I1OOU3%20DAE4OWZ42JO%25IMJ7M-%2ALXGAUA5223%2B%3A1Y26%2BLOYHFN72PIBS60I%3AC2%2FGKCGV4P680NELIX9FJKN%250HDUU33%24WGJST.R3763A9A62P%24XE3F6KXKR%2B35%2A5Q3UDY5L8O%2B2ALPV027K2G0%20QRLL70Q.2TZY3%24DW327W5CFD5G0VL%20J97U7ZTYM7L-P88M%252CN9W1VJT1D86HL2N%2B.DN%25VT-0.BNG1",
      },
    ],
  },
  logo: "data:image/png;base64,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",
};
