/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const mkdirp = require("mkdirp");

const quicktype = path.join(process.cwd(), "node_modules", ".bin", "quicktype");

const generate = ({ path, rootTypeName }) => {
  console.log(`Creating types from src/${path}/schema.json`);
  mkdirp.sync(`src/__generated__/${path}`);
  execSync(
    `${quicktype} -s schema -o src/__generated__/${path}/schema.ts -t ${rootTypeName} --just-types src/${path}/schema.json --no-date-times --acronym-style original
`
  );
};

if (fs.existsSync(quicktype) && process.env.npm_config_production !== "true") {
  generate({ path: "sg/gov/tech/geekout/1.0", rootTypeName: "Geekout" });
  generate({ path: "sg/gov/tech/notarise/1.0", rootTypeName: "Notarise" });
  generate({ path: "sg/gov/moh/pdt-healthcert/2.0", rootTypeName: "PDTHealthCertV2" });
  generate({ path: "sg/gov/moh/recovery-healthcert/2.0", rootTypeName: "RECHealthCertV2" });
  generate({ path: "sg/gov/moh/vaccination-healthcert/1.0", rootTypeName: "VaccinationHealthCert" });
  generate({ path: "sg/gov/acra/bizfiles/certificates/1.0", rootTypeName: "AcraCertificate" });
  generate({ path: "sg/gov/acra/bizfiles/profiles/business/1.0", rootTypeName: "AcraBusinessProfile" });
  generate({ path: "sg/gov/acra/bizfiles/profiles/company/1.0", rootTypeName: "AcraCompanyProfile" });
  generate({
    path: "sg/gov/acra/bizfiles/profiles/limited-liability-partnership/1.0",
    rootTypeName: "AcraLimitedLiabilityPartnershipProfile"
  });
  generate({
    path: "sg/gov/acra/bizfiles/profiles/limited-partnership/1.0",
    rootTypeName: "AcraLimitedPartnershipProfile"
  });
  generate({
    path: "sg/gov/acra/bizfiles/profiles/public-accountant-firm/1.0",
    rootTypeName: "AcraPublicAccountantFirmProfile"
  });
} else {
  console.log("Not running quicktype");
}
