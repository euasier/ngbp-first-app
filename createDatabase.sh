mongoimport --db ngbp-first-app --collection diagnoses --drop --jsonArray --file data/diagnoses.json 
mongoimport --db ngbp-first-app --collection procedures --drop --jsonArray --file data/procedures.json
mongoimport --db ngbp-first-app --collection patients --drop --jsonArray --file data/patients.json

