create trigger TR_DDD_BARROCO
on Faixa_Album for insert,update as
if (Select pm.nome from Faixa f inner join Faixa_compositor  fc on fc.faixa_num_faixa_fk = f.num_faixa Inner join Compositor c on  fc.compositor_cod_compositor_fk = c.cod_compositor
Inner join Periodo_Musical pm on pm.cod_periodo_musical=c.cod_periodomusical_fk inner join inserted ins on ins.faixa_num_fk=f.num_faixa) like 'BARROCO' AND (Select tipo_de_gravacao from faixa inner join inserted on faixa_num_fk=num_faixa) not like 'DDD' 
BEGIN
	raiserror('o tipo de gravação da faixa do período barroco não é DDD',10,1)
	rollback transaction
end