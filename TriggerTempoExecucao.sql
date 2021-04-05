CREATE TRIGGER PLAYLIST_RUN_TIME_TRIGGER on Faixa_Playlist
after insert,update as 
declare @playlistID int
select @playlistID=playlist_cod_fk from inserted

update Playlist set tempo_total=(select sum(tempoexecucao) from Faixa f where f.num_faixa in (select fp.faixa_num_faixa_fk from Faixa_Playlist fp
where fp.playlist_cod_fk=@playlistID))