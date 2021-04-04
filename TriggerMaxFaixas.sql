create trigger TR_MAX_FAIXAS
on Faixa_Album for insert as
if(select count(*) from Faixa_Album where album_cod_album_fk=(select album_cod_album_fk from inserted))>64
begin	
	raiserror('O numero de faixas não pode ser superior a 64 em um album',22,1)
	rollback transaction
end