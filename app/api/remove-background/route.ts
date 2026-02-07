import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { image } = await request.json();

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.src = image;
    await new Promise((resolve) => {
      img.onload = resolve;
    });

    canvas.width = img.width;
    canvas.height = img.height;
    ctx?.drawImage(img, 0, 0);

    const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
    
    if (!imageData) {
      throw new Error('Failed to process image');
    }

    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      const brightness = (r + g + b) / 3;
      if (brightness > 200) {
        data[i + 3] = 0;
      }
    }

    ctx?.putImageData(imageData, 0, 0);
    const result = canvas.toDataURL('image/png');

    return NextResponse.json({ result });
  } catch (error) {
    console.error('Background removal error:', error);
    return NextResponse.json(
      { error: 'Failed to remove background' },
      { status: 500 }
    );
  }
}
