use BDSpotPer
create Table Playlist
(
    cod smallint NOT NULL,
    nome varchar(45) NOT NULL,
    data_criacao DATE NOT NULL,
    tempo_total int NOT NULL,
    CONSTRAINT playlist_PK PRIMARY KEY(cod),

) ON bdspotper_fg02

create table Composicao
(
    cod_composicao SMALLINT not null,
    descricao VARCHAR(200) not null,
    tipo_composicao VARCHAR(45) NOT NULL,
    CONSTRAINT Composicao_PK PRIMARY KEY(cod_composicao)
)ON bdspotper_fg01

create table Faixa
(
    num_faixa smallint NOT NULL,
    nome VARCHAR(50) NOT NULL,
    descricao VARCHAR(200) NOT NULL,
    tipo_de_gravacao VARCHAR(3) NOT NULL,
    tempoexecucao int not null,
    cod_composicao_fk SMALLINT not null,
    CONSTRAINT Faixa_PK PRIMARY KEY(num_faixa),
    CONSTRAINT composicao_FK FOREIGN KEY (cod_composicao_fk) 
        REFERENCES Composicao (cod_composicao)
        ON DELETE NO ACTION
        ON UPDATE CASCADE

) ON bdspotper_fg02

CREATE TABLE Interprete
(
    codInterprete SMALLINT NOT NULL,
    nome VARCHAR(45) NOT NULL,
    tipo VARCHAR(45) NOT NULL,
    CONSTRAINT Interprete_PK PRIMARY KEY (codInterprete)
) ON bdspotper_fg01

CREATE TABLE Periodo_Musical
(
    cod_periodo_musical smallint NOT NULL,
	nome varchar(45) NOT NULL,
    intervalo_tempo_inicio DATE NOT NULL,
    intervalo_tempo_final DATE ,
    descricao VARCHAR,
    CONSTRAINT PeriodoMusicalPK  PRIMARY KEY (cod_periodo_musical),

)ON bdspotper_fg01

Create TABLE Compositor
(
    cod_compositor int NOT NULL,
    nome VARCHAR(45) NOT NULL,
    data_nascimento DATE NOT NULL,
    data_morte DATE,
    LOCAL_nascimento VARCHAR(100) NOT NULL,
    cod_periodo_musical smallint not NULL,
    cod_periodomusical_fk smallint NOT NULL,

    CONSTRAINT Compositor_PK  PRIMARY KEY (cod_compositor),
    CONSTRAINT periodomusical_fk FOREIGN KEY (cod_periodomusical_fk) 
        REFERENCES Periodo_Musical (cod_periodo_musical)
        ON DELETE CASCADE
        ON UPDATE CASCADE

) ON bdspotper_fg01
CREATE TABLE Gravadora
(
    cod_gravadora SMALLINT not null,
    nome VARCHAR(45) not null,
    Endereco_homepage TEXT not null,
    Endereco_fisico TEXT not null,
    CONSTRAINT Gravadora_PK PRIMARY KEY (cod_gravadora)
) ON bdspotper_fg01


Create TABLE Telefone
(
    idTelefone smallint NOT NULL,
    Telefone VARCHAR(15) NOT NULL,
    cod_gravadora_fk SMALLINT not null ,
    CONSTRAINT TelefonePK PRIMARY KEY (idTelefone),

    CONSTRAINT gravadora_fk FOREIGN KEY (cod_gravadora_fk) 
        REFERENCES Gravadora (cod_gravadora)
        ON DELETE NO ACTION
        ON UPDATE CASCADE
) ON bdspotper_fg01


CREATE TABLE Album
(
    cod_album int NOT NULL,
    descricao text,
    nome varchar(45) NOT NULL,
    Preco Decimal(5,2),
    tipo_de_compra VARCHAR(45),
    data_gravacao DATE,
    data_compra DATE,
    cod_gravadora_fk smallint NOT NULL,
    CONSTRAINT Album_PK PRIMARY KEY NONCLUSTERED (cod_album),
    CONSTRAINT gravadora_album_fk FOREIGN KEY (cod_gravadora_fk) 
        REFERENCES Gravadora (cod_gravadora)
        ON DELETE NO ACTION
        ON UPDATE CASCADE
)ON bdspotper_fg01
CREATE TABLE Faixa_Album
(

    faixa_num_fk smallint not null,
    album_cod_album_fk int not null,
	num_faixa_album int not null,
    CONSTRAINT faixa_num_faixa_album_fk FOREIGN KEY (faixa_num_fk) 
        REFERENCES Faixa (num_faixa)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT aulbum_cod_faixa_album_fk FOREIGN KEY (album_cod_album_fk) 
        REFERENCES Album (cod_album)
        ON DELETE NO ACTIon
        ON UPDATE CASCADE,
)ON bdspotper_fg01

CREATE TABLE Faixa_Playlist
(
    ultima_vez_tocada DATE NOT NULL,
    numero_vez_tocada int NOT NULL,
    faixa_num_faixa_fk smallint NOT NULL,
    playlist_cod_fk smallint NOT NULL,
    CONSTRAINT faixa_num_faixa_playlist_fk FOREIGN KEY (faixa_num_faixa_fk)
        REFERENCES Faixa (num_faixa)
        ON DELETE NO ACTION
        ON UPDATE CASCADE,
    CONSTRAINT playlist_cod_faixa_playlist_fk FOREIGN KEY (playlist_cod_fk)
        REFERENCES Playlist (cod)
        ON DELETE NO ACTION
        ON UPDATE CASCADE

) ON bdspotper_fg02

CREATE TABLE Interprete_faixa
(
    faixa_num_faixa_fk smallint NOT NULL,
    interprete_codinterprete_fk smallint NOT NULL,

    CONSTRAINT faixa_num_interprete_faixa_fk FOREIGN KEY (faixa_num_faixa_fk)
        REFERENCES Faixa (num_faixa)
        ON DELETE NO ACTION
        ON UPDATE CASCADE,

    CONSTRAINT interprete_cod_faixa_playlist_fk FOREIGN KEY (interprete_codinterprete_fk)
        REFERENCES Interprete (codInterprete)
        ON DELETE NO ACTION
        ON UPDATE CASCADE,

) ON bdspotper_fg01
CREATE TABLE Faixa_compositor
(
    faixa_num_faixa_fk smallint NOT NULL,
    compositor_cod_compositor_fk int NOT NULL,

    CONSTRAINT faixa_num_faixa_compositor_fk FOREIGN KEY (faixa_num_faixa_fk)
        REFERENCES Faixa (num_faixa)
        ON DELETE NO ACTION
        ON UPDATE CASCADE,
    CONSTRAINT compositor_cod_compositor_FK FOREIGN KEY (compositor_cod_compositor_fk)
        REFERENCES Compositor (cod_compositor)
        ON DELETE NO ACTION
        ON UPDATE CASCADE
)