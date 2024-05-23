export default 
{
  "type": "group",
  "id": "9a99988a-0123-4456-b89a-b1607f326fd8",
  "children1": [
    {
      "type": "rule_group",
      "properties": {
        "conjunction": "AND",
        "not": false,
        "field": "cars",
        "mode": "array",
        "operator": "for_in",
        "value": [],
        "valueSrc": [],
        "valueType": []
      },
      "id": "a98ab9b9-cdef-4012-b456-71607f326fd9",
      "children1": [
        {
          "type": "rule",
          "id": "898aa8aa-0123-4456-b89a-b18fa53001b1",
          "properties": {
            "field": "cars.vendor",
            "operator": "select_equals",
            "value": [
              "Toyota"
            ],
            "valueSrc": [
              "value"
            ],
            "valueError": [
              null
            ],
            "valueType": [
              "select"
            ]
          }
        },
        {
          "type": "rule",
          "id": "aaa8a8b9-cdef-4012-b456-718fa53015a0",
          "properties": {
            "field": "cars.year",
            "operator": "equal",
            "value": [
              1990
            ],
            "valueSrc": [
              "value"
            ],
            "valueError": [
              null
            ],
            "valueType": [
              "number"
            ]
          }
        }
      ]
    },
    {
      "type": "rule",
      "id": "a8888a98-4567-489a-bcde-f18fa52ff6ab",
      "properties": {
        "field": "user.firstName",
        "operator": "equal",
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
      "type": "group",
      "id": "98baa989-4567-489a-bcde-f18fa5303f20",
      "properties": {
        "conjunction": "OR",
        "not": false
      },
      "children1": [
        {
          "type": "rule",
          "id": "889b9889-0123-4456-b89a-b18fa5303f21",
          "properties": {
            "field": "user.firstName",
            "operator": "equal",
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
          "id": "998bb88b-cdef-4012-b456-718fa5305541",
          "properties": {
            "field": "user.login",
            "operator": "equal",
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
  ],
  "properties": {
    "conjunction": "AND",
    "not": false
  }
};