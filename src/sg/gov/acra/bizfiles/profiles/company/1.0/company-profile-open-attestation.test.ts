import schema from "./company-profile-open-attestation.json";
import sampleDocJson from "./company-profile-open-attestation-sample-document.json";
import {testOaCommon} from "../../../common/1.0/tests/open-attestation";

describe("common OA Tests", () => {
  testOaCommon(schema, sampleDocJson);
});
