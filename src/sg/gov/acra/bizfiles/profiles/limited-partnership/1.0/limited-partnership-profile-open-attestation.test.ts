import schema from "./limited-partnership-profile-open-attestation.json";
import sampleDocJson from "./limited-partnership-open-attestation-sample-document.json";
import { testOaCommon } from "../../../common/tests/open-attestation.test";

describe("common OA Tests", () => {
  testOaCommon(schema, sampleDocJson);
});
