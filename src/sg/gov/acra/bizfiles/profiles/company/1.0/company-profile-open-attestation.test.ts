import schema from "./company-profile-open-attestation.json";
import sampleDocJson from "./company-profile-open-attestation-sample-document.json";
import { testOaCommon } from "../../../common/tests/open-attestation.test";

describe("common OA Tests", () => {
  testOaCommon(schema, sampleDocJson);
});
