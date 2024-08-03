import Ajv from "ajv";
import {cloneDeep, omit} from "lodash";
import schema from "./schema.json";
import sampleDocJson from "./sample-document.json";
import axios from "axios";
import {testCommon} from "../../../common/tests/2.0/profile-schema";

function loadSchema(uri: string) {
    return axios.get(uri).then(res => {
        return res.data;
    });
}

const ajv = new Ajv({allErrors: true, loadSchema: loadSchema});
let validator: Ajv.ValidateFunction;

describe("testCommonRequired", () => {
    testCommon(schema, sampleDocJson);
});

describe("limitedPartnershipProfileSchema", () => {
    beforeAll(async () => {
        validator = await ajv.compileAsync(schema);
    });

    describe("registrationDate", () => {
        it("should return array of errors without registrationDate", () => {
            const badDoc = omit(cloneDeep(sampleDocJson), "registrationDate");
            expect(validator(badDoc)).toBe(false);
            expect(validator.errors).toStrictEqual([
                {
                    keyword: "required",
                    dataPath: "",
                    schemaPath: "#/required",
                    params: {missingProperty: "registrationDate"},
                    message: "should have required property 'registrationDate'"
                }
            ]);
        });
    });

    describe("commencementDate", () => {
        it("should return array of errors without commencementDate", () => {
            const badDoc = omit(cloneDeep(sampleDocJson), "commencementDate");
            expect(validator(badDoc)).toBe(false);
            expect(validator.errors).toStrictEqual([
                {
                    keyword: "required",
                    dataPath: "",
                    schemaPath: "#/required",
                    params: {missingProperty: "commencementDate"},
                    message: "should have required property 'commencementDate'"
                }
            ]);
        });
    });

    describe("expiryDate", () => {
        it("should return array of errors without expiryDate", () => {
            const badDoc = omit(cloneDeep(sampleDocJson), "expiryDate");
            expect(validator(badDoc)).toBe(false);
            expect(validator.errors).toStrictEqual([
                {
                    keyword: "required",
                    dataPath: "",
                    schemaPath: "#/required",
                    params: {missingProperty: "expiryDate"},
                    message: "should have required property 'expiryDate'"
                }
            ]);
        });
    });

    describe("lpCompliance", () => {
        it("should return array of errors without lpCompliance", () => {
            const badDoc = omit(cloneDeep(sampleDocJson), "lpCompliance");
            expect(validator(badDoc)).toBe(false);
            expect(validator.errors).toStrictEqual([
                {
                    keyword: "required",
                    dataPath: "",
                    schemaPath: "#/required",
                    params: {missingProperty: "lpCompliance"},
                    message: "should have required property 'lpCompliance'"
                }
            ]);
        });
    });

    describe("partners", () => {
        it("should return array of errors without partners", () => {
            const badDoc = omit(cloneDeep(sampleDocJson), "partners");
            expect(validator(badDoc)).toBe(false);
            expect(validator.errors).toStrictEqual([
                {
                    keyword: "required",
                    dataPath: "",
                    schemaPath: "#/required",
                    params: {missingProperty: "partners"},
                    message: "should have required property 'partners'"
                }
            ]);
        });
    });
});
