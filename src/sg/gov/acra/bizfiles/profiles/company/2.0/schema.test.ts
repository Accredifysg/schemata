import Ajv from "ajv";
import {cloneDeep, omit} from "lodash";
import schema from "./schema.json";
import sampleDocJson from "./sample-document.json";
import axios from "axios";
import {testCommon} from "../../../common/tests/1.0/profile-schema";

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

describe("companyProfileSchema", () => {
    beforeAll(async () => {
        validator = await ajv.compileAsync(schema);
    });

    describe("companyType", () => {
        it("should return array of errors without companyType", () => {
            const badDoc = omit(cloneDeep(sampleDocJson), "companyType");
            expect(validator(badDoc)).toBe(false);
            expect(validator.errors).toStrictEqual([
                {
                    keyword: "required",
                    dataPath: "",
                    schemaPath: "#/required",
                    params: {missingProperty: "companyType"},
                    message: "should have required property 'companyType'"
                }
            ]);
        });
    });

    describe("representatives", () => {
        it("should return array of errors without representatives", () => {
            const badDoc = omit(cloneDeep(sampleDocJson), "representatives");
            expect(validator(badDoc)).toBe(false);
            expect(validator.errors).toStrictEqual([
                {
                    keyword: "required",
                    dataPath: "",
                    schemaPath: "#/required",
                    params: {missingProperty: "representatives"},
                    message: "should have required property 'representatives'"
                }
            ]);
        });
    });
});
