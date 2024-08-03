import schema from "./business-profile-open-attestation.json";
import sampleDocJson from "./business-profile-open-attestation-sample-document.json";
import {testOaCommon} from "../../../common/tests/2.0/open-attestation";

describe("common OA Tests", () => {
    testOaCommon(schema, sampleDocJson);
});
