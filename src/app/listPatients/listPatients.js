angular.module( 'ngbpFirstApp.listPatients', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'listPatients', {
    url: '/listPatients',
    views: {
      "main": {
        controller: 'ListPatientsCtrl',
        templateUrl: 'listPatients/listPatients.tpl.html'
      }
    },
    data:{ pageTitle: 'List of patients' }
  });
})

.controller( 'ListPatientsCtrl', function ListPatientsCtrl( $scope ) {
  // This sould call an Angular service to obtain JSON data:
  // First move the model to a service to make it global (and develop editPatient view)
  // then execute the http request to obtain data
  $scope.patients = [
	{
		"id": 1,
		"firstname": "Ashley",
		"lastName": "Chapman",
		"gender": "Female",
		"company": "Linktype",
		"job": "Marketing Assistant",
		"salary": 53059,
		"skills": [
			{
				"linkedInSkill": "Software Development"
			},
			{
				"linkedInSkill": "Upstream"
			},
			{
				"linkedInSkill": "Consumer Behaviour"
			}
		],
		"treatment": [
			{
				"diagnosesCode": "31381",
				"diagnosesDesc": "Oppositional defiant disorder",
				"procedureCode": "0234",
				"procedureDesc": "Ventricular shunt to abdominal cavity and organs",
				"drugNameGeneric": "Ethyl Alcohol",
				"drugNameBrand": "XtraCare Hand Sanitizer"
			},
			{
				"diagnosesCode": "4243",
				"diagnosesDesc": "Pulmonary valve disorders",
				"procedureCode": "9982",
				"procedureDesc": "Ultraviolet light therapy",
				"drugNameGeneric": "cinacalcet hydrochloride",
				"drugNameBrand": "Sensipar"
			},
			{
				"diagnosesCode": "20084",
				"diagnosesDesc": "Other named variants of lymphosarcoma and reticulosarcoma, lymph nodes of axilla and upper limb",
				"procedureCode": "9789",
				"procedureDesc": "Removal of other therapeutic device",
				"drugNameGeneric": "Red Snapper",
				"drugNameBrand": "Red Snapper"
			},
			{
				"diagnosesCode": "66820",
				"diagnosesDesc": "Central nervous system complications of anesthesia or other sedation in labor and delivery, unspecified as to episode of care or not applicable",
				"procedureCode": "153",
				"procedureDesc": "Operations on two or more extraocular muscles involving temporary detachment from globe, one or both eyes",
				"drugNameGeneric": "Fluorescein Sodium and Proparacaine Hydrochloride",
				"drugNameBrand": "FLUCAINE"
			},
			{
				"diagnosesCode": "38535",
				"diagnosesDesc": "Diffuse cholesteatosis of middle ear and mastoid",
				"procedureCode": "5523",
				"procedureDesc": "Closed [percutaneous] [needle] biopsy of kidney",
				"drugNameGeneric": "Ceftriaxone Sodium",
				"drugNameBrand": "Ceftriaxone Sodium"
			}
		]
	},
	{
		"id": 2,
		"firstname": "Virginia",
		"lastName": "Chavez",
		"gender": "Female",
		"company": "Rhyloo",
		"job": "Electrical Engineer",
		"salary": 50881,
		"skills": [
			{
				"linkedInSkill": "Atmel AVR"
			},
			{
				"linkedInSkill": "Indoor Air Quality"
			}
		],
		"treatment": [
			{
				"diagnosesCode": "V4365",
				"diagnosesDesc": "Knee joint replacement",
				"procedureCode": "8771",
				"procedureDesc": "Computerized axial tomography of kidney",
				"drugNameGeneric": "Allergenic Extracts Alum Precipitated",
				"drugNameBrand": "CENTER-AL - LOLIUM PERENNE POLLEN"
			},
			{
				"diagnosesCode": "73027",
				"diagnosesDesc": "Unspecified osteomyelitis, ankle and foot",
				"procedureCode": "3855",
				"procedureDesc": "Ligation and stripping of varicose veins, other thoracic vessels",
				"drugNameGeneric": "sodium monofluorophosphate",
				"drugNameBrand": "Aquafresh"
			},
			{
				"diagnosesCode": "37122",
				"diagnosesDesc": "Secondary corneal edema",
				"procedureCode": "4695",
				"procedureDesc": "Local perfusion of small intestine",
				"drugNameGeneric": "Acetaminophen, Diphenhydramine HCl",
				"drugNameBrand": "Pain Reliever PM"
			},
			{
				"diagnosesCode": "E8337",
				"diagnosesDesc": "Fall on stairs or ladders in water transport, occupant of military watercraft, any type",
				"procedureCode": "3534",
				"procedureDesc": "Infundibulectomy",
				"drugNameGeneric": "OLANZAPINE",
				"drugNameBrand": "OLANZAPINE"
			}
		]
	},
	{
		"id": 3,
		"firstname": "Jeffrey",
		"lastName": "Meyer",
		"gender": "Male",
		"company": "Wikizz",
		"job": "Office Assistant I",
		"salary": 56270,
		"skills": [
			{
				"linkedInSkill": "Workplace Violence"
			},
			{
				"linkedInSkill": "CQG"
			},
			{
				"linkedInSkill": "Flow Cytometry"
			}
		],
		"treatment": [
			{
				"diagnosesCode": "1369",
				"diagnosesDesc": "Unspecified infectious and parasitic diseases",
				"procedureCode": "9910",
				"procedureDesc": "Injection or infusion of thrombolytic agent",
				"drugNameGeneric": "MAGNESIUM HYDROXIDE",
				"drugNameBrand": "Milk of Magnesia"
			}
		]
	},
	{
		"id": 4,
		"firstname": "Kathleen",
		"lastName": "Foster",
		"gender": "Female",
		"company": "Vipe",
		"job": "Programmer IV",
		"salary": 86931,
		"skills": [
			{
				"linkedInSkill": "Motivational Speaking"
			},
			{
				"linkedInSkill": "GMC PrintNet T"
			},
			{
				"linkedInSkill": "Squid"
			}
		],
		"treatment": [
			{
				"diagnosesCode": "67611",
				"diagnosesDesc": "Cracked nipple associated with childbirth, delivered, with or without mention of antepartum condition",
				"procedureCode": "8877",
				"procedureDesc": "Diagnostic ultrasound of peripheral vascular system",
				"drugNameGeneric": "TOPICAL STARCH",
				"drugNameBrand": "Forest Sap Patch"
			}
		]
	},
	{
		"id": 5,
		"firstname": "Lawrence",
		"lastName": "Walker",
		"gender": "Male",
		"company": "Skyndu",
		"job": "Professor",
		"salary": 80120,
		"skills": [
			{
				"linkedInSkill": "Management by Objectives"
			}
		],
		"treatment": [
			{
				"diagnosesCode": "01162",
				"diagnosesDesc": "Tuberculous pneumonia [any form], bacteriological or histological examination unknown (at present)",
				"procedureCode": "9546",
				"procedureDesc": "Other auditory and vestibular function tests",
				"drugNameGeneric": "Aspirin",
				"drugNameBrand": "Aspirin"
			},
			{
				"diagnosesCode": "80608",
				"diagnosesDesc": "Closed fracture of C5-C7 level with central cord syndrome",
				"procedureCode": "5733",
				"procedureDesc": "Closed [transurethral] biopsy of bladder",
				"drugNameGeneric": "Tryptophan,",
				"drugNameBrand": "Tryptophan"
			},
			{
				"diagnosesCode": "28261",
				"diagnosesDesc": "Hb-SS disease without crisis",
				"procedureCode": "6579",
				"procedureDesc": "Other repair of ovary",
				"drugNameGeneric": "OCTINOXATE, TITANIUM DIOXIDE, ZINC OXIDE",
				"drugNameBrand": "SurfersSkin Sunscreen Zinc"
			}
		]
	},
	{
		"id": 6,
		"firstname": "Jessica",
		"lastName": "Sullivan",
		"gender": "Female",
		"company": "Tagfeed",
		"job": "VP Quality Control",
		"salary": 87733,
		"skills": [
			{
				"linkedInSkill": "TMJ Dysfunction"
			},
			{
				"linkedInSkill": "UEFI"
			},
			{
				"linkedInSkill": "OLEDB"
			}
		],
		"treatment": [
			{
				"diagnosesCode": "1562",
				"diagnosesDesc": "Malignant neoplasm of ampulla of vater",
				"procedureCode": "7499",
				"procedureDesc": "Other cesarean section of unspecified type",
				"drugNameGeneric": "Cefdinir",
				"drugNameBrand": "Cefdinir"
			},
			{
				"diagnosesCode": "V6281",
				"diagnosesDesc": "Interpersonal problems, not elsewhere classified",
				"procedureCode": "0476",
				"procedureDesc": "Repair of old traumatic injury of cranial and peripheral nerves",
				"drugNameGeneric": "Cetirizine Hydrochloride",
				"drugNameBrand": "simply right cetirizine hydrochloride"
			},
			{
				"diagnosesCode": "37541",
				"diagnosesDesc": "Chronic canaliculitis",
				"procedureCode": "8586",
				"procedureDesc": "Transposition of nipple",
				"drugNameGeneric": "calcium carbonate",
				"drugNameBrand": "Tums"
			}
		]
	},
	{
		"id": 7,
		"firstname": "Louise",
		"lastName": "Carter",
		"gender": "Female",
		"company": "Aimbu",
		"job": "Environmental Specialist",
		"salary": 59840,
		"skills": [
			{
				"linkedInSkill": "CGI/Perl"
			}
		],
		"treatment": [
			{
				"diagnosesCode": "0052",
				"diagnosesDesc": "Food poisoning due to Clostridium perfringens (C. welchii)",
				"procedureCode": "7963",
				"procedureDesc": "Debridement of open fracture site, carpals and metacarpals",
				"drugNameGeneric": "Neomycin and Polymyxin B Sulfates and Bacitracin Zinc",
				"drugNameBrand": "Triple Antibiotic"
			},
			{
				"diagnosesCode": "59689",
				"diagnosesDesc": "Other specified disorders of bladder",
				"procedureCode": "8342",
				"procedureDesc": "Other tenonectomy",
				"drugNameGeneric": "Homosalate and Oxybenzone",
				"drugNameBrand": "Bain de Soleil"
			},
			{
				"diagnosesCode": "80601",
				"diagnosesDesc": "Closed fracture of C1-C4 level with complete lesion of cord",
				"procedureCode": "9543",
				"procedureDesc": "Audiological evaluation",
				"drugNameGeneric": "Neomycin and Polymyxin B Sulfates",
				"drugNameBrand": "Neomycin and Polymyxin B Sulfates"
			},
			{
				"diagnosesCode": "37173",
				"diagnosesDesc": "Corneal staphyloma",
				"procedureCode": "9115",
				"procedureDesc": "Microscopic examination of peritoneal and retroperitoneal specimen, toxicology",
				"drugNameGeneric": "lactulose",
				"drugNameBrand": "Lactulose"
			},
			{
				"diagnosesCode": "64870",
				"diagnosesDesc": "Bone and joint disorders of back, pelvis, and lower limbs of mother, unspecified as to episode of care or not applicable",
				"procedureCode": "9638",
				"procedureDesc": "Removal of impacted feces",
				"drugNameGeneric": "AMIODARONE HYDROCHLORIDE",
				"drugNameBrand": "Amiodarone Hydrochloride"
			}
		]
	},
	{
		"id": 8,
		"firstname": "Todd",
		"lastName": "Ford",
		"gender": "Male",
		"company": "Midel",
		"job": "Associate Professor",
		"salary": 70456,
		"skills": [
			{
				"linkedInSkill": "MPR"
			},
			{
				"linkedInSkill": "RNAseq"
			}
		],
		"treatment": [
			{
				"diagnosesCode": "31232",
				"diagnosesDesc": "Kleptomania",
				"procedureCode": "7693",
				"procedureDesc": "Closed reduction of temporomandibular dislocation",
				"drugNameGeneric": "Neomycin and Polymyxin B Sulfates",
				"drugNameBrand": "Neomycin and Polymyxin B Sulfates"
			},
			{
				"diagnosesCode": "33519",
				"diagnosesDesc": "Other spinal muscular atrophy",
				"procedureCode": "0141",
				"procedureDesc": "Operations on thalamus",
				"drugNameGeneric": "oxybutynin",
				"drugNameBrand": "Oxytrol For Women"
			},
			{
				"diagnosesCode": "38513",
				"diagnosesDesc": "Adhesions of drum head to promontorium",
				"procedureCode": "7815",
				"procedureDesc": "Application of external fixator device, femur",
				"drugNameGeneric": "oxymetazoline hydrochloride",
				"drugNameBrand": "Good Sense Nasal"
			},
			{
				"diagnosesCode": "45182",
				"diagnosesDesc": "Phlebitis and thrombophlebitis of superficial veins of upper extremities",
				"procedureCode": "765",
				"procedureDesc": "Temporomandibular arthroplasty",
				"drugNameGeneric": "Simvastatin",
				"drugNameBrand": "Simvastatin"
			}
		]
	},
	{
		"id": 9,
		"firstname": "Christopher",
		"lastName": "Wallace",
		"gender": "Male",
		"company": "Dabjam",
		"job": "Editor",
		"salary": 97902,
		"skills": [
			{
				"linkedInSkill": "IED"
			},
			{
				"linkedInSkill": "Zen Shiatsu"
			}
		],
		"treatment": [
			{
				"diagnosesCode": "01776",
				"diagnosesDesc": "Tuberculosis of spleen, tubercle bacilli not found by bacteriological or histological examination, but tuberculosis confirmed by other methods [inoculation of animals]",
				"procedureCode": "0532",
				"procedureDesc": "Injection of neurolytic agent into sympathetic nerve",
				"drugNameGeneric": "Bisacodyl",
				"drugNameBrand": "Dulcolax"
			},
			{
				"diagnosesCode": "9473",
				"diagnosesDesc": "Burn of gastrointestinal tract",
				"procedureCode": "4582",
				"procedureDesc": "Open total intra-abdominal colectomy",
				"drugNameGeneric": "GlyBURIDE",
				"drugNameBrand": "GlyBURIDE"
			},
			{
				"diagnosesCode": "1411",
				"diagnosesDesc": "Malignant neoplasm of dorsal surface of tongue",
				"procedureCode": "3899",
				"procedureDesc": "Other puncture of vein",
				"drugNameGeneric": "Ferric Subsulfate",
				"drugNameBrand": "Monsels Solution"
			},
			{
				"diagnosesCode": "63430",
				"diagnosesDesc": "Spontaneous abortion, complicated by renal failure, unspecified",
				"procedureCode": "6732",
				"procedureDesc": "Destruction of lesion of cervix by cauterization",
				"drugNameGeneric": "DIMETHICONE",
				"drugNameBrand": "Skin Protectant Flushable Wipes"
			}
		]
	},
	{
		"id": 10,
		"firstname": "Charles",
		"lastName": "Boyd",
		"gender": "Male",
		"company": "Oyoba",
		"job": "Web Designer III",
		"salary": 85197,
		"skills": [
			{
				"linkedInSkill": "Food Processing"
			},
			{
				"linkedInSkill": "vShield"
			}
		],
		"treatment": [
			{
				"diagnosesCode": "E8981",
				"diagnosesDesc": "Accident caused by other burning materials",
				"procedureCode": "4949",
				"procedureDesc": "Other procedures on hemorrhoids",
				"drugNameGeneric": "PREGABALIN",
				"drugNameBrand": "Lyrica"
			},
			{
				"diagnosesCode": "73600",
				"diagnosesDesc": "Unspecified deformity of forearm, excluding fingers",
				"procedureCode": "3775",
				"procedureDesc": "Revision of lead [electrode]",
				"drugNameGeneric": "BETHANECHOL CHLORIDE",
				"drugNameBrand": "Bethanechol Chloride"
			},
			{
				"diagnosesCode": "9151",
				"diagnosesDesc": "Abrasion or friction burn of finger(s), infected",
				"procedureCode": "8417",
				"procedureDesc": "Amputation above knee",
				"drugNameGeneric": "Plantago Pyrite",
				"drugNameBrand": "Plantago Pyrite"
			}
		]
	},
	{
		"id": 11,
		"firstname": "Keith",
		"lastName": "Johnson",
		"gender": "Male",
		"company": "Dynazzy",
		"job": "GIS Technical Architect",
		"salary": 83687,
		"skills": [
			{
				"linkedInSkill": "Distance Learning"
			}
		],
		"treatment": [
			{
				"diagnosesCode": "3139",
				"diagnosesDesc": "Unspecified emotional disturbance of childhood or adolescence",
				"procedureCode": "6029",
				"procedureDesc": "Other transurethral prostatectomy",
				"drugNameGeneric": "PANTOPRAZOLE SODIUM",
				"drugNameBrand": "PANTOPRAZOLE SODIUM"
			},
			{
				"diagnosesCode": "0901",
				"diagnosesDesc": "Early congenital syphilis, latent",
				"procedureCode": "7865",
				"procedureDesc": "Removal of implanted devices from bone, femur",
				"drugNameGeneric": "Methylprednisolone Acetate",
				"drugNameBrand": "Methylprednisolone Acetate"
			},
			{
				"diagnosesCode": "E8331",
				"diagnosesDesc": "Fall on stairs or ladders in water transport injuring occupant of small boat, powered",
				"procedureCode": "9227",
				"procedureDesc": "Implantation or insertion of radioactive elements",
				"drugNameGeneric": "Vitamin A and Vitamin D",
				"drugNameBrand": "Vitamin A and Vitamin D"
			}
		]
	},
	{
		"id": 12,
		"firstname": "Sara",
		"lastName": "Tucker",
		"gender": "Female",
		"company": "Wordpedia",
		"job": "Electrical Engineer",
		"salary": 83126,
		"skills": [
			{
				"linkedInSkill": "Bluetooth"
			},
			{
				"linkedInSkill": "Kayak"
			},
			{
				"linkedInSkill": "SharePoint Designer"
			}
		],
		"treatment": [
			{
				"diagnosesCode": "96909",
				"diagnosesDesc": "Poisoning by other antidepressants",
				"procedureCode": "9465",
				"procedureDesc": "Drug detoxification",
				"drugNameGeneric": "Isosorbide mononitrate",
				"drugNameBrand": "Isosorbide"
			}
		]
	},
	{
		"id": 13,
		"firstname": "Bruce",
		"lastName": "Taylor",
		"gender": "Male",
		"company": "Linktype",
		"job": "Speech Pathologist",
		"salary": 94106,
		"skills": [
			{
				"linkedInSkill": "NLB"
			}
		],
		"treatment": [
			{
				"diagnosesCode": "E9794",
				"diagnosesDesc": "Terrorism involving firearms",
				"procedureCode": "9372",
				"procedureDesc": "Dysphasia training",
				"drugNameGeneric": "Avobenzone, Homosalate, Octisalate, and Octocrylene",
				"drugNameBrand": "Gillette Fusion ProSeries"
			},
			{
				"diagnosesCode": "80062",
				"diagnosesDesc": "Open fracture of vault of skull with cerebral laceration and contusion, with brief [less than one hour] loss of consciousness",
				"procedureCode": "313",
				"procedureDesc": "Other incision of larynx or trachea",
				"drugNameGeneric": "Calcium carbonate",
				"drugNameBrand": "DG health calcium antacid"
			}
		]
	},
	{
		"id": 14,
		"firstname": "Gregory",
		"lastName": "Graham",
		"gender": "Male",
		"company": "Feedspan",
		"job": "Nurse Practicioner",
		"salary": 61080,
		"skills": [
			{
				"linkedInSkill": "CQC"
			},
			{
				"linkedInSkill": "XHTML"
			},
			{
				"linkedInSkill": "Commercial Awareness"
			}
		],
		"treatment": [
			{
				"diagnosesCode": "V8543",
				"diagnosesDesc": "Body Mass Index 50.0-59.9, adult",
				"procedureCode": "7055",
				"procedureDesc": "Repair of rectocele with graft or prosthesis",
				"drugNameGeneric": "Brome Grass",
				"drugNameBrand": "Brome Grass"
			}
		]
	},
	{
		"id": 15,
		"firstname": "Louis",
		"lastName": "Bishop",
		"gender": "Male",
		"company": "Agimba",
		"job": "Paralegal",
		"salary": 76627,
		"skills": [
			{
				"linkedInSkill": "Pdf"
			},
			{
				"linkedInSkill": "Dry Eye"
			}
		],
		"treatment": [
			{
				"diagnosesCode": "E9343",
				"diagnosesDesc": "Vitamin k [phytonadione] causing adverse effects in therapeutic use",
				"procedureCode": "9914",
				"procedureDesc": "Injection or infusion of immunoglobulin",
				"drugNameGeneric": "OCTINOXATE, OXYBENZONE",
				"drugNameBrand": "CD DIORSKIN NUDE CREME Nude Glow Creme Gel Compact Makeup Sunscreen Broad Spectrum SPF20 030"
			},
			{
				"diagnosesCode": "V763",
				"diagnosesDesc": "Screening for malignant neoplasms of bladder",
				"procedureCode": "7724",
				"procedureDesc": "Wedge osteotomy, carpals and metacarpals",
				"drugNameGeneric": "Sodium Polystyrene Sulfonate",
				"drugNameBrand": "Sodium Polystyrene Sulfonate"
			},
			{
				"diagnosesCode": "1809",
				"diagnosesDesc": "Malignant neoplasm of cervix uteri, unspecified site",
				"procedureCode": "9546",
				"procedureDesc": "Other auditory and vestibular function tests",
				"drugNameGeneric": "Dimethicone",
				"drugNameBrand": "Remedy Barrier Cream Cloths"
			}
		]
	},
	{
		"id": 16,
		"firstname": "Beverly",
		"lastName": "Hunter",
		"gender": "Female",
		"company": "Riffpath",
		"job": "Database Administrator II",
		"salary": 58944,
		"skills": [
			{
				"linkedInSkill": "Lyric Soprano"
			},
			{
				"linkedInSkill": "Aquaculture"
			},
			{
				"linkedInSkill": "Higher Education Administration"
			}
		],
		"treatment": [
			{
				"diagnosesCode": "99959",
				"diagnosesDesc": "Other serum reaction",
				"procedureCode": "1289",
				"procedureDesc": "Other operations on sclera",
				"drugNameGeneric": "CAMPHOR",
				"drugNameBrand": "Earths Care Arnica Compound"
			},
			{
				"diagnosesCode": "67453",
				"diagnosesDesc": "Peripartum cardiomyopathy, antepartum condition or complication",
				"procedureCode": "7642",
				"procedureDesc": "Other total mandibulectomy",
				"drugNameGeneric": "Fexofenadine Hydrochloride",
				"drugNameBrand": "smart sense allergy relief"
			},
			{
				"diagnosesCode": "6143",
				"diagnosesDesc": "Acute parametritis and pelvic cellulitis",
				"procedureCode": "9774",
				"procedureDesc": "Removal of other vaginal pessary",
				"drugNameGeneric": "OCTINOXATE, TITANIUM DIOXIDE, DIMETHICONE, ALUMINUM HYDROXIDE, STEARIC ACID, HYDROXYPROLINE,",
				"drugNameBrand": "ISAKNOX AGELESS SERUM MOIST PEARL BASE"
			},
			{
				"diagnosesCode": "37739",
				"diagnosesDesc": "Other optic neuritis",
				"procedureCode": "5299",
				"procedureDesc": "Other operations on pancreas",
				"drugNameGeneric": "Minoxidil",
				"drugNameBrand": "minoxidil"
			},
			{
				"diagnosesCode": "2793",
				"diagnosesDesc": "Unspecified immunity deficiency",
				"procedureCode": "8188",
				"procedureDesc": "Reverse total shoulder replacement",
				"drugNameGeneric": "Ensulizole",
				"drugNameBrand": "Covergirl Outlast Stay Fabulous 3in1 Foundation"
			}
		]
	}];

  $scope.deletePatient = function (index) {
      $scope.patients.splice(index,1);
  };

});

