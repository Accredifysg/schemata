import schema from "./public-accountant-firm-profile-open-attestation.json";
import sampleDocJson from "./public-accountant-firm-open-attestation-sample-document.json";
import { testOaCommon } from "../../../common/tests/open-attestation";

describe("common OA Tests", () => {
  testOaCommon(schema, sampleDocJson);
});
