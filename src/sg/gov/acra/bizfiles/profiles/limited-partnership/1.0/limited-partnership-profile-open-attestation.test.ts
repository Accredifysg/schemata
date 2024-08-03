import schema from "./limited-partnership-profile-open-attestation.json";
import sampleDocJson from "./limited-partnership-open-attestation-sample-document.json";
import {testOaCommon} from "../../../common/1.0/tests/open-attestation";

describe("common OA Tests", () => {
  testOaCommon(schema, sampleDocJson);
});
