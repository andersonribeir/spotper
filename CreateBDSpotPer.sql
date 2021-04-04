create database BDSpotPer
ON
	PRIMARY(
		NAME = 'primario',
		FILENAME = 'C:\FBD\BDSpotPer.mdf',
        SIZE = 5120KB,
        FILEGROWTH = 1024KB	
	),


    FILEGROUP bdspotper_fg01(
        NAME = 'bdspotper_001',
        FILENAME = 'C:\FBD\bdspotper_001.ndf',
        SIZE = 1024KB,
        MAXSIZE = 3072KB,
        FILEGROWTH = 10%
    ),
    (
        NAME = 'bdspotper_002',
        FILENAME = 'C:\FBD\bdspotper_002.ndf',
        SIZE = 1024KB,
        MAXSIZE = 3072KB,
        FILEGROWTH = 10%

    ),


    FILEGROUP bdspotper_fg02(
        NAME = 'bdspotper_003',
        FILENAME = 'C:\FBD\bdspotper_003.ndf',
        SIZE = 2048KB,
        MAXSIZE = 5120KB,
        FILEGROWTH = 1024KB

    )
    
    LOG ON(
        NAME='BdSpotPer_log',
        FILENAME="D:\FBDBackup\BdSpotPer.ldf",
        SIZE=1024KB,
        FILEGROWTH=10%
    )



