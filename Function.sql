CREATE FUNCTION getAlbumByCompositorName(@compositor varchar(45))
returns table
AS
return(
SELECT DISTINCT a.cod_album,a.nome FROM Album a 
Inner JOIN Faixa_Album fa on fa.album_cod_album_fk=a.cod_album 
inner join Faixa f on fa.faixa_num_fk = f.num_faixa 
inner join Faixa_compositor fc on fc.faixa_num_faixa_fk=f.num_faixa 
inner join Compositor c on c.cod_compositor = fc.compositor_cod_compositor_fk where c.nome like '%'+@compositor+'%'
);
go