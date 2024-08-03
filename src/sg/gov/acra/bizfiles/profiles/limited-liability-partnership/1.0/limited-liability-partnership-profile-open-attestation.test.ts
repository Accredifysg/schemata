import schema from "./limited-liability-partnership-profile-open-attestation.json";
import sampleDocJson from "./limited-liability-partnership-open-attestation-sample-document.json";
import {testOaCommon} from "../../../common/1.0/tests/open-attestation";

describe("common OA Tests", () => {
  testOaCommon(schema, sampleDocJson);
});
