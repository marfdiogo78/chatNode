import app from './config/server';
import socket from 'socket.io';

const server = app.listen(3000, () => {
  console.log('Servidor online!');
});

const io = socket.listen(server);

app.set('io', io);

io.on('connection', (socketIo) => {
  console.log('User online');

  socketIo.on('disconnect', () => {
    console.log('User offline');
  });

  socketIo.on('msgParaServidor', (data) => {

    // Dialogo
    socketIo.emit(
      'msgParaCliente',
      {
        nome: data.nome,
        mensagem: data.mensagem
      }
    )

    socketIo.broadcast.emit(
      'msgParaCliente',
      {
        nome: data.nome,
        mensagem: data.mensagem
      }
    )

    // Participantes
    if (parseInt(data.apelido_clientes) == 0) {
      socketIo.emit(
        'participantesParaCliente',
        {
          nome: data.nome
        }
      )

      socketIo.broadcast.emit(
        'participantesParaCliente',
        {
          nome: data.nome
        }
      )
    }
  });
});