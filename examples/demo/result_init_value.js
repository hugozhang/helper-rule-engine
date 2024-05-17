export default 
{
  "type": "group",
  "id": "9a99988a-0123-4456-b89a-b1607f326fd81",
  "children1": {
    "aaab8999-cdef-4012-b456-71702cd500901": {
      "type": "rule_group",
      "properties": {
        "conjunction": "AND",
        "field": "results"
      },
      "children1": {
        "99b8a8a8-89ab-4cde-b012-31702cd5078b1": {
          "type": "rule",
          "properties": {
            "field": "results.product",
            "operator": "select_equals",
            "value": [
              "abc"
            ],
            "valueSrc": [
              "value"
            ],
            "valueType": [
              "select"
            ],
            "valueError": [
              null
            ]
          }
        },
        "88b9bb89-4567-489a-bcde-f1702cd532661": {
          "type": "rule",
          "properties": {
            "field": "results.score",
            "operator": "greater",
            "value": [
              8
            ],
            "valueSrc": [
              "value"
            ],
            "valueType": [
              "number"
            ],
            "valueError": [
              null
            ]
          }
        }
      }
    }
  }
};