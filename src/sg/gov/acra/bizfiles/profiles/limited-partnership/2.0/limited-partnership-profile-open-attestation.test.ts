import schema from "./limited-partnership-profile-open-attestation.json";
import sampleDocJson from "./limited-partnership-open-attestation-sample-document.json";
import {testOaCommon} from "../../../common/tests/2.0/open-attestation";

describe("common OA Tests", () => {
    testOaCommon(schema, sampleDocJson);
});
