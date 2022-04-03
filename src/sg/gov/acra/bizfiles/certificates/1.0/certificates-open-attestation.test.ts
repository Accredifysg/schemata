import schema from "./certificates-open-attestation.json";
import sampleDocJson from "./certificates-open-attestation-sample-document.json";
import { testOaCommon } from "../../common/tests/open-attestation.test";

describe("common OA Tests", () => {
  testOaCommon(schema, sampleDocJson);
});
