export default 
{
  "type": "group",
  "id": "9a99988a-0123-4456-b89a-b1607f326fd8",
  "children1": [
    {
      "type": "rule_group",
      "id": "8bb89bb9-4567-489a-bcde-f18fa52f4c9b",
      "properties": {
        "conjunction": "AND",
        "not": false,
        "field": "results"
      },
      "children1": [
        {
          "type": "rule",
          "id": "99a9baab-0123-4456-b89a-b18fa52f5162",
          "properties": {
            "field": "results.product1",
            "operator": "single_equal",
            "value": [
              "a"
            ],
            "valueSrc": [
              "value"
            ],
            "valueError": [
              null
            ],
            "valueType": [
              "text"
            ]
          }
        },
        {
          "type": "rule",
          "id": "b98898aa-cdef-4012-b456-718fa52f5e3e",
          "properties": {
            "field": "results.product2",
            "operator": "single_equal",
            "value": [
              "b"
            ],
            "valueSrc": [
              "value"
            ],
            "valueError": [
              null
            ],
            "valueType": [
              "text"
            ]
          }
        }
      ]
    }
  ]
};